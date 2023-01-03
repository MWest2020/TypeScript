import { Sorter } from "./sorter";

export class CharactersCollection extends Sorter{

    // whenever an instance of CharactersCollection is made, a string is needed as an argument
    constructor(public data: string){  super()  }

    // gets the length of data and makes it accessible via .length, instead of a method
    get length(): number{
        return this.data.length
    }

    
    compare(leftIndex: number, rightIndex: number): boolean{
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    }


    swap(leftIndex: number, rightIndex: number): void{
        const characters = this.data.split('');
        let temp = characters[leftIndex]
        characters[leftIndex] = characters[rightIndex]
        characters[rightIndex] = temp

        this.data = characters.join('')
    }





}