// import readline from 'readline';
import express from 'express';
import { gerarResposta, gerarImagem } from './controller/openAIController.js';

// app setup
const app = express();
const port = 3000;

app.listen(port, () => {console.log('App rodando na porta ' + port)});

// middleware
app.use(express.json());
app.use(express.static('public'));

// routes
app.post('/testeia/texto', gerarResposta);
app.post('/testeia/imagem', gerarImagem);