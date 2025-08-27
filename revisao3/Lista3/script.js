//FUNÇÕES
//1- FUNÇÃO DECLARATIVA
function saudacao(){
    console.log("Saudações!")
} 
saudacao()

//2- FUNÇÃO COM PARÂMETRO
function mensagem(nome){
    console.log("Olá "+ nome)
}
mensagem("Bruna")

//3- FUNÇÃO ANONIMA
let mostrarMensagem = function (){
    console.log("Esta função é anônima")
}
mostrarMensagem()

//4- ARROW FUNCTION
const multiplicar = (a,b) => {
    return a * b
}
console.log(multiplicar(3,3))

//------------------------------
//DOM- MANIPULAÇÃO
//1- TROCANDO TEXTOS
let texto = document.getElementById("texto")

function mudarTexto(){
    texto.innerText = "Texto alterado com JS!"
}

//2- Personalizando a Página
function mudarFundo() {
    document.getElementById("corpo").style.backgroundColor = "blue"
}

//3-Adicionando Elementos
function add(){
    let li = document.createElement("li");
    li.textContent = "Banana";
    document.getElementById("lista").appendChild(li);
}

//4- Removendo Paragrafo
function remover(){
    let paragrafo = document.getElementById("paragrafo")
    paragrafo.remove()
}

//5- Personalização
let titulo = document.getElementById("titulo")
let texto1 = document.getElementById("texto1")
function mudarEstilo(){
    titulo.style.color = "green"
    titulo.style.fontSize = "35px"
    texto1.style.color = "blue"
    texto1.style.fontSize = "20px"
}

//------------------------------------------
//DOM- EVENTOS
//1- Digitação
function mostrarTexto(){
    let text = document.getElementById("text").value
    document.getElementById("resposta").innerText = text
}

//2- Troca de texto
function textoMudado() {
    document.getElementById("botaomudaTexto").innerText = "Você passou o mouse!"
}

//3- Escondendo elementos
document.getElementById("btnEsconder").addEventListener("dblclick", function() {
  document.getElementById("textoEsconder").style.display = "none"
})

// 4 - Alterar fonte aleatória
document.getElementById("btnFonte").addEventListener("click", function() {
  let tamanhoAleatorio = Math.floor(Math.random() * (40 - 10 + 1)) + 10
  document.getElementById("textoFonte").style.fontSize = tamanhoAleatorio + "px"
});
