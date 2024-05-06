//Getting the sum of array numbers
function sumArray(arr)
{
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
    {
        sum += arr[i];
    }
    return sum;
}

const numbers = [2, 4, 6, 8, 10];
console.log(sumArray(numbers));

let num = [90, 200, 1, 67, 23];
console.log(sumArray(num));

//Getting the difference of arraynumbers
function subtractArray(num)
{
    //Check if the array is empty
    if (num.length == 0)
    {
        throw new Error("Array is empty");
    }
    //Initializing the result with the 1st element
    let  subtract = num[0];

    //Iterate through the array
    for (let i = 1; i < num.length; i++)
    {
        subtract -= num[i];
    }
    return subtract;
}
let sub = [398, 45, 20, 12];
console.log(subtractArray(sub));