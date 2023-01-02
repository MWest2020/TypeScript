export class Sorter {
    constructor(public collection: number[] | string){

    }

    sort(): void{
        const { length }  = this.collection;

        for(let i =0 ; i < length; i+=1 ){
            for(let j = 0 ; j < length -i -1; j +=1 ){
                
                //typeguard. tried with typeof, but it's like Java here
                // Apparently anything with a constructor (duh) uses instanceof 
                if(this.collection instanceof Array<number>){
                    if(this.collection[j] > this.collection[j +1]){
                    
                        const temp: number = this.collection[j]
                        this.collection[j] = this.collection[j+1]
                        this.collection[j+1] = temp
                    }
                }

                // typeof -> primitive
                if(typeof this.collection == 'string'){
                    

                }

                //test this
                if(this.collection instanceof String){

                }


            }
          
        }

    }
}