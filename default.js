function add(num1, num2 = 20){
    
    
    //(this is ES5 method to write default)..   
    // if(num2 == undefined){
    //     num2 = 0;
    // }

    //another way to write default ES6..
    // num2 = num2 || 20;
    return num1 + num2;
}

const total = add(15, 1);
console.log(total);