"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sorter_1 = require("./sorter");
const numbers = [0, 10, -1, 5];
const sorter = new sorter_1.Sorter(numbers);
sorter.sort();
console.log(sorter.collection);
