'use strict';

/**
 * modelman model: 评论表
 */

module.exports = {
  commentId: { n: '所属评论', type: 'ObjectId', f: false, t: false, r: true, ref: 'Comment' }, //排序权重。
  articleId: { n: '所属文章', type: 'ObjectId', f: false, t: true, r: true, ref: 'Article' }, //所属文章
  authorNickname: { n: '评论人昵称', type: 'String', f: true, t: true, d: '匿名网友' }, //评论人昵称
  authorUrl: { n: '评论人主页', type: 'String', f: true, t: true }, //评论人主页
  authorEmail: { n: '评论人邮箱', type: 'String', f: true, t: true }, //评论人邮箱
  authorAvatar: { n: '评论人头像', type: 'String', f: true, t: false, d: '' }, //评论人头像
  mdContent: { n: '评论的markdown内容', type: 'String', f: true, t: false, r: true }, //评论的markdown内容
  htContent: { n: '评论的html内容', type: 'String', f: false, t: false }, //评论的html内容
  likeCount: { n: '点赞数量', type: 'Number', default: 0 }, //点赞数量
  commentCount: { n: '回复评论数量', type: 'Number', default: 0 }, //回复评论数量
  createTime: { n: '创建时间', type: 'Timestamp', t: true, f: false }, //创建时间
  updateTime: { n: '更新时间', type: 'Timestamp', t: true, f: false } //更新时间
}