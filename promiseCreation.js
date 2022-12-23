// Date on which I'm learning this: 23rd December 2022
// We will see how we can create our own promises.

const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart);   // It will return an orderId
console.log(promise);

promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    // Attaching a failure callback function using a catch to our promise object.
    console.log(err.message);
  })

// Let's produce promise

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // createOrder
    // validateCart
    // orderId
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    // logic for createOrder
    const orderId = "12345"  // Suppose we get orderId after making calls to our database and cart and all sorts of calls
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Successful");
  });
}

function validateCart(cart) {
  return true;
}

// <------- For handing error to particular promise and let other callback work smoothly:  ------> 

// promise
//   .then(function (orderId) {
//     console.log(orderId);
//     return orderId;
//   })
//   .catch(function (err) {  //!Attaching to just handle error in first callback
//     console.log(err.message);
//   })
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     console.log(paymentInfo);
//   })