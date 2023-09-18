var a = 7;
var b = 6;
var sum = function (a, b) {
    return a + b;
};
console.log(sum(a, b));
function show(name) {
    var message = "Hello";
    if (name) {
        message = message + " " + name;
    }
    return message;
}
console.log(show("Thiên Phước"));
console.log(show());
var sum1 = function (a, b) { return a + b; };
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
promise.then(function (success) {
    console.log("success");
}, function (error) {
    console.log("failed");
})
    .catch(function (message) {
    console.log(message);
});
function handleTimeout(timeout) {
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
