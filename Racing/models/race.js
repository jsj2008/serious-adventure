/**
 * Created with JetBrains WebStorm.
 * User: stry41802
 * Date: 19/03/13
 * Time: 5:54 PM
 * To change this template use File | Settings | File Templates.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Runner = new Schema({
    Barrier : Number,
    Handicap: String,
    LastResult: String,
    RiderName: String ,
    RiderRating: Number,
    Rtng: Number,
    RunnerName: String,
    RunnerRating: Number,
    RunnerNo: Number,
    Scratched: Boolean,
    Weight: String
});

var RaceSchema = new Schema({
    RaceNo : { type : Number, index : true },
    Month : Number,
    Day : Number,
    Time : Number,
    CloseTime : Date,
    MeetingCode: String,
    RaceName : String,
    Distance : Number,
    Runners: [Runner]
});

module.exports = mongoose.model('Race', RaceSchema);
