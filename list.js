/*Write a function arrayToList that builds up a list structure like the one
77
shown when given [1, 2, 3] as argument*/
function arrayToList(array)
{
    //Initializing two variables
    let list = null;
    let currentNode = null;

    //Iterating through the list of array
    for (let i = 0; i < array.length; i++)
        {
            //Creating  a new node to store the property
            const node = {value: array[i], rest: null};

            //Craeting a condition to check if the list is empty 
            if (list == null)
                {
                    list = node;
                    currentNode = list;
                }
                //If the list is not empty to add another node and point it as currentnode
                else{
                    currentNode.rest = node;
                    currentNode = node;
                }
        }
        return list;
}
const numbers = [1,2,3];
console.log(arrayToList(numbers));