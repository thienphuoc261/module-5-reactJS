let a: number = 7;
let b: number = 6;

let sum = function (a: number, b: number): number {
    return a + b;
}
console.log(sum(a, b));

function show(name?: string): string {
    let message = "Hello";
    if (name) {
        message = message + " " + name;
    }

    return message;
}

console.log(show("Thiên Phước"));
console.log(show());

let sum1 = (a: number, b: number): number => a + b;

console.log(sum1(a, b));


// let success: string = "success";
// let fail: string = "failed";
// let number: number = 7;
// var promise = new Promise(function (resolve, reject){
//     if (resolve){
//         console.log(success);
//     } else if (reject){
//         console.log(fail);
//     }
// });

var promise = new Promise(function (resolve, reject) {
    resolve("success");
    // reject("failed");
});

promise.then(
    function (success) {
        console.log("success");
    },
    function (error) {
        console.log("failed")
    }
)
    .catch(function (message) {
        console.log(message)
    });

function handleTimeout(timeout: number) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, timeout);
    });
}

var xxx = handleTimeout(5000);
xxx.then(function () {
    console.log("LẬP");
})
    .then(function () {
        return handleTimeout(3000);
    })
    .then(function () {
        console.log("TRÌNH");
    })
    .then(function () {
        return handleTimeout(1000);
    })
    .then(function () {
        console.log("CODEGYM");
    });