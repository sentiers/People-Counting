//==== DEPENDENCIES =========================================
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//==== ROUTES ================================================
var root = require(__dirname + '/app/routes/root');

//==== MONGOOOSE AND MONGODB ==================================
var url = 'mongodb+srv://dbuser:dbuser@countingrecords.zcgy9.mongodb.net/records?retryWrites=true&w=majority';
mongoose.connect(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false
}).then(() => console.log('MongoDB 연결...'))
  .catch((err) => console.log(err));

//==== CONFIGURATION OF EXPRESS AND PASSPORT =================
app.use(express.static(path.join(__dirname, 'app')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, '/app/views'))
app.set('view engine', 'ejs');

//==== ROUTING ===============================================
app.use('/', root);

//==== LISTEN TO THE SERVER =================================
app.listen(process.env.PORT || 8080,
  () => console.log('localhost:8080 에서 서버 시작'));