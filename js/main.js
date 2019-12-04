// banner da página index

// contador de imagens
var imgAtual = 0;

// diretorio de imagens
var dirImg = "img";

// elemento de página para o banner
var objBanner = document.querySelector(".principal-banner img");

// grupo de imagens (Array) 
var imgBanner = [
    "estadio.jpg",
    "bola.jpg",
    "grama.jpg"
];

// início do texto do banner
var frases = [
    "Melhores Momentos Do fim de Semana",
    "Bola é redonda ou quadrada?",
    "A Grama que você nao corta é de quem"
];

var objFrases = document.getElementById("linha-banner");
// fim texto do banner

//////////////////////////////////////////////////////////


// início troca de imagens do banner
function trocaImagem() {
    // muda o valor da imagem atual a partir do resto da divisão pelo tamanho do aray
    imgAtual = (imgAtual + 1) % imgBanner.length;

    // monta o diretorio + imagem
    var imagem = dirImg + "/" + imgBanner[imgAtual];

    // seleciona a div e a tag a ser alterada
    // Array [posição da informação]
    objBanner.src = imagem;

    // muda o texto quando troca de imagem
    objFrases.innerHTML = "<p>" + frases[imgAtual] + "</p>";
}

// criar um intervalo de tempo para a troca de imagem
var trBanner = setInterval(trocaImagem, 1600);

// interrompe a animação do banner
function paraBanner() {
    // remove o interavo
    clearInterval(trBanner);
}

// reinicia a animação do banner
function voltaBanner() {
    // recria o intervalo com setIntervalo
    trBanner = setInterval(trocaImagem, 1600);
}

// avança uma imagem pelo botão
function proximaImg() {
    // estrutura de condição para quando chegar na ultima imagem do meu array ele calcula menos -1
    if (imgAtual === (imgBanner.length -1) ) {
        imgAtual = 0;
    }
    else {
        imgAtual += 1;
    }

    var imagem = dirImg + "/" + imgBanner[imgAtual];
    objBanner.src = imagem;
    
    // Muda o texto quando troca de imagem
    objFrase.innerHTML = "<p>" + frases[imgAtual] + "</p>";
}

// retrocede  uma imagem pelo botão
function voltaImg() {
    if (imgAtual === 0) {
        imgAtual = imgBanner.length - 1;
    }
    else {
        imgAtual -= 1 ;
    }

    var imagem = dirImg + "/" + imgBanner[imgAtual];
    objBanner.src = imagem;
    
    // Muda o texto quando troca de imagem
    objFrase.innerHTML = "<p>" + frases[imgAtual] + "</p>";
}