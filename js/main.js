const addFilme = document.querySelector('.add-filme');
const secaoFilmes = document.querySelector('#listaFilmes');
const botaoRemover = document.querySelector('.botao-remove');
const listaDeFilmes = [];
const listaDeNomes = [];

const adicionaFilme = (event) => {

    event.preventDefault();
    const posterFilme = document.querySelector('#filme').value;
    const nomeDoFilme = document.querySelector("#nomeDoFilme").value;

    if (posterFilme.endsWith('.jpg') || posterFilme.endsWith('.png') || posterFilme.endsWith('.jpeg')) {
        listaDeFilmes.push(posterFilme);
        listaDeNomes.push(nomeDoFilme);
        exibeFilmes(listaDeFilmes, listaDeNomes);

    } else {
        console.error('url do filme inválido.');
    }

    document.querySelector('#filme').value = "";
    document.querySelector('#nomeDoFilme').value = "";
}

const removeFilme = (nomeDoFilme) => {
    
    let indiceDoFilme = listaDeNomes.indexOf(nomeDoFilme);

    listaDeNomes.splice(indiceDoFilme, 1);
    listaDeFilmes.splice(indiceDoFilme, 1);
    exibeFilmes(listaDeFilmes, listaDeNomes);

}

const montaElemento = (posterFilme, nomeDoFilme) => {
    const containerFilme = document.createElement("div");
    containerFilme.classList.add("container-filme");

    const imgFilme = document.createElement("img");
    imgFilme.src = posterFilme;
    imgFilme.alt = nomeDoFilme;
    imgFilme.classList.add("img-filme");

    const titulo = document.createElement("h2");
    titulo.classList.add("titulo-filme")
    titulo.innerHTML = nomeDoFilme;

    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("botao-remove");
    botaoRemover.type = "submit";
    botaoRemover.innerText = "Remover Filme";
    botaoRemover.addEventListener("click", (event) => {
        event.preventDefault();
        removeFilme(nomeDoFilme);
    });

    containerFilme.insertAdjacentElement("beforeend", imgFilme);
    containerFilme.insertAdjacentElement("beforeend", titulo);
    containerFilme.insertAdjacentElement("beforeend", botaoRemover);


    console.log(containerFilme);

    return containerFilme;
}

const exibeFilmes = (listaDeFilmes, listaDeNomes) => {
    secaoFilmes.innerHTML = "";
    
    for (let i = 0; i < listaDeFilmes.length; i++) {
        const containerFilme = montaElemento(listaDeFilmes[i], listaDeNomes[i]);
        secaoFilmes.insertAdjacentElement("beforeend", containerFilme);
    }
    console.log(listaDeNomes);
}

addFilme.addEventListener('click', adicionaFilme);

