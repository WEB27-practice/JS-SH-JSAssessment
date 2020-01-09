function reverseString(str) {
    let arr = str.split('');
    arr.reverse();
    
    let revstr = arr.join('')
    return revstr;
}

const reverseString2 = str => str.split("").reverse().join('');

console.log(reverseString("John Smith"));
console.log(reverseString2("John Smith"));

// take in a string and return a palindrome

function checkPalindrome(str){
    // take a string in, split it, and set it to an variable (arr)
    let arr = str.split('');
    
    // reverse the string
    arr.reverse()

    //
    let revStr = arr.join('');

    if(revStr === str){
        return true;
    } else {
        return false;
    }
}

console.log(checkPalindrome('racecar'));
console.log(checkPalindrome('Devin'));

// change the function into a const and use an arrow function
const checkPalindrome2 = (str) => {
    // string the methods together
    let arr = str.split('').reverse().join('');

    // compare the let variable to the parameter
    if(arr === str){
        return true;
    } else {
        return false;
    }
}

console.log(checkPalindrome2('racecar'));
console.log(checkPalindrome2('Devin'));