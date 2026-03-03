const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o valor em reais: ", (reais) => {
    reais = Number(reais);

    let cotacao = 5.00;
    let dolares = reais / cotacao;

    console.log("Valor em dólares: $ " + dolares.toFixed(2));
    rl.close();
});