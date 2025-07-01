"use strict";

var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _viewEngione = _interopRequireDefault(require("./config/viewEngione"));
var _web = _interopRequireDefault(require("./route/web"));
var _connectDB = _interopRequireDefault(require("./config/connectDB"));
var _cors = _interopRequireDefault(require("cors"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
require('dotenv').config();
var app = (0, _express["default"])();
app.use((0, _cors["default"])({
  origin: [
    'http://localhost:3000',
    'https://thaibinh-test-fe-booking-care.vercel.app'
  ],
  credentials: true
}));

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(_bodyParser["default"].json({
  limit: '50mb'
}));
app.use(_bodyParser["default"].urlencoded({
  limit: '50mb',
  extended: true
}));
(0, _viewEngione["default"])(app);
(0, _web["default"])(app);
(0, _connectDB["default"])();
var port = process.env.PORT || 6969;
app.listen(port, function () {
  console.log("Backend Nodejs is runing on the port: " + port);
});