// EXERCÍCIOS ESTRUTURAS DE REPETIÇÃO 

// ! NÍVEL BÁSICO 

// ! Exercício 1: Contagem de 1 a 10:

/*
let numero = 10

for(let i = 1; i <= numero; i++) {
    console.log(i)
}
*/

// ! Exercício 2: Tabuada de um número:

/*
let numero = parseInt(prompt("Digite um número: "))

for(let i = 1; i <= 10; i++) {
    console.log(i + " * " + numero + " = " + (i * numero))
}
*/

// ! Exercício 3: Soma dos primeiros N números naturais:

/*
let numero = parseInt(prompt("Digite um número: "))
let soma = 0

for(let i = 1; i <= numero; i++) {
    soma += i
    console.log(i + " " + soma)
}
*/

// ! NÍVEL INTERMEDIÁRIO 

// ! Exercício 1: Exibir os números pares de 1 a 50:

/*
let numero = 50

for(let i = 1; i <= numero; i++){
    if(i % 2 == 0) {
        console.log(i)
    }
}
*/

// ! Exercício 2: Jogo de adivinhação:

/*
let aleatorio = 8
let numero = 0

while(aleatorio != numero){
    numero = parseInt(prompt("Digite um número entre 0 e 100: "))

    if(numero > 100 || numero < 0) {
        console.log("Por favor, digite um número válido.")
    } else if (numero > aleatorio) {
        console.log("Digite um número menor.")
    } else if (numero < aleatorio) {
        console.log("Digite um número maior.")
    } else {
        console.log("Acertou!")
    }
}
*/

// ! Exercício 3: Contagem regressiva:

/*
let numero = parseInt(prompt("Digite um número: "))

while(numero >= 0) {
    console.log(numero--)
}
*/

// ! NÍVEL AVANÇADO 

// ! Exercício 1: Soma dos dígitos de um número:

/*
let numero = Number(prompt("Digite um número inteiro: ")) // recebe um numero do usuario
let resultado = 0

if(!Number.isInteger(numero) || numero < 0) { // verifica se o numero e inteiro ou positivo 
    console.log("Digite um número inteiro!")
} else {

while(numero > 0) { // enquanto numero for maior que zero
    let ultimoDigito = numero % 10 // recebe o ultimo digito
    resultado += ultimoDigito // soma o ultimo digito no resultado
    numero = Math.floor(numero/10) // retira o ultimo digito do numero
} 
console.log("A soma é: " + resultado)
}
*/

// ! Exercício 2: Fatorial de um número:

/*
let numero = parseInt(prompt("Digite um número inteiro: "))
let fator = 1

if (numero < 0 || isNaN(numero)) {
    console.log("Digite um número inteiro positivo!")
} else {

    for (let i = 1; i <= numero; i++) {
        fator *= i
    } // aqui está fazendo a conta do menor até o n 
}

console.log(fator)
*/

// ! Exercício 3: Inverter um número:

/*
let numero = parseInt(prompt("Digite um número inteiro: "))
let invertido = 0

if (numero < 0 || isNaN(numero)) {
    console.log("Digite um número inteiro positivo!")
} else {

    while(numero > 0){
        let ultimoDigito = numero % 10 // recebe o último dígito
        invertido = (invertido*10) + ultimoDigito // constrói o novo número, precisa multiplicar por 10 pra ele criar um espaço para o novo número e não somar
        numero = Math.floor(numero/10) // retira o último dígito do número
        console.log(invertido)
    }
} 
*/

// ! Exercício 4: Números perfeitos de 1 a 1000:

/*
for (let n = 1; n <= 1000; n++) {
    let soma = 0

    for (let d = 1; d < n; d++) {
        if (n % d === 0) {
            soma += d
        }
    }

    if (soma === n) {
        console.log("O número " + n + " é perfeito.")
    }
}
*/