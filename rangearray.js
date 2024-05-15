/*Write a range function that takes two arguments, start and end, and returns
an array containing all the numbers from start up to and including end.*/

//Declare the function range taking two parameters
function range(start, end)
{
    //Declare an empty array 
    let arr = [];
    //Iterating through the range of values from start to end
    for(let i = start; i <= end; i++)
        {
            arr.push(i);
        }
        //Returning the value
        return arr;
}
console.log(range(1,10));
 
//Writing a summation function

//Declaring a function
function summation(start, end)
{
    //Calling the previous function and assigning it a variable
    const numbers = range(start, end);
    //Initializing a variable to store the summation
    let sum = 0;
    //Iterating through the numbers
    for (let i = 0; i < numbers.length; i++)
        {
            sum += numbers[i];
         }
         //Returning the value
         return sum;
}
console.log(summation(1,10));

/**modify your range function to take an optional third
argument that indicates the “step” value used when building the array. If no
step is given, the elements should go up by increments of one, corresponding
to the old behavior. The function call range(1, 10, 2) should return [1,
3, 5, 7, 9]. Make sure this also works with negative step values so that
range(5, 2, -1) produces [5, 4, 3, 2]
 * 
 */
//Declaring the function
function rangeArr(start, end, step = 1)
{
    //Declaring an empty array
    const rangeArray = [];

    //Checking the condition if the step is graeter or lesser than 1
    if (step > 0)
        {
            //Iterating through the numbers
            for (let i = start; i <= end; i += step)
                {
                    rangeArray.push(i);
                }
        }
        else {
            for (let i = start; i >= end; i += step )
                {
                    rangeArray.push(i);
                }
        }
        return rangeArray;

}
console.log(rangeArr(8,2,-1));
console.log(rangeArr(2,12,1));
console.log(rangeArr(56,22,-5));
console.log(rangeArr(0,30,10));