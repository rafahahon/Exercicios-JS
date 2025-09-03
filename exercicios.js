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

if(numero1Usuario > numero2Usuario && numero1Usuario > numero3Usuario) {
    console.log("O primeiro número é o maior: " + numero1Usuario + ".")
} else if(numero2Usuario > numero1Usuario && numero2Usuario > numero3Usuario) {
    console.log("O segundo número é o maior: " + numero2Usuario + ".")
} else if(numero3Usuario > numero1Usuario && numero3Usuario > numero2Usuario) {
    console.log("O terceiro número é o maior: " + numero3Usuario + ".")
}
*/

// ! Exercicio 3: Desconto em compras:

let valorDaCompra = prompt("Digite o valor da compra: ")

if(valorDaCompra > 100) {
    let desconto = valorDaCompra / (valorDaCompra*100)
    console.log(desconto)
} else {
    console.log("Compra não recebe desconto: " + valorDaCompra + ".")
}

// ! Exercicio 4: Sistema de login simples:

// ! Nível avançado

// ! Exercicio 1: Classificação de triângulos:

// ! Exercicio 2: Conversão de notas para conceitos:

// ! Exercicio 3: Cálculo de IMC:

// ! Exercicio 4: Validação de ano bissexto: