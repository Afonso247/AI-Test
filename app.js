import readline from 'readline';
import { gerarResposta, gerarImagem } from './controller/openAIController.js';

const leitura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitura.question('Insira um título de filme: \n', gerarResposta);
// leitura.question('Descreva uma imagem: \n', gerarImagem);