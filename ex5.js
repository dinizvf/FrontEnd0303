const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a idade ", (idade) => {
    idade = idade.toLowerCase();

    if (idade >= 18 ) {
        console.log("É maior de idade");
    } else {
        console.log("Não é maior de idade");
    }

    rl.close();
});