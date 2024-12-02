const cart = ["Mobiles", "Gold", "Silver"]; // Ensure this is valid
const promise = createOrder(cart);
promise
    .then(function (orderId) {
        console.log("Order ID:", orderId); // proceedToPayment(orderId);
    })
    .catch(function (error) {
        console.error("Error occurred:", error.message); // Log the error
    });

function validateCart(cart) {
    console.log("Validating cart:", cart);
    return cart.length > 0; // Returns true if the cart is not empty
}

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        console.log("Creating order...");
        if (!validateCart(cart)) {
            const err = new Error("Cart is not Valid");
            reject(err);
            return; // Exit the function after rejecting
        }
        const orderId = "12515";
        if (orderId) {
            setTimeout(() => {
                resolve(orderId);
            }, 5000);
        }
    });
    return pr;
}
