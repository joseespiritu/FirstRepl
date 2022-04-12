import {User} from './user.js';
import {Product, Products} from './product.js';
import {nanoid} from 'nanoid';
const mySecret = process.env['DB_URI'];

console.log(mySecret);

const ryan = new User('Ryan', 'Name', nanoid());
console.log(ryan);

console.log(new Product('laptop', 3000));