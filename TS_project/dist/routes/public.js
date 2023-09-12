"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicRouter = void 0;
const express_1 = require("express");
const public_1 = require("../controllers/public");
const publicRouter = (0, express_1.Router)();
exports.publicRouter = publicRouter;
publicRouter.post("/signup", public_1.signup);
publicRouter.post("/login", public_1.login);
