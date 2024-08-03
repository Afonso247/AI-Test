import openai from "../config/config.js";

const gerarResposta = async (titulo) => {

    try {
        const desc = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    "role": "user", 
                    "content": `Entregue-me uma sinopse de até 500 caracteres para um filme chamado ${titulo}`
                },
            ],
            max_tokens: 500
        });

        if (desc.choices[0].message.type === 'insufficient_quota') {
            throw new Error('Insufficient quota. Please try again later.');
        }

        console.log(desc.choices[0].message.content);

        const tags = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    "role": "user", 
                    "content": `Entregue-me 10 palavras-chave para um filme chamado ${titulo}`
                },
            ],
            max_tokens: 100
        });

        console.log(tags.choices[0].message.content);
    } catch (error) {
        if (error.response && error.response.status === 429) {
            throw new Error('Requisições excedidas. Por favor, tente novamente mais tarde.');
        }
        console.error(error.message);
    }

}

const gerarImagem = async (desc) => {

    try {

        const image = await openai.images.generate({
            model: "dall-e-3",
            prompt: desc,
            n: 1,
            size: "1024x1024",
            quality: "standard"
        });

        console.log(image.data[0].url);
    } catch (err) {
        console.error(err);
    }

}

export { gerarResposta, gerarImagem };