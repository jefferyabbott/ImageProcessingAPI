"use strict";
exports.__esModule = true;
var express_1 = require("express");
var index_1 = require("./routes/index");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
var path = require('path');
app.use('/assets', express_1["default"].static(path.join(__dirname, '..', 'assets')));
app.use('/api', index_1["default"]);
app.listen(port, function () {
    console.log("Server started on port " + port + ".");
});
