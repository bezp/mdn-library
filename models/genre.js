var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    name: { type: String, required: true, min: 3, max: 100}
    // first_name: {type: String, required: true, max: 100},
    // family_name: {type: String, required: true, max: 100},
    // date_of_birth: {type: Date},
    // date_of_death: {type: Date},
    // title: {type: String, required: true},
    // author: {type: Schema.ObjectId, ref: 'Author', required: true},
    // summary: {type: String, required: true},
    // isbn: {type: String, required: true},
    // genre: [{type: Schema.ObjectId, ref: 'Genre'}]
  }
);

// Virtual for grnre url
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);