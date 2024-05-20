//Reverse an array 
function reverseArray(array)
{
    return array.reverse();
}

const words = ["Alice", "Maingi", "Kaau"];
console.log(reverseArray(words));

//Reversing an array of numbers
function reverseNum(arr)
{
    //Check if the array is empty
    if ( arr.length == 0)
    {
        throw new Error ("Empty array");
    }
    //Iterate through the array
    let reversable = arr[0];
    for (let i = 0; i < arr.length; i++)
    {
         return arr.reverse([i]);
    }
}
let numbers = [2, 4, 6, 8];
console.log(reverseNum(numbers));

/**Arrays have a reverse method that changes the array by inverting the order in
which its elements appear. For this exercise, write two functions, reverseArray
and reverseArrayInPlace. The first, reverseArray, should take an array as
argument and produce a new array that has the same elements in the inverse
order. The second, reverseArrayInPlace, should do what the reverse method
does: modify the array given as argument by reversing its elements. Neither
may use the standard reverse method.*/

function reverseArray(arr)
{//Creating a variable to store the reversed numbers
    const newArr = [];

//Iterating through the loop 
    for (let i = arr.length - 1; i >= 0; i--)
        {
            newArr.push(arr[i]);
        }
        return newArr;
}
const originalArr = [4,6,8,10,12];
const reversedArr = reverseArray(originalArr);

console.log("The original array is:", originalArr);
console.log("The reversed array is:", reversedArr);

//There is no creation of another variable as the original raay should be reversed
function reverseArrayInPlace(arr)
{
    //Iterating through the array and swapping the elements
    for (let i = 0; i < Math.floor(arr.length/2); i++)
        {
            //Creating a variable to store the element when swapping
            const temp = arr[i];
            arr[i] = arr[arr.length - 1 -i];
            arr[arr.length - 1 -i] = temp;
        }
        return arr;
}
const reverseNumbers = [21,23,24,27,28,30];
console.log("The reversal of the elements is:", reverseArrayInPlace(reverseNumbers));
