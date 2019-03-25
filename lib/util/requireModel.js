const modelman = require('modelman');
const mongoose = require('mongoose');

function requireModel(modelPath, name) {
  let model = new modelman.Model({
    name: name || undefined,
    displayName: name || undefined
  });
  model.assign(require(modelPath));
  let mongooseSchema = model.to.mongoose(mongoose.Schema);
  return mongooseSchema;
}

module.exports = requireModel;
