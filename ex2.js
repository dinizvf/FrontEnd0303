const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a temperatura em °C: ", (temperatura) => {
    temperatura = Number(temperatura);

    if (temperatura <= 15) {
        console.log(`Temperatura: ${temperatura}°C - Frio`);
    } else if (temperatura > 30) {
        console.log(`Temperatura: ${temperatura}°C - Quente`);
    } else {
        console.log(`Temperatura: ${temperatura}°C - Agradável`);
    }

    rl.close();
});