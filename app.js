import readline from 'readline';
import gerarResposta from './controller/openAIController.js';

const leitura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitura.question('Insira um título de filme: \n', gerarResposta);