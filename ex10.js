const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o comprimento: ", (comprimento) => {
    rl.question("Digite a largura: ", (largura) => {
        rl.question("Digite a altura: ", (altura) => {
            comprimento = Number(comprimento);
            largura = Number(largura);
            altura = Number(altura);

            let volume = comprimento * largura * altura;

            console.log("Volume da caixa: " + volume);
            rl.close();
        });
    });
});