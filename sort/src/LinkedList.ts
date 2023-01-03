import { Sorter } from "./sorter";

class Node {
    // reference to either next node or null (list is empty)
    next: Node | null = null;
    constructor(public data: number ){
    }
}

export class LinkedList extends Sorter{
    

    //don't need a super() with standard constructor
    // constructor(){
    //     super()
    // }


    // variable to keep track of the beginning of the linked list (head)
    head: Node | null = null;
    
    // to add Node(s) * data 
    add(data: number): void{
        const node = new Node(data)

        if(!this.head){
            this.head = node
            return;
        }

        // in case only a head exists, it is.. the tail as well
        let tail = this.head;

        // while there is a next, set next to tail (and look again)
        while (tail.next) {
            tail = tail.next
        }

        tail.next = node

    }

    get length(): number{
        //needs to return a number.
        if(this.head == null){return 0;}
        
        //setting up variables to:
        // - keep track of length
        // - keep track of the current node 
        let length:number = 1;
        let node = this.head

        // self-explanatory, but...
        while (node.next){
            length++
            // keep track, otherwise loop will hang
            node = node.next
        }

        return length;
    }

    at(index: number): Node{
        
        if(this.head == null){
            //can't return Node, and 
            throw new Error('Index out of bounds')
        }
        
        let counter = 0;
        let node: Node | null = this.head

        // self-explanatory, but...
        while (node){
            
            if(counter === index){
                return node
            }
            
            counter++
            node = node.next
           
        }

        throw new Error('Index out of bounds')
    }


    compare(leftIndex:number, rightIndex: number): boolean{

        if(!this.head){
            throw Error("List is empty")
        }

        return this.at(leftIndex).data > this.at(rightIndex).data;

    }

    swap(leftIndex: number, rightIndex: number ) : void {
        const leftNode =  this.at(leftIndex)
        const rightNode = this.at(rightIndex)

        const temp = leftNode.data
        leftNode.data = rightNode.data
        rightNode.data = temp

    }

    print():void{
        if(!this.head){
            throw Error("There's nothing to print")
        }

        let node : Node | null = this.head

        while (node){
            console.log(
                `Node: ${node} with value: ${node.data }` 
            )
            node = node.next
        }

    }
}