const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o salário base: ", (salario) => {
    salario = Number(salario);

    let total = salario + (salario * 0.10);

    console.log("Salário com bônus: " + total);
    rl.close();
});