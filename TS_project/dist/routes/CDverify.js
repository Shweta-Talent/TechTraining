"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoute = void 0;
const express_1 = require("express");
const verification_1 = require("../controllers/verification");
const adminRoute = (0, express_1.Router)();
exports.adminRoute = adminRoute;
adminRoute.post("/verifyCD", verification_1.verify);
