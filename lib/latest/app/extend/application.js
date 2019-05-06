/**
 * application 框架扩展
 */

const _  = require('lodash');

/**
 * @description api错误类型，继承Error。
 */
class ApiError extends Error {
  /**
   * @description api错误类型，继承Error。
   * @param {String} message 消息文本
   * @param {Number} code 错误代码
   */
  constructor(
    message = '未知错误',
    code = 1
  ) {
    super(message);
    this.name = 'apierror';
    this.message = message;
    this.code = code;
  }
}

module.exports = {

  /**
   * 校验登陆用户的权限
   * @param {Array|String} powers 权限值
   */
  hasPowers(powers, targetUser) {
    let _powers = [];
    let user = targetUser || this.ctx.locals.currentUser.user;
    if (!user.powers || user.powers.length === 0) return false;
    if (typeof powers !== 'object') {
      _powers = [String(powers)];
    } else {
      _powers = _.cloneDeep(powers);
    }
    if (_powers[0] === 'super') return true;
    let res = [];
    _powers.forEach(p => {
      if (user.powers.includes(p)) res.push(true);
    });
    return res.length === user.powers.length;
  },

  /**
   * 存放缓存数据的变量
   */
  _cache: '{}',

  /**
   * 操作缓存方法
   * @param {String} key 键
   * @param {String} value 值
   */
  cache(key, value, time = 86400000) {
    let cacheObject = JSON.parse(this._cache);
    if (key && !value) {
      return cacheObject[key];
    } else if (key && value) {
      cacheObject[key] = value;
      this._cache = JSON.stringify(cacheObject);
      // 清理内存缓存
      this.clearCache(key, time);
    }
  },

  /**
   * 清理缓存方法
   * @param {String} key 键
   * @param {Number} tiem 清理时间
   */
  clearCache(key, time) {
    const clear = () => {
      let cacheObject = JSON.parse(this._cache);
      if (key && value) delete cacheObject[key];
      this._cache = JSON.stringify(cacheObject);
    }
    if (time > 0) {
      let timer = setTimeout(() => {
        clear();
        clearTimeout(timer);
      }, time);
    }
  },

  /**
   * @description 抛出JSON错误
   * @param {String} msg
   * @param {Number} code
   */
  throwJsonError(
    msg = '未知错误',
    code = 1
  ) {
    throw new ApiError(msg, code);
  }
};
