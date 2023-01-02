import { Sorter } from "./sorter";

const numbers: number[] = [0, 10, -1, 5]

const  sorter = new Sorter(numbers)

sorter.sort();

console.log(sorter.collection);

