import { Sorter } from "./sorter";
import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from "./NumbersCollection";
import { LinkedList} from "./LinkedList"


const numbersCollection = new NumbersCollection( [69,0, 10, 420,  -1,69,  5] )
numbersCollection.sort()
// console.log(numbersCollection.data);


const charactersCollection = new CharactersCollection("Elena walks around like a cave girl")
charactersCollection.sort();
// console.log(charactersCollection.data);


const linkedList = new LinkedList();

linkedList.add(1);
linkedList.add(999)
linkedList.add(69);
linkedList.add(420)

// const LinkedListSorter = new Sorter(linkedList)
linkedList.sort()

// linkedList.print();



