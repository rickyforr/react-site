//server/db/mongoose.js

const mongoose = require('mongoose') // 1

mongoose.Promise = global.Promise   // 2
mongoose.connect(process.env.MONGODB_URI) // 3

module.exports = {mongoose} // 4