//  traditional approach
function isValidNum(num){
    if(num <= 0){
        console.log("Invaid Number/input. \n");
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

function isArmstrong(num) {

    if(!isValidNum(num)) {
        return;
    }

    let temp = num;
    let original = num;

    let pow = power(num);

    let res = 0;
    while(temp > 0) {
        let mod = temp % 10;
        temp = Math.floor(temp / 10);

        let cnt = 0;
        let mul = 1;

        while (cnt < pow) {
            mul *= mod;
            cnt++;
        }
        res += mul;
    }

    if(res === original) {
        console.log(`${original} is armstrong number.\n`);
    } else {
        console.log(`${original} is NOT armstrong number.\n`);
    }

}

//isArmstrong(153);
//isArmstrong(170);
//isArmstrong(0);
//isArmstrong(370);
//isArmstrong(-370);
//isArmstrong(1634);


////////////  Arrow Function: checks for valid number/imput

const isValidNum_01 = (num) => {
    if(num <= 0) {
        return false;
    }
    return true;
}

// Arrow function: counts the number of digits
const power_01 = (num) => {
    let pow = 0;
    while(num > 0) {
        num = Math.floor(num/10);
        pow++;
    }
    return pow;
}

//
const isArmstrong_01 = (num) => {

    if(!isValidNum_01(num)) {
        console.log(num, "Invaid Number/input. \n");
        return;
    }

    let temp = num;
    let original = num;

    let pow = power_01(num);

    let res = 0;
    while(num > 0) {
        let mod = num % 10;

        let mul = 1;
        let cnt = 0;
        while(cnt < pow) {
            mul = mul * mod;
            cnt++;
        }
        num = Math.floor(num/10);
    res = res + mul;
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