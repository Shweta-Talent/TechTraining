"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mongoose_1 = require("mongoose");
// import bodyParser from "body-parser";
var app = (0, express_1.default)();
var port = 3000;
mongoose_1.default.connect('mongodb+srv://shwetat:mHNCTQ2du3CpqkNI@titans.1kizif5.mongodb.net/talents"');
var db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'conncetion error'));
db.once('open', function () {
    console.log("connected to mongoose");
});
app.listen(port, function () {
    console.log("server is running");
});
