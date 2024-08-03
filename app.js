// import readline from 'readline';
import express from 'express';
import { gerarResposta, gerarImagem } from './controller/openAIController.js';

// app setup
const app = express();
const port = 3000;

app.listen(port, () => {console.log('App rodando na porta ' + port)});

// middleware
app.use(express.json());

// routes
app.post('/testeia/texto', gerarResposta);
app.post('/testeia/imagem', gerarImagem);

// criando uma inferface no terminal
// const leitura = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// leitura.question('Insira um título de filme: \n', gerarResposta);
// leitura.question('Descreva uma imagem: \n', gerarImagem);