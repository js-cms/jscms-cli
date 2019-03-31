'use strict';

const Service = require('egg').Service;

class CrudService extends Service {

  /**
   * CRUD：查询符合条件的单条数据
   */
  async crudFindOne(data) {
    return this.ctx.model.Category.insertMany(data).exec();
  }

  /**
   * CRUD：查询符合条件的多条数据
   */
  async crudFind(data) {
    return this.ctx.model[modelName].insertMany(data).exec();
  }

  /**
   * CRUD：创建一条或多条数据
   */
  async crudInsertMany(data) {
    return this.ctx.model[modelName].insertMany(data).exec();
  }

  /**
   * CRUD：更新符合条件的一条或多条数据
   */
  async crudUpdateMany(data) {
    return this.ctx.model[modelName].insertMany(data).exec();
  }

  /**
   * CRUD：更新符合条件的一条或多条数据
   */
  async crudRemove(data) {
    return this.ctx.model[modelName].insertMany(data).exec();
  }
}

module.exports = CrudService;
