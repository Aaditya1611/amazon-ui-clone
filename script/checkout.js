import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js';
//import '../data/backend.js';

Promise.all([       // this creates an array of promises and wait for all the promises to finish at the same time 
                    // this is more efficient, since we dont have to wait for all the promises to finish one by one

    new Promise((resolve) => {
    
        loadProducts(() => {
            resolve('value1'); // we can pass a value to resolve 
        });
    }),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })

]).then((values) => {
    console.log(values) // this will give an array of values from all the resolve functions
    renderOrderSummary();
    renderPaymentSummary();
})

/*
new Promise((resolve) => {
    
    loadProducts(() => {
        resolve('value1'); // we can pass a value to resolve 
    });
}).then((value) => {
    console.log(value) // we can use a resolve value into further code 
    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })
}).then(() => {

    renderOrderSummary();
    renderPaymentSummary();
})
*/


/*
loadProducts(() => {  //use promise instead of callback
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
    })
});
*/