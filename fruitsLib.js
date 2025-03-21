    // fruitsLib.js
// Part B
    const fs = require('fs');

    let fruits = [];

    // Function to add a fruit to the list
    function addFruit(name, color, price) { // Corrected function name
        fruits.push({
            name: name,
            color: color,
            price: price
        });
        console.log('fruit added:' + name);
    }

    // Function get colors for a fruit
    function getColorOf(fruitName) {
        for (let fruit of fruits) {
            if (fruit.name === fruitName) {
                return fruit.color;
            }
        }
    }

    // Function get price for fruit
    function getPriceOf(fruitName) {
        for (let fruit of fruits) {
            if (fruit.name === fruitName) {
                return fruit.price;
            }
        }
    }

    //list of fruit
    function listFruits() {
        console.log('Here are the fruit:');
        for (let fruit of fruits) {
            console.log('-' + fruit.name); // Corrected to '-'
        }
    }

    //add some fruits

    // addFruit('banana', 'red', 12); // Moved to test1.js
    // addFruit('apple', 'orange', 20); // Moved to test1.js
    // addFruit('mango', 'green', 20); // Moved to test1.js
    // listFruits(); // Moved to test1.js
    // console.log("banana price is :" + getPriceOf("banana")); // Moved to test1.js
    // console.log("mango color is :" + getColorOf("mango")); // Moved to test1.js

//Part B
    //Save
    function save() {
        const jsonData = JSON.stringify(fruits, null, 2);
        fs.writeFileSync('fruits.json', jsonData);
        console.log('Data saved to fruits.json');
    }

    //Load
    function load() {
        try {
            const jsonData = fs.readFileSync('fruits.json', 'utf8');
            fruits = JSON.parse(jsonData);
            console.log('Fruit loaded from fruits.json');
        } catch (error) {
            console.log('Error loading fruits.json:', error.message);
        }
    }
    // save();
    load(); //load fruits from json file on startup
    // listFruits();

    module.exports = {
        addFruit, // Corrected export
        getColorOf,
        getPriceOf,
        listFruits,
        save,
    };