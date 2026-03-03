const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número: ", (input) => {
    let numero = Number(input);

    if (numero > 0) {
        console.log("Número positivo");
    } else if (numero < 0) {
        console.log("Número negativo");
    } else {
        console.log("Número igual a zero");
    }

    rl.close();
});