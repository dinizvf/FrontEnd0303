const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o dia da semana: ", (dia) => {
    dia = dia.toLowerCase();

    if (dia === "sábado" || dia === "domingo") {
        console.log("É fim de semana");
    } else {
        console.log("Não é fim de semana");
    }

    rl.close();
});