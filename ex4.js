const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Digite seu peso: " , (peso) => {
    rl.question("Digite sua altura em metros" , (metros) => {
        let n1 = Number (peso);
        let n2 = Number (metros);

        console.log ("\nResultado do IMC:");
        console.log (((n1 / n2) * n2));  
    }
    )})