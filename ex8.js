const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o primeiro número: ", (input1) => {
    let n1 = Number(input1);

    rl.question("Digite o segundo número: ", (input2) => {
        let n2 = Number(input2);

        rl.question("Digite a operação (+, -, *, /): ", (operacao) => {

            if (operacao === "+") {
                console.log("Resultado: " + (n1 + n2));
            } else if (operacao === "-") {
                console.log("Resultado: " + (n1 - n2));
            } else if (operacao === "*") {
                console.log("Resultado: " + (n1 * n2));
            } else if (operacao === "/") {
                console.log("Resultado: " + (n1 / n2));
            } else {
                console.log("Operação inválida.");
            }

            rl.close();
        });
    });
});