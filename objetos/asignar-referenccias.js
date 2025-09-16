const firstPirate = {
    name: "Jack",
    nickName: "Sparrow",
};

const secondPirate = firstPirate;
secondPirate.rank = "Capitán";

console.log(firstPirate);


console.log(secondPirate);

/*Hemos añadido la propiedad rank al objeto secondPirate, pero el objeto firstPirate también la ha recibido. Esto se debe a que los objetos y los primitivos se almacenan de forma diferente dentro de las variables.

Este proceso funciona de forma distinta con los objetos. Decimos que los objetos se pasan por referencia. Cuando se crea un objeto ocurren dos cosas:

El objeto en sí se crea y se almacena en la memoria.
Se añade un enlace a esta ubicación en la memoria a una variable.
De nuevo, si defines un nuevo objeto, hay dos procesos que se están llevando a cabo sin que tú lo veas. Estás creando el objeto en sí, con las claves y valores asociados; y a la vez, estás creando una referencia a este objeto en la memoria. Por esta razón, asignar un objeto existente a una variable no creará una nueva. No estás copiando el objeto en sí, estás copiando la referencia al objeto.
*/

/*
La siguiente pregunta es un poco más complicada. En el siguiente ejemplo, ¿cambiará firstObj como resultado de nuestros cambios en secondObj? Piénsalo bien antes de responder:
 */

const firstObj1 = {
    one: 1,
    two: 2
};

let secondObj1 = firstObj1;
secondObj1 = { one: 1, two: 2, three: 3 };

console.log(firstObj1);
console.log(secondObj1);


/*La respuesta correcta es "no". Esto se debe a que en realidad no cambiamos el objeto al que hicimos referencia originalmente para secondObj. En su lugar, hemos añadido una referencia para un objeto completamente nuevo a secondObj.
 */

//ejercicio

/*Declara una función llamada copy() que tomará un objeto, lo copiará y devolverá uno nuevo. Este nuevo objeto debe tener el mismo conjunto de métodos y propiedades, pero también debe ser independiente.  En otras palabras, cuando se cambie el objeto inicial, el nuevo objeto deberá seguir intacto.

Una pequeña pista: aquí tendrás que crear un objeto independiente. El método Object.keys() devuelve un array que contiene todas las claves de un objeto. Puedes utilizar esto para ayudarte a construir tu nuevo objeto. */

function copy(obj) {
    // escribe tu código aquí
    const res = {};


    Object.keys(obj).forEach(key => {
        res[key] = obj[key];
    })
    return res;
}

const firstObj = {
    one: 1,
    two: 2,
    three: 3
};

const secondObj = firstObj;
const thirdObj = copy(firstObj);

console.log(firstObj); // { one: 1, three: 3, two: 2 }
console.log(secondObj); // { one: 1, three: 3, two: 2 }
console.log(thirdObj); // { one: 1, three: 3, two: 2 }

firstObj.four = 4;

console.log(firstObj); // { four: 4, one: 1, three: 3, two: 2 }
console.log(secondObj); // { four: 4, one: 1, three: 3, two: 2 }

// thirdObj no ha cambiado
console.log(thirdObj); // { one: 1, three: 3, two: 2 }