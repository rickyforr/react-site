// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema

var User = new Schema({
    username: {type: String},
},
    { collection: 'users'}
    );

module.exports = mongoose.model('User', User);

// the schema is useless so far
// we need to create a model using it


// make this available to our users in our Node applications
