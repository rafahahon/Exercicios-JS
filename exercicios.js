// ! Nível básico

// ! Exercício 1: Verificar maioridade:

/*
let idadeUsuario = prompt("Digite sua idade: ")

if(idadeUsuario >= 18) {
    console.log("Usuário é de maior.")
} else {
    console.log("Usuário é de menor.")
}
*/

// ! Exercicio 2: Verificar se um número é positivo ou negativo:

/*
let numeroUsuario = prompt("Digite um número: ")

if(numeroUsuario <= 0) {
    console.log("Você digitou um número negativo.")
} else {
    console.log("Você digitou um número positivo.")
}
*/

// ! Exercicio 3: Aprovação em uma prova:

/*
let notaUsuario = prompt("Digite sua nota: ")

if(notaUsuario >= 60) {
    console.log("Aprovado!")
} else {
    console.log("Reprovado!")
}
*/

// ! Exercicio 4: Verificar se um número é positivo, negativo ou zero:

/*
let numeroUsuario = prompt("Digite um número")

if(numeroUsuario > 0) {
    console.log("Positivo.")
} else if(numeroUsuario < 0) {
    console.log("Negativo.")
} else {
    console.log("Zero.")
}
*/

// ! Exercicio 5: Classificação de idade:

/*
let idadeUsuario = prompt("Digite sua idade")

if(idadeUsuario >= 0 && idadeUsuario < 13) {
    console.log("Criança.")
} else if(idadeUsuario >= 13 && idadeUsuario < 17) {
    console.log("Adolescente")
} else {
    console.log("Adulto.")
}
*/

// ! Exercicio 6: Verificar se um número é par ou ímpar:

/*
let numeroUsuario = prompt("Digite um número: ")

if(numeroUsuario % 2 == 0) {
    console.log("Par.")
} else {
    console.log("Ímpar.")
}
*/

// ! Nível intermediário

// ! Exercicio 1: Calculadora simples:

/*
let numero1Usuario = parseInt(prompt("Digite o primeiro número: "))
let numero2Usuario = parseInt(prompt("Digite o segundo número: "))
let operacaoUsuario = prompt("Digite uma operação: ")

if(operacaoUsuario == "+") {
    console.log(numero1Usuario + numero2Usuario)
} else if(operacaoUsuario == "-") {
    console.log(numero1Usuario - numero2Usuario)
} else if(operacaoUsuario == "*") {
    console.log(numero1Usuario * numero2Usuario)
} else if(operacaoUsuario == "/"3) {
    console.log(numero1Usuario / numero2Usuario)
}
*/

// ! Exercicio 2: Maior entre três números:

/*
let numero1Usuario = parseInt(prompt("Digite o primeiro número: "))
let numero2Usuario = parseInt(prompt("Digite o segundo número: "))
let numero3Usuario = parseInt(prompt("Digite o terceiro número: "))

if(numero1Usuario >= numero2Usuario && numero1Usuario >= numero3Usuario) {
    console.log("O primeiro número é o maior: " + numero1Usuario + ".")
} else if(numero2Usuario >= numero3Usuario) {
    console.log("O segundo número é o maior: " + numero2Usuario + ".")
} else {
    console.log("O terceiro número é o maior: " + numero3Usuario + ".")
}
*/

// ! Exercicio 3: Desconto em compras:

/*
let valorDaCompra = prompt("Digite o valor da compra: ")

if(valorDaCompra > 100) {
    let desconto = valorDaCompra - (valorDaCompra*0.10)
    console.log(desconto)
} else {
    console.log("Compra não recebe desconto: " + valorDaCompra + ".")
}
*/

// ! Exercicio 4: Sistema de login simples:

/*
let nomeUsuario = prompt("Digite o nome de usuário: ")
let senhaUsuario = prompt("Digite sua senha: ")

if(nomeUsuario == "admin" && senhaUsuario == "1234") {
    console.log("Login bem-sucedido.")
} else {
    console.log("Acesso negado.")
}
*/

// ! Nível avançado

// ! Exercicio 1: Classificação de triângulos:

/*
let lado1 = prompt("Insira o lado 1: ")
let lado2 = prompt("Insira o lado 2: ")
let lado3 = prompt("Insira o lado 3: ")

if(lado1 == lado2 && lado1 == lado3 && lado2 == lado3){
    console.log("Triângulo equilátero.")
} else if(lado1 == lado2 && lado1 != lado3){
    console.log("Triângulo isósceles.")
} else if(lado1 == lado3 && lado1 != lado2){
    console.log("Triângulo isósceles.")
} else if(lado2 == lado1 && lado2 != lado3){
    console.log("Triângulo isósceles.")
} else if(lado2 == lado3 && lado2 != lado1){
    console.log("Triângulo isósceles.")
} else if(lado3 == lado1 && lado3 != lado2){
    console.log("Triângulo isósceles.")
} else if(lado3 == lado2 && lado3 != lado1){
    console.log("Triângulo isósceles.")
} else {
    console.log("Triângulo escaleno.")
}
*/

// ! Exercicio 2: Conversão de notas para conceitos:

/*
let notaUsuario = prompt("Digite sua nota: ")

if(notaUsuario < 60){
    notaUsuario = ("F")
    console.log(notaUsuario)
} else if(notaUsuario >= 60 && notaUsuario < 70){
    notaUsuario = ("D")
    console.log(notaUsuario)
} else if(notaUsuario >= 70 && notaUsuario < 80){
    notaUsuario = ("B")
    console.log(notaUsuario)
} else if(notaUsuario >= 80 && notaUsuario < 90){
    notaUsuario = ("C")
    console.log(notaUsuario)
} else {
    notaUsuario = ("A")
    console.log(notaUsuario)
}
*/

// ! Exercicio 3: Cálculo de IMC:

/*
let pesoUsuario = parseFloat(prompt("Digite seu peso: "))
let alturaUsuario = parseFloat(prompt("Digite sua altura: "))

let imc = pesoUsuario / (alturaUsuario*alturaUsuario)

if(imc < 17) {
    console.log("Muito abaixo do peso.")
} else if(imc >= 17 && imc < 19) {
    console.log("Abaixo do peso.") 
} else if(imc >= 19 && imc < 25) {
    console.log("Peso normal.")
} else if(imc >= 25 && imc < 30) {
    console.log("Acima do peso.")
} else if(imc >= 30 && imc < 35) {
    console.log("Obesidade 1.")
} else if(imc >= 35 && imc < 40) {
    console.log("Obesidade 2.")
} else {
    console.log("Obesidade 3.")
}
*/

// ! Exercicio 4: Validação de ano bissexto:

/*
let anoUsuario = parseFloat(prompt("Digite o ano: "))

if((anoUsuario % 4 == 0 && anoUsuario % 100 != 0) || (anoUsuario % 400 == 0)) {
    console.log("Bissexto.")
} else {
    console.log("Não é bissexto.")
}
*/