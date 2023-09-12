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
exports.addLocation = void 0;
const uuid_1 = require("uuid");
const location_1 = require("../models/location");
const addLocation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Locations = [
        {
            locationId: (0, uuid_1.v4)(),
            locationName: "Surat"
        },
        {
            locationId: (0, uuid_1.v4)(),
            locationName: "Chennai"
        },
        {
            locationId: (0, uuid_1.v4)(),
            locationName: "Mumbai"
        },
        {
            locationId: (0, uuid_1.v4)(),
            locationName: "Bangalore"
        },
    ];
    const result = yield location_1.LocationModel.insertMany(Locations);
});
exports.addLocation = addLocation;
