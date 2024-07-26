//A function that checks if two strings are anagrams of each other

function areAnagrams(str1, str2){

    //Checking if the string is null
    if (str1 == null || str2 == null){
        return false;
    }
    
    //Converting the string to lowercase and to be as an array of each character
    let array1 = str1.toLowerCase().split('').sort();
    let array2 = str2.toLowerCase().split('').sort();

    //checking if the two strings are similar of which I will use the join function to put the characters together to be a string
    return array1.join('') == array2.join('');
}

//checking in the console
console.log(areAnagrams('ABCd1', 'BDA1C'));