const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Digite o raio do circulo" , (raio) => {
    let r = Number (raio);
    console.log ("O perimetro é de = " + (2 * 3,14 * raio ));

})
