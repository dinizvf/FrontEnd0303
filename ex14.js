const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o valor em dolar: ", (dolares) => {
    dolares = Number(dolares);

    let cotacao = 5.00;
    let reais = dolares * cotacao;

    console.log("Valor em reais: $ " + reais.toFixed(2));
    rl.close();
});