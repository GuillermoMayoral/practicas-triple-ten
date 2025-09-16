/*
La funcionalidad completa de Object.assign() puede llegar a ser algo compleja. Pero en nuestro caso, sólo haremos una simple copia utilizando un objeto de origen y un objeto de destino vacío. Vamos a pasar nuestro objeto de origen al método Object.assign() como segundo argumento, y también pasaremos un objeto vacío como primer argumento:
 */

const sourceObj = {
    one: 1,
    two: 2
};

const copiedObj = Object.assign({}, sourceObj);

console.log(copiedObj === sourceObj); // false

console.log(copiedObj);


//ejercicio

//Programa la función shallowCopy(), que toma un objeto como argumento y devuelve una shallow copy de ese objeto.

function shallowCopy(obj) {
    // tu código
    return Object.assign({}, obj)
}

const myObj = {
    one: 1,
    two: 2,
    three: 3
};

const myObjCopy = shallowCopy(myObj);

console.log(myObjCopy); // false

//ejercicio 2
/*
Hemos escrito la función evolution(obj, key, value). Esta función tiene tres parámetros y permite añadir una nueva propiedad a una clave especificada dentro de un objeto especificado. Desgraciadamente, el programa tiene bugs. Este programa modifica el objeto inicial, algo que no debería hacer. Tu objetivo es arreglar la función para que cuando un fish (pez) evolucione a frog (rana), no añada 4 patas a fish.

Modifica el código para que la función cree una copia del objeto pasado y añada la nueva propiedad sólo al objeto nuevo. */

// Modifica esta función
function evolution(obj, key, value) {
    const newObj = {};
    Object.assign(newObj, obj);
    newObj[key] = value;
    return newObj
}

const fish = {
    eggs: "huevas",
    eyes: 2,
    habitat: "agua"
};

const frog = evolution(fish, "legs", 4);

console.log("rana: ", frog);

// rana: {eggs: "huevas", eyes: 2, habitat: "agua", legs: 4}

console.log("pez: ", fish);

// pez: {eggs: "huevas", eyes: 2, habitat: "agua", legs: 4}
// ¡Los peces también han evolucionado! ¿¡Qué hemos hecho?!