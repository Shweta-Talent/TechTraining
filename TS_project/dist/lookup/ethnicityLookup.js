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
exports.addEthnicity = void 0;
const uuid_1 = require("uuid");
const ethnicity_1 = require("../models/ethnicity");
const addEthnicity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Ethnicity = [
        {
            ethnicityId: (0, uuid_1.v4)(),
            ethnicity: "Asian",
        },
        {
            ethnicityId: (0, uuid_1.v4)(),
            ethnicity: "Middle Eastrn"
        },
        {
            ethnicityId: (0, uuid_1.v4)(),
            ethnicity: "North Indian"
        },
        {
            ethnicityId: (0, uuid_1.v4)(),
            ethnicity: "Soth Indian"
        }
    ];
    const result = yield ethnicity_1.EthnicityModel.insertMany(Ethnicity);
});
exports.addEthnicity = addEthnicity;
