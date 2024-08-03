// forms
const textForm = document.querySelector('.text-form');
// const imageForm = document.querySelector('.image-form');

// elementos de saída
const description = document.querySelector('.description p');
// const image = document.querySelector('.imagem img');

// descricao e tags
textForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(description.textContent);

    const res = await fetch('/testeia/texto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify({
        //     titulo: textForm.titulo.value
        // })
    });

    const data = await res.json();
    console.log(data.descricao);

    description.textContent = data.descricao;
})

// imagem
// imageForm.addEventListener('submit', async (e) => {
//     e.preventDefault();

//     const res = await fetch('/testeia/imagem', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             prompt: imageForm.prompt.value
//         })
//     });

//     const data = await res.json();
//     console.log(data);

//     image.setAttribute('src', data.url);
// })