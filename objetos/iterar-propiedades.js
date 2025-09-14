/* En este ejercicio, tienes que trabajar con el objeto heights , que contiene los 10 edificios más altos del mundo. Las claves de este objeto son los nombres de los edificios, mientras que los valores son las alturas respectivas de esos edificios en metros. Hagamos algunos cálculos para ver si la altura total combinada de todos los edificios es capaz de alcanzar la estratosfera de la Tierra.*/

const heights = {
    burjKhalifa: 828,
    tokyoSkyTree: 634,
    shanghaiTower: 632,
    abrajAlBait: 601,
    cantonTower: 600,
    pingAnFinanceCentre: 600,
    lotteWorldTower: 555,
    cnTower: 553,
    oneWorldTradeCenter: 541,
    ostankinoTower: 540
};

const stratosphere = 11000;

const sumHeights = Object.values(heights).reduce(function (result, current) {
    return result + current;
}, 0)// escribe tu código aquí

console.log(sumHeights)

console.log(sumHeights >= stratosphere);


/*Aquí tenemos un objeto llamado tion. Dentro de ella, cada clave (en inglés) debe terminar con el sufijo "tion". Llama al método endsWith() y utiliza el operador delete para eliminar del objeto cualquier clave que no terminen en "tion".
*/

const tion = {
    fruition: "la realización o cumplimiento de un plan o proyecto",
    depreciation: "el proceso de pérdida de valor",
    microseismicity: "un débil temblor de tierra causado por fenómenos naturales",
    alienation: "la transmisión de la propiedad",
    bifurcation: "el punto o la zona en la que algo se divide en dos ramas o partes",
    locomotion: "la capacidad de moverse",
    fusion: "proceso de unificar o juntar dos objetos",
};

Object.keys(tion).forEach(key => {
    if (!key.endsWith("tion")) {
        delete tion[key]
    }
});

console.log(tion);

/*
En este ejercicio, escribirás una función llamada swap(), que intercambiará las claves de un objeto con sus valores. La función debe tomar un argumento: el objeto cuyas propiedades deben intercambiarse.

Para simplificar, supongamos que los valores del objeto son siempre primitivos distintos.


*/


function swap(obj) {
    const res = {};
    // intercambia claves con valores y agregalos al objeto res
    for (const key in obj) {

        res[obj[key]] = key;
    }

    return res;
}

const myObj = {
    first: 1,
    second: 2,
    third: 3
};

console.log(myObj); //{first: 1, second: 2, third: 3}
console.log(swap(myObj)); //{1: "first", 2: "second", 3: "third"}