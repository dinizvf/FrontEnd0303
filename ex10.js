const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Menu:\n1 - Pizza\n2 - Hambúrguer\n3 - Salada\nEscolha uma opção: ", (input) => {
    let opcao = Number(input);

    switch (opcao) {
        case 1:
            console.log("Você escolheu Pizza 🍕");
            break;
        case 2:
            console.log("Você escolheu Hambúrguer 🍔");
            break;
        case 3:
            console.log("Você escolheu Salada 🥗");
            break;
        default:
            console.log("Opção inválida.");
    }

    rl.close();
});