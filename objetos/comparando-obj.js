/*
Escribe una función llamada compare() que comparará dos objetos por referencia. Si pasas dos referencias al mismo objeto de la función, ésta debería devolver true. En caso contrario, debería devolver false.
 */

function compare(firstObj, secondObj) {
    // escribe tu código aquí
    if (firstObj === secondObj) {
        return true;
    } else {
        return false;
    }
}

const first1 = {
    property: "valor"
};

const second1 = {
    property: "valor"
};

const third1 = second1;

compare(first1, second1); // false
compare(second1, third1); // true

console.log(compare(second1, third1))


//ejercicio 2
/*
Escribe una función llamada isEqual() que comparará dos objetos por sus propiedades. Si los pares clave-valor de ambos objetos coinciden, la función debe devolver true. En caso contrario, debería devolver false.

Puedes obtener un array de claves para cada objeto llamando al método Object.keys(), luego compararás los dos arrays utilizando el método every() y el operador ===.

 */

function isEqual(firstObj, secondObj) {
    // escribe tu código aquí

    const key1 = Object.keys(firstObj);
    const key2 = Object.keys(secondObj);

    if (key1.length !== key2.length) {
        return false;
    } else {
        return key1.every(key => firstObj[key] === secondObj[key])
    }
}

const first = {
    property: "valor",
    anotherProperty: "otro valor"
};

const second = {
    property: "valor",
    anotherProperty: "otro valor"
};

const third = {
    property: "valor",
    anotherProperty: "otro valor más"
};

isEqual(first, second); // true
isEqual(second, third); // false