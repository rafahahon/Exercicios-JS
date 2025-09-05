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

// ! Exercício 3: Contagem regressiva:

// ! NÍVEL AVANÇADO 

// ! Exercício 1: Soma dos dígitos de um número:

// ! Exercício 2: Fatorial de um número:

// ! Exercício 3: Inverter um número:

// ! Exercício 4: Números perfeitos de 1 a 1000:

