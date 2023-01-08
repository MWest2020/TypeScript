"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharactersCollection_1 = require("./CharactersCollection");
const NumbersCollection_1 = require("./NumbersCollection");
const LinkedList_1 = require("./LinkedList");
const numbersCollection = new NumbersCollection_1.NumbersCollection([69, 0, 10, 420, -1, 69, 5]);
numbersCollection.sort();
// console.log(numbersCollection.data);
const charactersCollection = new CharactersCollection_1.CharactersCollection("Elena walks around like a cave girl");
charactersCollection.sort();
// console.log(charactersCollection.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(1);
linkedList.add(999);
linkedList.add(69);
linkedList.add(420);
// const LinkedListSorter = new Sorter(linkedList)
linkedList.sort();
// linkedList.print();
