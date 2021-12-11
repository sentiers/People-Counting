var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// --------------------------------------------------------
var recordSchema = new Schema({
    "in_count": Number,
    "out_count": Number,
    "total_count": Number,
    "time": Date
});
var Record = mongoose.model("record", recordSchema);
module.exports = Record;