// process1
function add(num1,num2){
    num2 = num2 || 20;
    return num1 + num2;
}

const total = add(15);
console.log(total);

// process2
function add(num1,num2 = 20){
    return num1 + num2;
}

const total = add(15);
console.log(total);