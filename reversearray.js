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