console.log('I am second');

function sum(a,b) {
    console.log(a + b);
}

function subtract(a, b) {
    console.log(a-b)
}

sum(3, 4);

module.exports = {sum,subtract};