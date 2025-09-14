/*Ya has programado una función para añadir propiedades a un objeto. Ahora vamos a crear una función que elimine esas propiedades. Crea una función llamada deleteWelcomeMessages(). Esta función debe tener un parámetro: propsArr (abreviatura de "properties array"), que es el array de claves que hay que eliminar del objeto.

Recuerda que el método forEach() se utiliza para ejecutar una función en cada elemento de un array.
*/

const welcomeMessages = {
    english: "Welcome",
    french: "Bienvenue",
    italian: "Benvenuto",
    spanish: "Bienvenido",
    russian: "Добро пожаловать",
    chinese: "歡迎",
    finnish: "Tervetuloa",
    portuguese: "Bem-vindo"
};

//propsArr => conjunto de arrays

function deleteWelcomeMessages(propsArr) {
    // escribe tu código aquí
    propsArr.forEach((item => delete welcomeMessages[item]))
}

deleteWelcomeMessages(["italian", "french"]);

console.log(welcomeMessages);
