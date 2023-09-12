"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addGender = void 0;
const uuid_1 = require("uuid");
const gender_1 = require("../models/gender");
const addGender = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Gender = [
        {
            genderId: (0, uuid_1.v4)(),
            gender: "Male",
        },
        {
            genderId: (0, uuid_1.v4)(),
            gender: "Female"
        },
        {
            genderId: (0, uuid_1.v4)(),
            gender: "Non-Binary Person"
        },
        {
            genderId: (0, uuid_1.v4)(),
            gender: "Trans Gender"
        }
    ];
    const result = yield gender_1.GenderModel.insertMany(Gender);
});
exports.addGender = addGender;
