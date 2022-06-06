import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([4, -3, 110, 2])
numbersCollection.sort();
console.log(numbersCollection.data)

// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(sorter.collection)

const charactersCollection = new CharactersCollection('pDLaHUA');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(32);
linkedList.add(-52);
linkedList.add(70);

linkedList.sort();
linkedList.print()
