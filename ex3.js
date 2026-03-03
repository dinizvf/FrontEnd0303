const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Digite o valor em Celsius:" , (celsius) => {
    let c = Number (celsius);
    console.log ("Fahrenheit = " + (celsius * 9/5 + 32));

})
