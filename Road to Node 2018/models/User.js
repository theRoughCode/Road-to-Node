const mongoose = require('mongoose');

// Defines the User properties
const userSchema = mongoose.Schema({
  first: String,
  last: String,
  handle: String
});

// Converts doc to json
userSchema.methods.toJSONFor = function() {
  const { first, last, handle } = this;
  return { first, last, handle };
};

// Exports the User model
module.exports = mongoose.model('User', userSchema);
