const cartasPokemons = document.getElementsByClassName("cartao");
const setaVoltar = document.getElementById("btn-voltar");
const setaAvancar = document.getElementById("btn-avancar");
var contador = 0;

function adicionarOpacidade(elemento) {
    elemento.classList.add("opacidade");
}

function removerOpacidade(elemento) {
    elemento.classList.remove("opacidade");
}

function esconderElemento(elemento) {
    elemento.classList.remove("selecionado");
}

function mostrarElemento(elemento) {
    elemento.classList.add("selecionado");
}

setaVoltar.addEventListener("click", () => {
    if (contador == 0) {
        return;
    }

    if (contador == 1) {
        adicionarOpacidade(setaVoltar);
    }

    if (contador !== 0) {
        removerOpacidade(setaAvancar);
        esconderElemento(cartasPokemons[contador]);
        contador--;
        mostrarElemento(cartasPokemons[contador]);
    }
})

setaAvancar.addEventListener("click", () => {
    if (contador == 2) {
        return;
    }

    if (contador == 1) {
        adicionarOpacidade(setaAvancar);
    }

    if (contador !== 2) {
        removerOpacidade(setaVoltar);
        esconderElemento(cartasPokemons[contador]);
        contador++;
        mostrarElemento(cartasPokemons[contador]);
    }
})