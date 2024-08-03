import openai from "../config/config.js";

// const client = openai();

const gerarResposta = async (titulo) => {

    const desc = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
                "role": "user", 
                "content": `Entregue-me uma sinopse de até 250 caracteres para um filme chamado ${titulo}`
            },
        ],
        max_tokens: 100
    });

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

}

export default gerarResposta;