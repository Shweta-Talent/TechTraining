"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Login_1 = require("../Controllers/Login");
const LoginRoute = (0, express_1.Router)();
LoginRoute.post('/Login', Login_1.Login);
exports.default = LoginRoute;
