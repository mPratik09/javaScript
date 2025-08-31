let n = prompt("Enter the input number: " );

let arr = [];

const initialVal = 0;

for(let i=1; i<=n; i++){
    arr[i] = i;
}
console.log(arr);

const sum = arr.reduce((res, curr) => {
    return res + curr;
});
console.log("Sum:\t", sum);

// Approach 1:
const fact = arr.reduce((res, curr) => {
    return res * curr;
});
console.log("Factorial:\t", fact);

////// *******************  OR    *******************

// Approach 2:
const fact_01 = (res, curr) => {
    return res * curr;
};
const resFact = arr.reduce(fact_01);
console.log("Factorial_01:\t", resFact);

