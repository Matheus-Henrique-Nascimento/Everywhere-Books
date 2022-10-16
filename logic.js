/* --- Botões gerais. */

/* ------ Acessibilidade. */

function acessibilidade(){
    if(window.getComputedStyle(document.querySelector("header")).getPropertyValue("height") === "96px"){

        /* ------ Largura das telas. */

        document.querySelector("#main-entrada-inicial-informações").style.width = "100%";
        document.querySelector("#main-newsletter-informações").style.width = "100%";
        document.querySelector("#main-promoção-informações").style.width = "100%";

        /* ------ Centralização das telas. */

        document.querySelector("#main-entrada-inicial").style.textAlign = "center";
        document.querySelector("#main-entrada-inicial-informações").style.justifyItems = "center";

        document.querySelector("#main-newsletter").style.textAlign = "center";
        document.querySelector("#main-newsletter-informações").style.justifyItems = "center";

        document.querySelector("#main-promoção").style.textAlign = "center";
        document.querySelector("#main-promoção-informações").style.justifyItems = "center";

        /* ------ Aumento des valores tipográficos e estilísticos. */

        document.querySelector("header").style.height = "124px";
        document.querySelector(":root").style.setProperty("--tipografia-logo-tamanho", "32px");
        document.querySelector(":root").style.setProperty("--tipografia-endereços-tamanho", "16px");
        document.querySelector(":root").style.setProperty("--tipografia-botão-cabeçalho-tamanho", "24px");
        document.querySelector("#header-endereços-pesquisa-perfil").querySelector("button").querySelector("a").innerHTML = "Conta";
        document.querySelector(":root").style.setProperty("--tipografia-título-tamanho", "64px");
        document.querySelector(":root").style.setProperty("--tipografia-parágrafo-tamanho", "48px");
        document.querySelector(":root").style.setProperty("--tipografia-descrição-título-tamanho", "32px");
        document.querySelector(":root").style.setProperty("--tipografia-descrição-parágrafo-tamanho", "24px");
        document.querySelector(":root").style.setProperty("--tipografia-botão-corpo-tamanho", "24px");
        document.querySelector(":root").style.setProperty("--tipografia-ícone-tamanho", "32px");

        /* ------ Exclusão de GIFs. */

        function exclusão_de_gifs(){
            var gif = document.querySelectorAll(".gif");
            gif.forEach(gif => {
                gif.style.display = "none";
            })
        }

        /* ------ Expansão de botões e inputs. */

        function expansão(){
            var botão = document.querySelectorAll("button");
            botão.forEach(botão => {
                botão.style.height = "64px";
            })
        
            var input = document.querySelectorAll("input");
            input.forEach(input => {
                input.style.height = "64px";
            })
        }

        exclusão_de_gifs();
        expansão();

    }else{

        /* ------ Largura das telas. */

        document.querySelector("#main-entrada-inicial-informações").style.width = "640px";
        document.querySelector("#main-newsletter-informações").style.width = "640px";
        document.querySelector("#main-promoção-informações").style.width = "640px";

        /* ------ Centralização das telas. */

        document.querySelector("#main-entrada-inicial").style.textAlign = "start";
        document.querySelector("#main-entrada-inicial-informações").style.justifyItems = "start";

        document.querySelector("#main-newsletter").style.textAlign = "end";
        document.querySelector("#main-newsletter-informações").style.justifyItems = "end";

        document.querySelector("#main-promoção").style.textAlign = "start";
        document.querySelector("#main-promoção-informações").style.justifyItems = "start";

        /* ------ Aumento des valores tipográficos e estilísticos. */

        document.querySelector("header").style.height = "96px";
        document.querySelector(":root").style.setProperty("--tipografia-logo-tamanho", "24px");
        document.querySelector(":root").style.setProperty("--tipografia-endereços-tamanho", "12px");
        document.querySelector(":root").style.setProperty("--tipografia-botão-cabeçalho-tamanho", "12px");
        document.querySelector("#header-endereços-pesquisa-perfil").querySelector("button").querySelector("a").innerHTML = "Crie sua conta";
        document.querySelector(":root").style.setProperty("--tipografia-título-tamanho", "48px");
        document.querySelector(":root").style.setProperty("--tipografia-parágrafo-tamanho", "32px");
        document.querySelector(":root").style.setProperty("--tipografia-descrição-título-tamanho", "24px");
        document.querySelector(":root").style.setProperty("--tipografia-descrição-parágrafo-tamanho", "16px");
        document.querySelector(":root").style.setProperty("--tipografia-botão-corpo-tamanho", "16px");
        document.querySelector(":root").style.setProperty("--tipografia-ícone-tamanho", "20px");

        /* ------ Exclusão de GIFs. */

        function exclusão_de_gifs(){
            var gif = document.querySelectorAll(".gif");
            gif.forEach(gif => {
                gif.style.display = "block";
            })
        }

        /* ------ Expansão de botões e inputs. */

        function expansão(){
            var botão = document.querySelectorAll("button");
            botão.forEach(botão => {
                botão.style.height = "48px";
            })
        
            var input = document.querySelectorAll("input");
            input.forEach(input => {
                input.style.height = "48px";
            })
        }

        exclusão_de_gifs();
        expansão();
    }
}

/* ------ Altura responsiva dos efeitos. */

window.addEventListener('load', (event) => {
    setInterval(efeitos, 10);
});

function efeitos(){
    document.querySelector("#ruído-entrada-inicial").style.height = `${parseInt(window.getComputedStyle(document.querySelector("#main-botões-gerais")).height) + parseInt(window.getComputedStyle(document.querySelector("#main-entrada-inicial")).height)}px`;
    document.querySelector("#ruído-newsletter").style.height = `${parseInt(window.getComputedStyle(document.querySelector("#main-newsletter")).height)}px`;
    document.querySelector("#ruído-promoção").style.height = `${parseInt(window.getComputedStyle(document.querySelector("#main-promoção")).height)}px`;
    document.querySelector("#papel").style.height = `${parseInt(window.getComputedStyle(document.querySelector("footer")).height)}px`;
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