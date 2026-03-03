const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Digite a base:" , (base) => {
    rl.question("Digite a altura:" , (altura) => {
        let b = Number (base);
        let at = Number (altura);

        console.log ("\nArea do Retangulo: ");
        console.log ((b * at));   
    }
    )})