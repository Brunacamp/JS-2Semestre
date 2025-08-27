//1 
let nome = prompt ("Qual seu nome? ")
console.log("Boas-vindas ", nome)

//2 
const input = document.getElementById("input")
const botao = document.getElementById("botao")
const mensagem = document.getElementById("mensagem")

botao.addEventListener("click", () => {
    mensagem.innerText = input.value;
})

//3
let valor1 = prompt("Digite o valor 1: ")
let valor2 = prompt("Digite o valor 2: ")
let soma = Number(valor1) + Number(valor2)
console.log("a soma é", soma)

//4
let numero = prompt ("Digite um número:");
console.log("O número informado foi: " + numero);

//5
let idade = prompt("Qual sua idade?");
if (Number(idade) >= 18) {
    console.log("Você é maior de idade.");
} else {
     console.log("Você é menor de idade.");
}

//6
let frase = prompt("Digite uma frase: ")
console.log(frase) 
console.log(frase.toUpperCase()) 
console.log(frase.toLowerCase()) 
console.log(frase.includes("amo"))
console.log(frase.charAt(5))
console.log(frase.replace("amo", "odeio")) 

//7
let aleatorio = Math.floor(Math.random()*10)+1
console.log(aleatorio)
let adivinhe = prompt("Adivinhe o numero de 1 a 10: ")
if (adivinhe == aleatorio) {
   console.log("Você adivinhou: ")
} else {
    console.log("Você errou! o numero certo é ", aleatorio)
}

//8
let arredondado1 = Math.round(prompt("Digite um numero com virgula: "))
let arredondado3 = Math.floor(prompt("Digite um numero com virgula: "))
let arredondado4 = Math.ceil(prompt("Digite um numero com virgula: "))

console.log("round 4.6", arredondado1)
console.log("floor 5.8", arredondado3)
console.log("ceil 5.2", arredondado4)

//9
let maior = Math.max(5, 10, 8, 6, 2, 30, 7 ,9 , 22, 45)
let menor = Math.min(5, 10, 8, 6, 2, 30, 7 ,9 , 22, 45)
console.log("Maior valor: ", maior)
console.log("Menor valor: ", menor)

//10
let raiz = Math.sqrt(25) 
let absoluto = Math.abs(-10) 
let elevado = Math.pow(Number(2), 4)
console.log(raiz)
console.log(absoluto)
console.log(elevado)

//11
let hoje = new Date();
console.log("Data atual:", hoje.toLocaleDateString());

// 12
let aniversario = new Date("2025-09-10");
let agora = new Date();
let diff = aniversario - agora;
let dias = Math.ceil(diff / (1000 * 60 * 60 * 24));
console.log("Faltam", dias, "dias para o meu aniversário.");


