/* --- Botões gerais. */

/* ------ Altura responsiva dos efeitos. */

window.addEventListener('load', () => {
    setInterval(() => {
        document.querySelector("#ruído-entrada-inicial").style.height = `${parseInt(window.getComputedStyle(document.querySelector("#main-botões-gerais")).height) + parseInt(window.getComputedStyle(document.querySelector("#main-entrada-inicial")).height)}px`;
        document.querySelector("#ruído-newsletter").style.height = `${parseInt(window.getComputedStyle(document.querySelector("#main-newsletter")).height)}px`;
        document.querySelector("#ruído-promoção").style.height = `${parseInt(window.getComputedStyle(document.querySelector("#main-promoção")).height)}px`;
        document.querySelector("#papel").style.height = `${parseInt(window.getComputedStyle(document.querySelector("footer")).height)}px`;
    }, 10);
});

/* ------ Tradução. */

function tradutor(){
    window.alert("Aqui haverá a tradução do site.");
}

/* ------ Interruptor de cores. */

function modo_noturno(){
    document.querySelector(":root").style.setProperty("--cor-primária", "#171717");
    document.querySelector(":root").style.setProperty("--cor-terceária", "#333333");
    document.querySelector(":root").style.setProperty("--cor-quaternária", "#A3A3A3");
    document.querySelector(":root").style.setProperty("--cor-quaternária-opaca", "#A3A3A380");

    document.querySelector("#main-botões-interruptor").querySelectorAll(".material-icons-outlined")[0].style.backgroundColor = "var(--cor-primária)";
    document.querySelector("#main-botões-interruptor").querySelectorAll(".material-icons-outlined")[1].style.backgroundColor = "var(--cor-terceária)";
}

function modo_diurno(){
    document.querySelector(":root").style.setProperty("--cor-primária", "#D7CCC8");
    document.querySelector(":root").style.setProperty("--cor-terceária", "#FFFFFB");
    document.querySelector(":root").style.setProperty("--cor-quaternária", "#171717");
    document.querySelector(":root").style.setProperty("--cor-quaternária-opaca", "#17171780");

    document.querySelector("#main-botões-interruptor").querySelectorAll(".material-icons-outlined")[1].style.backgroundColor = "var(--cor-primária)";
    document.querySelector("#main-botões-interruptor").querySelectorAll(".material-icons-outlined")[0].style.backgroundColor = "var(--cor-terceária)";
}

window.addEventListener('load', (event) => {
    máquina_de_escrever();
});

function máquina_de_escrever(){
    const texto_entrada_inicial = document.querySelector("#main-entrada-inicial-informações").querySelector("h2").querySelector("i").textContent.split("");
    const texto_newsletter = document.querySelector("#main-newsletter").querySelector("h2").querySelector("i").textContent.split("");
    const texto_livros = document.querySelector("#main-carrossel-de-livros").querySelector("h2").querySelector("i").textContent.split("");
    const texto_promoção = document.querySelector("#main-promoção").querySelector("h2").querySelector("i").textContent.split("");
    const texto_artigos = document.querySelector("#main-carrossel-de-artigos").querySelector("h2").querySelector("i").textContent.split("");

    document.querySelector("#main-entrada-inicial-informações").querySelector("h2").querySelector("i").innerHTML = "";
    document.querySelector("#main-newsletter").querySelector("h2").querySelector("i").innerHTML = "";
    document.querySelector("#main-carrossel-de-livros").querySelector("h2").querySelector("i").innerHTML = "";
    document.querySelector("#main-promoção").querySelector("h2").querySelector("i").innerHTML = "";
    document.querySelector("#main-carrossel-de-artigos").querySelector("h2").querySelector("i").innerHTML = "";

    texto_entrada_inicial.forEach((letra, i) => {
        setTimeout(() => document.querySelector("#main-entrada-inicial-informações").querySelector("h2").querySelector("i").innerHTML += letra, 500 * i);
    });

    texto_newsletter.forEach((letra, i) => {
        setTimeout(() => document.querySelector("#main-newsletter").querySelector("h2").querySelector("i").innerHTML += letra, 500 * i);
    });

    texto_livros.forEach((letra, i) => {
        setTimeout(() => document.querySelector("#main-carrossel-de-livros").querySelector("h2").querySelector("i").innerHTML += letra, 500 * i);
    });

    texto_promoção.forEach((letra, i) => {
        setTimeout(() => document.querySelector("#main-promoção").querySelector("h2").querySelector("i").innerHTML += letra, 500 * i);
    });

    texto_artigos.forEach((letra, i) => {
        setTimeout(() => document.querySelector("#main-carrossel-de-artigos").querySelector("h2").querySelector("i").innerHTML += letra, 500 * i);
    });
}