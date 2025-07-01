"use strict";

var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _viewEngione = _interopRequireDefault(require("./config/viewEngione"));
var _web = _interopRequireDefault(require("./route/web"));
var _connectDB = _interopRequireDefault(require("./config/connectDB"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }

require('dotenv').config();

var app = (0, _express["default"])();

// ✅ Cấu hình CORS thủ công
app.use((req, res, next) => {
  const allowedOrigins = [
    'http://localhost:3000',
    'https://thaibinh-test-fe-booking-care.vercel.app'
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  // Nếu request là preflight (OPTIONS) thì trả về 200 luôn
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  next();
});

// Body parser config
app.use(_bodyParser["default"].json({
  limit: '50mb'
}));
app.use(_bodyParser["default"].urlencoded({
  limit: '50mb',
  extended: true
}));

// View engine và route
(0, _viewEngione["default"])(app);
(0, _web["default"])(app);

// Kết nối DB
(0, _connectDB["default"])();

// Start server
var port = process.env.PORT || 6969;
app.listen(port, function () {
  console.log("Backend Nodejs is running on the port: " + port);
});
