const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Qual seu nome de usuario?', (resposta) => {
    console.log(`Seja bem-vindo, ${resposta}!`);
    r1.close();
});