/* --- Botões gerais. */

/* ------ Acessibilidade. */



function acessibilidade(){

    /* Preciso tornar o ruído responsivo, pegando o valor da altura desses elementos. Se não, esse width torna o site feio. */
    /* 
    document.querySelector("#main-entrada-inicial-informações").style.width = "100%";
    document.querySelector("#main-newsletter-informações").style.width = "100%";
    document.querySelector("#main-promoção-informações").style.width = "100%";
    */

    exclusão_de_gifs()
    altura_do_ruído()
}

function exclusão_de_gifs(){
    var gif = document.querySelectorAll(".gif");
    gif.forEach(gif => {
        gif.style.display = "none";
    })
}

/* Eu retirei o @media que dava a responsividade do ruído... preciso que ela seja constante e feita por JS. */

function altura_do_ruído(){
    document.querySelector("#ruído-entrada-inicial").style.height = `${parseInt(window.getComputedStyle(document.querySelector("#main-botões-gerais")).height) + parseInt(window.getComputedStyle(document.querySelector("#main-entrada-inicial")).height)}px`;
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
