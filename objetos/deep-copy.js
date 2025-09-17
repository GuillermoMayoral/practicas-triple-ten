/*Deep copy

El deep copy se puede programar de varias maneras, pero en general la lógica funciona de la siguiente manera:

Crear un nuevo objeto vacío.
Copiar las propiedades primitivas del objeto de origen en el nuevo objeto.
Repite los pasos 1 y 2 para cada una de las propiedades no primitivas del objeto de origen.
La sintaxis necesaria para hacer esto puede resultar bastante confusa, así que no la estudiaremos aquí. En su lugar, describamos el algoritmo aproximado para este tipo de copia:

Comienza a iterar sobre todas las propiedades de un objeto con un bucle.
Si el bucle encuentra una propiedad primitiva, la copia.
Si el bucle encuentra una propiedad que contiene un objeto, repite los pasos 1 y 2 para ese objeto.
*/

const objA = {
    one: 1,
    two: 2
};

objA.three = objA;

/*La propiedad three del objeto original contiene una referencia al objeto original en sí. Esto significa que si se intenta copiar este objeto se producirá un bucle infinito. Aunque hay varias técnicas diferentes para realizar una deep copy, podría llevar bastante tiempo tratarlas todas.
*/

const obj = {
    one: 1,
    two: 2,
    three: { message: "Me encanta JS" }
};

const objСopy = Object.assign({}, obj);
objСopy.three = Object.assign({}, obj.three);

console.log(objСopy);

// { one: 1, two: 2, three: { message: "Me encanta JS" } } 

// ¿la copia está relacionada con el original?
console.log(objСopy === obj); // false

// ¿la propiedad three de la copia está relacionada con la propiedad three del original?
console.log(objСopy.three === obj.three); // false


/*El sexto álbum de David Bowie Aladdin Sane se publicó en 1973 y se calcula que vendió 4,6 millones de copias en todo el mundo. Ya hemos creado un objeto aladdinSane para representar el álbum, y para esta tarea, necesitarás hacer otro. Puedes conseguirlo haciendo una deep copy del objeto original aladdinSane. Pero ten en cuenta que una de las propiedades de aladdinSane es un objeto.

 */

const aladdinSane = {
    artist: "David Bowie",
    album: "Aladdin Sane",
    year: 1973,
    tracks: {
        "Watch That Man": "4:30",
        "Aladdin Sane": "5:06",
        "Drive-In Saturday": "4:33",
        "Panic in Detroit": "4:25",
        "Cracked Actor": "3:01",
        "Time": "5:15",
        "The Prettiest Star": "3:31",
        "Let's Spend the Night Together": "3:10",
        "The Jean Genie": "4:07",
        "Lady Grinning Soul": "3:54"
    }
};

const aladdinSaneCopy = Object.assign({}, aladdinSane);
aladdinSane.tracks = Object.assign({}, aladdinSane.tracks); // tu código


console.log(aladdinSane.tracks === aladdinSaneCopy.tracks); // false