let fibonacciNumbers = [1, 2];
let lastNumber;//Last number in fibonacciNumbers
let secLastNumber;//Second from last number in fibonacciNumbers
function generateFibonacci(){

    lastNumber = fibonacciNumbers[fibonacciNumbers.length-1];//Last number in fibonacciNumbers
    secLastNumber = fibonacciNumbers[fibonacciNumbers.length-2];//Second from last number in fibonacciNumbers 

    while ((lastNumber + secLastNumber) < 500){
        let newFibonacci = (lastNumber + secLastNumber);
        fibonacciNumbers.push(newFibonacci);

        //Update lastNumber and secLastNumber after adding so that when the while loop checks, its using new numbers.
        lastNumber = fibonacciNumbers[fibonacciNumbers.length-1];//Last number in fibonacciNumbers
        secLastNumber = fibonacciNumbers[fibonacciNumbers.length-2];//Second from last number in fibonacciNumbers 
    }
}
function printFibonacci(){
    let outputString = "";
    for(let i = 0; i < fibonacciNumbers.length; i++){
        outputString += "<p>" + fibonacciNumbers[i] + "</p>";
    }
    document.getElementById("output").innerHTML = outputString;
}

generateFibonacci();
printFibonacci();

