const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o valor do produto: ", (valor) => {
    rl.question("Digite o percentual de desconto: ", (desconto) => {
        valor = Number(valor);
        desconto = Number(desconto);

        let valorFinal = valor - (valor * desconto / 100);

        console.log("Valor final: R$ " + valorFinal);
        rl.close();
    });
});