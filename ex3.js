const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número de 1 a 7: ", (dia) => {
    dia = Number(dia);

    if (dia == 1) {
        console.log("Domingo");
    } else if (dia == 2) {
        console.log("Segunda-feira");
    } else if (dia == 3) {
        console.log("Terça-feira");
    } else if (dia == 4) {
        console.log("Quarta-feira");
    } else if (dia == 5) {
        console.log("Quinta-feira");
    } else if (dia == 6) {
        console.log("Sexta-feira");
    } else if (dia == 7) {
        console.log("Sábado");
    } else {
        console.log("Número inválido.");
    }

    rl.close();
});