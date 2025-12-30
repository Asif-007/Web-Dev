// let a = 10;
// console.log(a);
// let b = 345.6821;
// b.toFixed(2)
// console.log(b);

// console.log(b.toPrecision(6));

// let a = new Number(20);
// let b = 20;
// console.log(typeof a);

// let a = new Number(20);
// let b = new Number(20);
// let b = a;
// console.log(a == b);

//  Non primitive : reference based comparision
// Primitive: value based comparision

// console.log(Math.abs(-4));
// console.log(Math.pow(2, 3));

// console.log(Math.random());
// [0:1)

// let a = Math.floor(Math.random() * 10);

// console.log(a);


// console.log(Math.floor(Math.random()*6)+1);

// console.log(Math.floor(Math.random() * 11)+15)


// Math.floor(Math.random*(max-min+1))+min



// console.log(Math.floor(Math.random() * (9999-1000)) + 1000);


function generateOTP(length) {
  const digits = '0123456789';
  let otp = '';

  const randomValues = new Uint32Array(length);
  crypto.getRandomValues(randomValues);

  for (let i = 0; i < length; i++) {
    otp += digits[randomValues[i] % digits.length];
  }

  return otp;
}

console.log(generateOTP(4)); 

