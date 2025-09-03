//  traditional function
function add(a, b){
    console.log("\nUsing Traditional function \n\t Addition is ", a+b, "\n");
}
add(3, 9);

//  function expressions
const addition_01 = function(a, b) {
    console.log("Using Functional expression: \n" + 
        "\tAddition_01 is", a+b, "\n");
}
addition_01(11, 12);

//  Arrow Function
const addition_02 = (a, b) => {
    console.log("Using Arrow expression: \n" + 
        "\tAddition_02 is", a+b, "\n");
    };
    addition_02(50, 150);

// Arrow function using template literals for formatted output
    const addition_03 = (a, b) => {
        console.log(`Using expression:\n\tAddition_03 is ${a + b} \n`);

};
addition_03(50, 150);
