import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { ChatacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

// const numberCollection = new NumbersCollection([50, 3, -5, 0]);
// const sorter = new Sorter(numberCollection);
// sorter.sort();
// console.log(numberCollection.data);

// const chatacterCollection = new ChatacterCollection('Xaayb');
// const sorter = new Sorter(chatacterCollection);
// sorter.sort();
// console.log(chatacterCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
