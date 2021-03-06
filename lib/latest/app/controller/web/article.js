/**
 * 文章页渲染器
 */

'use strict';

const BaseController = require('./base');
const _ = require('lodash');

class ArticleController extends BaseController {

  /**
   * 入口
   */
  async index() {
    // 初始化
    await this.init();
    // 加载处理器
    await this.handler();
  }

  /**
   * 处理器
   */
  async handler() {
    const {
      ctx,
      service
    } = this;
    const numberId = ctx.params[0];

    /**
     * 获取该文章的邻居
     */
    async function getNeighbor(article) {
      let articles = await service.web.article.all();
      let prevArticle = '';
      let nextArticle = '';
      for (let index = 0; index < articles.length; index++) {
        const item = articles[index];
        if (String(article._id) === String(item._id)) {
          prevArticle = index > 0 ? articles[index-1]._doc : '';
          nextArticle = index < (articles.length-1) ? articles[index+1]._doc : '';
        }
      }
      return {
        prevArticle,
        nextArticle
      }
    }

    // 获取文章
    const article = await service.web.article.numberId(numberId);

    const { prevArticle, nextArticle } = await getNeighbor(article);

    // 如果通过numberId找到文章，则返回404
    if (!article) return this.notFound();

    // 获取文章评论
    const comments = await service.web.comment.articleId(article._id);

    // 更新文章浏览量
    await service.web.article.updateVis(article._id);

    // 元信息合并
    let webConfig = this.cache('WEB_CONFIG');
    const {
      subtitle,
      separator
    } = webConfig.site;
    let meta = {};
    let keywords = article.keywords.join(',');
    if (article.isIndepMeta === true) {
      meta.title = article.indepMetaTitle || article.title;
      meta.keywords = article.indepMetaKeywords || keywords;
      meta.description = article.indepMetaDescription || article.description;
    } else {
      meta.title = `${article.title}${separator}${subtitle}`;
      meta.keywords = keywords;
      meta.description = article.description;
    }

    // 覆盖元信息
    this.setMeta(meta);

    // 获取关联文章
    let relatedArticles = await this._getRelated(article);

    this.cache('RENDER_PARAM', {
      // 页面类型: String
      pageType: 'article' || 'unknown',
      // 文章数字id: Number
      numberId: numberId || 0,
      // 上一篇文章: Object
      prevArticle,
      // 下一篇文章：Object
      nextArticle,
      // 文章对象: Object
      article: article || {},
      // 该文章的评论: Array
      comments: comments || [],
      // 相关文章: Array
      relate: relatedArticles || []
    });

    await this.render('/pages/article', {});
  }

  /**
   * 文章关联搜索
   * @param {String} 关键字
   */
  async _searchArticle(keyword) {
    const {
      service
    } = this;
    let regKeyword = new RegExp(keyword, 'i'); //不区分大小写
    let whereOr = [];
    let where = {}
    if (keyword) {
      whereOr.push({
        title: {
          $regex: regKeyword
        }
      });
      whereOr.push({
        content: {
          $regex: regKeyword
        }
      });
    }
    if (whereOr.length) {
      where = {
        '$or': whereOr
      }
    }
    let articlesRes = await service.web.article.search(where);
    return articlesRes;
  }

  /**
   * 获取相关推荐文章
   */
  async _getRelated(article) {
    let relatedArticles = [];
    if (article.keywords.length === 1) {
      let articles = await this._searchArticle(article.keywords[0]);
      relatedArticles = articles;
    } else if (article.keywords.length === 2) {
      let articles = await this._searchArticle(article.keywords[0]);
      relatedArticles = articles;
      articles = await this._searchArticle(article.keywords[1]);
      relatedArticles = relatedArticles.concat(articles);
    } else if (article.keywords.length === 3) {
      let articles = await this._searchArticle(article.keywords[0]);
      relatedArticles = articles;
      articles = await this._searchArticle(article.keywords[1]);
      relatedArticles = relatedArticles.concat(articles);
      articles = await this._searchArticle(article.keywords[2]);
      relatedArticles = relatedArticles.concat(articles);
    }
    if (relatedArticles.length > 6) {
      relatedArticles = relatedArticles.slice(0, 6);
    } else if (relatedArticles.length === 0) {
      relatedArticles = relatedArticles.concat(this.cache('RENDER_DATA').randomArticles3);
      if (relatedArticles.length > 6) {
        relatedArticles = relatedArticles.slice(0, 6);
      }
    }
    return relatedArticles;
  }

}

module.exports = ArticleController;