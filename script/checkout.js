import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js';
//import '../data/backend.js';

async function loadPage() {  // async is basically a shortcut for promise, behind the scenes it returns a promise 
    
    //return 'value2' // this is equivalent to the resolve() value
    await loadProductsFetch();  // we dont have to write a .then(() => {}) function if we are using await, its a basically shortcut for .then()
                                // we can only use await only inside the async
    await new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
        });
    renderOrderSummary();
    renderPaymentSummary();
}

loadPage();


/*
Promise.all([       // this creates an array of promises and wait for all the promises to finish at the same time 
                    // this is more efficient, since we dont have to wait for all the promises to finish one by one

    new Promise((resolve) => {
    
        loadProducts(() => {
            resolve('value1'); // we can pass a value to resolve 
        });
    loadProductsFetch(),
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
*/


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