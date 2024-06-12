// PART 1 

let globalCountV = 0;

function incrementCall(){
    try {
        globalCountV++;
        console.log("Global count V:", globalCountV);
        incrementCall();
    } catch (error) {
        console.error("error occured:", error);
        console.log("value of global counter variable at the time of error:", globalCountV);
    }
}

//return incrementCall();






// PART 2
// Create a nested array in an array and flatten it 
function flatArr(arr) {
    let flattened = [];

    arr.forEach(thing => {
        if (Array.isArray(thing)) {
            flattened = flattened.concat(flatArr(thing));
        } else {
            flattened.push(thing);
        }
    });

    return flattened;
}

const nestedArray = [2, [4, 6], 8, [10, 12]];
const flattened = flatArr(nestedArray);
console.log(flattened);




//write a function that takes a parameter n and adds list of prime numbers
function isPrime(number) {
    if (number <= 1) return false;
    if (number === 2) return true;
    for (let i = 2; i < number; i++){
        if (number % i === 0) return false 
    }

    return true;
}
const textElement = document.querySelector("#textEl")
console.log(textElement)

 function addPrimeNum(n) {
    
     let primeList = [];
    for (let j = 2; j <= n; j++) {
        if (isPrime(j)) {
            primeList.push(j);
        }
    }
    textElement.textContent += " " + primeList.join(', ');

 // alert added
    alert("Calculation is done!");
    
}

addPrimeNum(10000);