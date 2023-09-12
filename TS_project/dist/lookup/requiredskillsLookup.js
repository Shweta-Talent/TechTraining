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
exports.addSkills = void 0;
const uuid_1 = require("uuid");
const skills_1 = require("../models/skills");
const addSkills = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const SkillsList = [
        {
            skillId: (0, uuid_1.v4)(),
            skillName: "Dance"
        },
        {
            skillId: (0, uuid_1.v4)(),
            skillName: "Swim"
        },
        {
            skillId: (0, uuid_1.v4)(),
            skillName: "Play"
        },
        {
            skillId: (0, uuid_1.v4)(),
            skillName: "Workout"
        }
    ];
    const result = yield skills_1.SkillModel.insertMany(SkillsList);
});
exports.addSkills = addSkills;
