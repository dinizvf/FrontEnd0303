const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Digite o primeiro valor:" , (valor1) => {
    rl.question("Digite o segundo valor:" , (valor2) => {
        let n1 = Number (valor1);
        let n2 = Number (valor2);

        console.log ("\nResultado das quatro operaçoes:");
        console.log ("Soma: " + (n1 + n2));
        console.log ("Subtração: " + (n1 - n2));
        console.log ("Multiplicação: " + (n1 * n2));
        console.log ("Divisão: " + (n1 / n2))
        
    }
    )})