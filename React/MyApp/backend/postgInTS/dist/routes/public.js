"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Login_1 = require("../controllers/Login");
const publicRoute = (0, express_1.Router)();
publicRoute.use('/login', Login_1.Login);
exports.default = publicRoute;
