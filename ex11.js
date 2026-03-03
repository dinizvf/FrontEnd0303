const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o consumo em kWh: ", (consumo) => {
    rl.question("Digite o valor do kWh: ", (valorKwh) => {
        consumo = Number(consumo);
        valorKwh = Number(valorKwh);

        let total = consumo * valorKwh;

        console.log("Total da conta: R$ " + total);
        rl.close();
    });
});