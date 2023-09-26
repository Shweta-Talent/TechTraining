"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BLog_1 = require("../Controllers/BLog");
const CategoryRouter = (0, express_1.Router)();
CategoryRouter.post('/category', BLog_1.categoryList);
exports.default = CategoryRouter;
