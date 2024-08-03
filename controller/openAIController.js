import openai from "../config/config.js";

// gera uma resposta do gpt-4 em forma de "chat completion"
const gerarResposta = async (req, res) => {

    try {
        // const { titulo } = req.body;

        const desc = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    "role": "user", 
                    "content": `Gere para mim um nickname criativo para um jogo online. (Insira somente o nickname)`
                },
            ],
            max_tokens: 100
        });

        res.status(200).json({
            descricao: desc.choices[0].message.content
        });

    } catch (error) {
        if (error.response && error.response.status === 429) {
            throw new Error('Requisições excedidas. Por favor, tente novamente mais tarde.');
        }
        console.error(error.message);
    }

}

// gera uma resposta do dall-e-3 em forma de geração de imagem
const gerarImagem = async (req, res) => {

    try {

        const image = await openai.images.generate({
            model: "dall-e-3",
            prompt: req.body.prompt,
            n: 1,
            size: "1024x1024",
            quality: "standard"
        });

        res.status(200).json({
            url: image.data[0].url
        });

    } catch (err) {
        console.error(err);
    }

}

export { gerarResposta, gerarImagem };