const products = {
    manzana: { type: "fruta", price: 10 },
    banana: { type: "fruta", price: 35 },
    papa: { type: "vegetal", price: 5 },
};

//for... in

for (const key in products) {
    console.log(key);
}


/*
no podemos acceder con products.key, debemoa acceder con []

for (const key in products) {
    console.log(products.key); undefined undefined undefined
}
*/

for (const key in products) {
    console.log(products[key]);
}

for (const key in products) {
    //si el valor de productos es igual a "fruta"
    if (products[key].type === "fruta") {
        //aumentamos su precio un 50%
        products[key].price *= 1.5;
    }
    console.log(products[key]);
}


//Object.keys()

console.log(Object.keys(products));


Object.keys(products).forEach(key => {
    //si el valor de productos es igual a "vegetal"
    if (products[key].type === "vegetal") {

        //aumentamos su precio un 100%
        products[key].price *= 2;
    }
})

console.log(products);


//Object.values()
console.log(Object.values(products))

Object.values(products).forEach(product => {
    //si el valor de productos es igual a "fruta"
    if (product.type === "fruta") {

        //disminuira su precio un 20%
        product.price *= .8;
    }

    console.log(products);
})

//Object.entries() devuelve un string con la pocicion 0 con la propiedad del objeto, y en la posicion 1 la primer porpiedad del objeto

console.log(Object.entries(products));

Object.entries(products).forEach(product => {
    //si el valor de productos es igual a "vegetal"
    if (product[1].type === "vegetal") {
        //aumentamos su precio un 10%
        product[1].price *= 1.1;
    }
})

console.log(products);

