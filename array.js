let fruits = ['Apples', 'Oranges', 'Grapes'];
console.log(fruits[0]);
console.log(fruits);

//Removes the last element 
//fruits.pop();
//console.log(fruits);

//To remove a specific element
const elements = fruits.filter(fruits => fruits != 'Grapes');
console.log(elements); 

fruits.unshift("Bananas");
console.log(fruits);
fruits.shift("Oranges");
console.log(fruits);

//Using foreach method 
let numbers = [2, 4, 6, 8, 10];
numbers.forEach(element => {
    console.log(element * 4);
});

//Using map method
const array = [1, 2, 3];
const anotherArray = array.map(element => element * 2);
console.log(anotherArray);

//Array Destructing: allows to extract values from arrays and assign them to a variable in a single line
const values = [4, 5, 6, 7];
const [c, d, e] = values;
console.log(c, d, e);
