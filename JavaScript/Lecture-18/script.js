// zomato application

function placeOrder(callback) {
  console.log("Payment is in progress");

  setTimeout(() => {
    console.log("Payment is received and order get placed");
    callback();
  }, 3000);
}

function preparingOrder(Callback) {
  console.log("Your food preparation started");
  setTimeout(() => {
    console.log("Your order is now prepared");
    Callback();
  }, 3000);
}

function pickupOrder(callback) {
  console.log("Delivery boy going to restaurant");
  setTimeout(() => {
      console.log("I have picked ip the order");
      callback();
  }, 3000);
}

function deliverOrder() {
  console.log("I am on my way to deliver order");
  setTimeout(() => {
    console.log("Order delivered succesfully");
  }, 3000);
}

// placeOrder(preparingOrder(pickupOrder)); not to do like this will cause the program to crash

placeOrder(() => {
  preparingOrder(() => {
      pickupOrder(() => {
          deliverOrder();
    });
  });
});
