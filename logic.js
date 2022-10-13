/* ------ Botões gerais. */

function acessibilidade(){
    window.alert("Acessibilidade.");
}

function tradutor(){
    window.alert("Tradução.");
}

function modo_noturno(){
    var raiz = document.querySelector(":root");
    raiz.style.setProperty("--cor-primária", "#D7CCC8");
    raiz.style.setProperty("--cor-secundária", "#A69B97");
    raiz.style.setProperty("--cor-terceária", "#FFFFFB");
    raiz.style.setProperty("--cor-quaternária", "#171717");
    raiz.style.setProperty("--cor-quaternária-opaca", "#17171780");
}

function modo_diurno(){
    var raiz = document.querySelector(":root");
    raiz.style.setProperty("--cor-primária", "#D7CCC8");
    raiz.style.setProperty("--cor-secundária", "#A69B97");
    raiz.style.setProperty("--cor-terceária", "#FFFFFB");
    raiz.style.setProperty("--cor-quaternária", "#171717");
    raiz.style.setProperty("--cor-quaternária-opaca", "#17171780");
}
