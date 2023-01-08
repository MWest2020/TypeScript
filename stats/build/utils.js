"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToNumber = exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    const dateParts = dateString.split('/').map((value) => {
        return parseInt(value);
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateStringToDate = dateStringToDate;
// lmfao bit too autistic to avoid parseInt in code
const stringToNumber = (string) => {
    return parseInt(string);
};
exports.stringToNumber = stringToNumber;
