// test1.js

const { addFruit, getColorOf, getPriceOf, listFruits, save } = require('./fruitsLib');

addFruit('banana', 'yellow', 12); // Corrected function name
addFruit('apple', 'red', 20); // Corrected function name
addFruit('mango', 'green', 20); // Corrected function name
listFruits(); // Corrected function name
console.log("banana price is :" + getPriceOf("banana"));
console.log("mango color is :" + getColorOf("mango"));

save();