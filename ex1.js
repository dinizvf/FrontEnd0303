const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o saldo da conta: ", (saldo) => {
    saldo = Number(saldo);

    if (saldo >= 0) {
        console.log("Saldo positivo.");
    } else {
        console.log("Saldo negativo.");
    }

    rl.close();
});