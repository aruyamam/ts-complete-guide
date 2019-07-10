import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { ChatacterCollection } from './CharacterCollection';

// const numberCollection = new NumbersCollection([50, 3, -5, 0]);
// const sorter = new Sorter(numberCollection);
// sorter.sort();
// console.log(numberCollection.data);

const chatacterCollection = new ChatacterCollection('Xaayb');
const sorter = new Sorter(chatacterCollection);
sorter.sort();
console.log(chatacterCollection.data);
