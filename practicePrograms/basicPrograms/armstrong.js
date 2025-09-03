//  traditional approach
function isValidNum(num){
    if(num <= 0){
        console.log("Invalid Number/input. \n");
        return false;
    }
    return true;
}

//  Counts number of digits
function power(num) {
    let pow = 0;
    while(num > 0) {
        num = Math.floor(num/10);
        pow++;
    }
    return pow;
}

//  function to check whether the number is armstrong or not
function isArmstrong(num) {

    if(!isValidNum(num)) {
        return;
    }

    let original = num;

    let pow = power(num);

    let res = 0;
    while(num > 0) {
        let mod = num % 10;
        num = Math.floor(num / 10);

//        let cnt = 0;
//        let mul = 1;
//
//        while (cnt < pow) {
//            mul *= mod;
//            cnt++;
//        }
//        res += mul;
       res = res + mod ** pow;
    }

    if(res === original) {
        console.log(`${original} is armstrong number.\n`);
    } else {
        console.log(`${original} is NOT armstrong number.\n`);
    }
}

isArmstrong(153);
isArmstrong(170);
isArmstrong(0);
isArmstrong(370);
isArmstrong(-370);
isArmstrong(1634);


////////////  using Arrow Function

//Arrow Function: checks for valid number/imput
const isValidNum_01 = (num) => {
    if(num <= 0) {
        return false;
    }
    return true;
}

// Arrow Function: counts the number of digits
const power_01 = (num) => {
    let pow = 0;
    while(num > 0) {
        num = Math.floor(num/10);
        pow++;
    }
    return pow;
}

//  Arrow Function: function to check whether the number is armstrong or not
const isArmstrong_01 = (num) => {

    if(!isValidNum_01(num)) {
        console.log(num, "Invalid Number/input. \n");
        return;
    }

    let original = num;
    let pow = power_01(num);

    let res = 0;
    while(num > 0) {
        let mod = num % 10;

//        let mul = 1;
//        let cnt = 0;
//        while(cnt < pow) {
//            mul = mul * mod;
//            cnt++;
//        }
        res = res + mod ** pow;
        num = Math.floor(num/10);
    }

    if(res === original) {
        console.log(`${original} is armstrong number.\n`);
    } else {
        console.log(`${original} is NOT armstrong number.\n`);
    }
}

isArmstrong_01(153);
isArmstrong_01(170);
isArmstrong_01(0);
isArmstrong_01(370);
isArmstrong_01(-370);
isArmstrong_01(1634);
