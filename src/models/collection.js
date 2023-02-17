'use strict';

class Collection {
  constructor(model) {
    this.model = model;
  }

  async create(json) {
    try {

      const record = await this.model.create(json);
      return record;

    } catch (e) {
      console.log('Error in create');
      return e;

    }
  }

  async read(id = null) {
    try {
      if (!id) {
        const records = await this.model.findAll();
        return records;
      } else {
        const record = await this.model.findByPk(id);
        return record;
      }
    } catch (e) {
      console.log('Error in read');
      return e;
    }

  }
  async update(json, id) {
    try {
      const record = await this.model.update(json, { where: { id: id } });
      return record;      
    } catch (e) {
      console.log('Error in update');
    }
  }

  async delete(id) {
    try {
      await this.model.destroy({ where: { id: id } });
      
    }catch (e) {
      console.log('Error in delete');
    }
  }
}


module.exports = Collection;
