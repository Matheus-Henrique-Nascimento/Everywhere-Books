/* ------ Botões gerais. */

function acessibilidade(){
    window.alert("Acessibilidade.");
}

function tradutor(){
    window.alert("Tradução.");
}

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
