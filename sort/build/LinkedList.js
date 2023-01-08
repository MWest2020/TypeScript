"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const sorter_1 = require("./sorter");
class Node {
    constructor(data) {
        this.data = data;
        // reference to either next node or null (list is empty)
        this.next = null;
    }
}
class LinkedList extends sorter_1.Sorter {
    constructor() {
        //don't need a super() with standard constructor
        // constructor(){
        //     super()
        // }
        super(...arguments);
        // variable to keep track of the beginning of the linked list (head)
        this.head = null;
    }
    // to add Node(s) * data 
    add(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        // in case only a head exists, it is.. the tail as well
        let tail = this.head;
        // while there is a next, set next to tail (and look again)
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    }
    get length() {
        //needs to return a number.
        if (this.head == null) {
            return 0;
        }
        //setting up variables to:
        // - keep track of length
        // - keep track of the current node 
        let length = 1;
        let node = this.head;
        // self-explanatory, but...
        while (node.next) {
            length++;
            // keep track, otherwise loop will hang
            node = node.next;
        }
        return length;
    }
    at(index) {
        if (this.head == null) {
            //can't return Node, and 
            throw new Error('Index out of bounds');
        }
        let counter = 0;
        let node = this.head;
        // self-explanatory, but...
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('Index out of bounds');
    }
    compare(leftIndex, rightIndex) {
        if (!this.head) {
            throw Error("List is empty");
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }
    swap(leftIndex, rightIndex) {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        const temp = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = temp;
    }
    print() {
        if (!this.head) {
            throw Error("There's nothing to print");
        }
        let node = this.head;
        while (node) {
            console.log(`Node: ${node} with value: ${node.data}`);
            node = node.next;
        }
    }
}
exports.LinkedList = LinkedList;
