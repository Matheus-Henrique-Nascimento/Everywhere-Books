/* --- Botões gerais. */

/* ------ Acessibilidade. */

function acessibilidade(){
    document.querySelector("#main-entrada-inicial-informações").style.width = "100%";
    document.querySelector("#main-newsletter-informações").style.width = "100%";
    document.querySelector("#main-promoção-informações").style.width = "100%";
    

    exclusão_de_gifs()
}

/* ------ Exclusão de GIFs. */

function exclusão_de_gifs(){
    var gif = document.querySelectorAll(".gif");
    gif.forEach(gif => {
        gif.style.display = "none";
    })
}

/* ------ Altura responsiva dos efeitos. */

window.addEventListener('load', (event) => {
    setInterval(ruído_e_papel, 10);
});

function ruído_e_papel(){
    ruído_entrada_inicial();
    ruído_newsletter();
    ruído_promoção();
    pepel();
}

function ruído_entrada_inicial(){
    return document.querySelector("#ruído-entrada-inicial").style.height = `${parseInt(window.getComputedStyle(document.querySelector("#main-botões-gerais")).height) + parseInt(window.getComputedStyle(document.querySelector("#main-entrada-inicial")).height)}px`;
}

function ruído_newsletter(){
    return document.querySelector("#ruído-newsletter").style.height = `${parseInt(window.getComputedStyle(document.querySelector("#main-newsletter")).height)}px`;
}

function ruído_promoção(){
    return document.querySelector("#ruído-promoção").style.height = `${parseInt(window.getComputedStyle(document.querySelector("#main-promoção")).height)}px`;
}

function pepel(){
    return document.querySelector("#papel").style.height = `${parseInt(window.getComputedStyle(document.querySelector("footer")).height)}px`;
}

/* ------ Tradução. */

function tradutor(){
    window.alert("Tradução.");
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
