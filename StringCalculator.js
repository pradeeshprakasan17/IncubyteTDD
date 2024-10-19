function add(numbers){


    //replace delimiter into ,
    numbers = numbers.replace(/[^0-9-,]/g, ",");

    // split numbers by commas separator 
    let numberArray = numbers.split(",");
    
    let sum = 0;
    let negativeNumbers = [];
    
    for (let i = 0; i < numberArray.length; i++) {
       
    let num = Number(numberArray[i]);

    if (num < 0) {
        negativeNumbers.push(num);
      } else {
        sum += num;
      }
    }

    if (negativeNumbers.length > 0) {
      throw new Error("Negative numbers not allowed: " + negativeNumbers.join(", "));
    }

    return sum;
}

console.log(add(""));           
console.log(add("1"));         
console.log(add("1,5"));        
console.log(add("//;\n1;2")); 

try {
  console.log(add("-1,2"));     
} catch (e) {
  console.error(e.message);
}

try {
  console.log(add("3,-5,-2"));   
} catch (e) {
  console.error(e.message);
}
