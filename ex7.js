const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o primeiro número: ", (input1) => {
    let n1 = Number(input1);

    rl.question("Digite o segundo número: ", (input2) => {
        let n2 = Number(input2);

        if (n1 > n2) {
            console.log("O maior número é: " + n1);
        } else if (n2 > n1) {
            console.log("O maior número é: " + n2);
        } else {
            console.log("Os dois números são iguais.");
        }

        rl.close();
    });
});