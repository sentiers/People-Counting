var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// --------------------------------------------------------
var recordSchema = new Schema({
    "in": Number,
    "out": Number,
    "total": Number,
    "time": Date
});
var Record = mongoose.model("record", recordSchema);
module.exports = Record;