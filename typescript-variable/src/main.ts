let width: number = 10.5;
let height: number = 20;

let area = function (a: number, b: number): number {
    return a * b;
}

console.log(`Diện tích hình chữ nhật: ${area(width, height)}`);

let sum: number = 0;
let count: number = 0;
for (let i = 2; count < 30; i++) {
    let isPrime: boolean = true;
    if (i == 2) {
        sum += i;
        count++;
        continue;
    }
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (!isPrime) {
        continue;
    }
    sum += i;
    count++;
}
console.log(sum);

function isPrime(number: number): boolean {
    let isPrime = true;
    if (number < 2) {
        isPrime = false;
    } else if (number > 2) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}
let array = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
let sum1 = 0;
for (let number of array) {
    if (isPrime(number)) {
        sum1 += number;
    }
}
console.log("Tổng các số nguyên tố trong mảng trên là: " + sum);

let money = 10000;
const buyACar = (car:any) => {
    return new Promise((function (resolve,reject) {
        setTimeout(()=>{
            if (money >= 10000){
                resolve("can buy " + car);
            } else {
                reject("Do not have enough money");
            }
        },1000);
    }))
}

money = 1000001;
const promise = buyACar("BMW").then(value => {
    console.log(value);
}, error => {
    console.log(error);
});