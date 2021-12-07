const interruptor = document.getElementById("interruptor");
const lampada = document.getElementById("lampada");

// troca a imagem para a da lâmpada quebrada
function quebraLampada(){
    lampada.src = "./img/lampada_quebrada.jpg";
    interruptor.textContent = "Ligar";
    interruptor.setAttribute("disabled", "");
}

// a função retorna se a lâmpada está quebrada
function lampadaQuebrada(){
    // o método 'indexOf' procura um trecho de String dentro de uma String e retorna -1 se não encontrar
    return lampada.src.indexOf("quebrada") > -1;
}

// a função de quebrar lâmpada será executada com o duplo click na lâmpada
lampada.addEventListener("dblclick", quebraLampada);

function lampadaDesligada(){
    return lampada.src.indexOf("desligada") > -1;
}

function ligaLampada(){
    if (!lampadaQuebrada()){
        lampada.src = "./img/lampada_ligada.jpg";
        interruptor.textContent = "Desligar";
    }
}

function desligaLampada(){
    if (!lampadaQuebrada()){
        lampada.src = "./img/lampada_desligada.jpg";
        interruptor.textContent = "Ligar";
    }
}

function ligaDesliga(){
    if (lampadaDesligada()){
        ligaLampada();
    } else if (!lampadaDesligada()){
        desligaLampada();
    }
}

// a função de ligar e desligar é executada ao clicar no botão
interruptor.addEventListener("click", ligaDesliga)

interruptor.addEventListener("dblclick", quebraLampada)

// a função de ligar será executa ao sobrepor o mouse à lâmpada
lampada.addEventListener("mouseover", ligaLampada);

// a função de desligar será executada ao remover o mouse da lâmpada
lampada.addEventListener("mouseleave", desligaLampada);
