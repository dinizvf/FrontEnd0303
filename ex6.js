const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a primeira nota: ", (n1) => {
    rl.question("Digite a segunda nota: ", (n2) => {
        rl.question("Digite a terceira nota: ", (n3) => {
            n1 = Number(n1);
            n2 = Number(n2);
            n3 = Number(n3);

            let media = (n1 + n2 + n3) / 3;

            console.log("Média aritmética: " + media);
            rl.close();
        });
    });
});