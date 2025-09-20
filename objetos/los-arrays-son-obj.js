/*Vamos a crear la función double(). Esta función tomará como argumento un número o un array que los contenga.

Si el usuario introduce un número, la función debe duplicarlo. Es decir, la función debe devolver el número introducido multiplicado por 2.

Si en vez de un número, el usuario introduce un array de números, la función debe devolver un array en el que se duplica el valor de cada elemento del array original.

Por cierto, recuerda que puedes utilizar la función map() para realizar una operación sobre cada uno de los elementos de un array. */

function double(value) {
    // escribe tu código aquí
    if (Array.isArray(value)) {
        return value.map(num => num * 2);
    } else {
        return value * 2;
    }
}

double(2); // 4
double([1, 2, 3]); // [2, 4, 6]

console.log(double(2))
console.log(double([1, 2, 3]))

/*
Crea una función llamada counter() que calculará y luego devolverá el número de veces que ha sido llamada.

Saber que las funciones son objetos te será de gran ayuda en este ejercicio. Asigna el número de veces que la función ha sido llamada a una propiedad de dicha función. */

function counter() {
    // escribe tu código aquí
    if (!counter.times) {
        counter.times = 0;
    }

    counter.times += 1;

    return counter.times;
}

counter(); // 1
counter(); // 2
counter(); // 3
counter(); // 4
counter(); // 5