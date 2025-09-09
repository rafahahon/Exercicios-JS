
// ! FILTER

// Filtrar números maiores que 2

/*
const numeros = [1, 2, 3, 4, 5, 6]

const maioresQueDois = numeros.filter(numero => numero > 2) // vai percorrer cada um dos números e verificar quais sao maiores que 2
                                         // function

console.log(maioresQueDois)
*/

// Filtrar nomes

/*
let nomes = ["Ana", "Maria", "Carlos", "Solange"]

let nomesLongos = nomes.filter(nome => nome.length > 5) // vai percorrer cada nome verificando a quantidade de letras de cada um, armazendo os com mais de 5 letras

console.log(nomesLongos)
*/

// Filtrar numeros pares

/*
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let pares = numeros.filter(par => par % 2 === 0) // vai verificar e armazenar os números pares

console.log(pares)
*/

// Filtrar um objeto 

/*
let pessoas = [
    {nome: "Lucas", idade: 17}, // cada chave é uma pessoa
    {nome: "Rebeca", idade: 22},
    {nome: "Amanda", idade: 15},
    {nome: "Julio", idade: 30}
]

let adultos = pessoas.filter(pessoa => pessoa.idade >= 18) // pessoa.idade acessa o valor da idade

console.log(adultos)
*/

// ! FIND 
// Retorna o primeiro elemento da lista correspondente a condição 

// Procurar produto pelo preço

/*
const produtos = [
    {id: 1, nome: "Teclado", preco: 100},
    {id: 2, nome: "Mouse", preco: 50},
    {id: 3, nome: "Monitor", preco: 700}
]

const produtoCaro = produtos.find(produto => produto.preco > 600) // retorna o primeiro produto com o preço maior do que 600

console.log(produtoCaro.nome) // assim ele só retorna o nome do produto com o filtro
*/

// Primeiro número maior que 10

/*
let numeros = [5, 8, 12, 20, 3, 15]

let encontrado = numeros.find(numero => numero > 10)

console.log(encontrado)
*/

// Procurar nome pela primeira letra

/*
let nomes = ["Ana", "Bruno", "Carlos", "Cassia"]

let nomeEncontrado = nomes.find(nome => nome.startsWith("C")) // verifica se a variável começa com ("letra desejada")

console.log(nomeEncontrado)
*/

// ! MAP

// Multiplicar todos os numeros por 2

/*
const numeros = [1, 2, 3, 4, 5]

const numerosDobrados = numeros.map(numero => numero * 2) // percorre o array todo e multiplica cada elemento por 2

console.log(numerosDobrados)
*/

// Criando um array a partir de objetos

/*
let pessoas = [
    {nome: "Lucas", idade: 17}, 
    {nome: "Rebeca", idade: 22},
    {nome: "Amanda", idade: 15},
    {nome: "Julio", idade: 30}
]

let nomes = pessoas.map(pessoa => pessoa.nome) // retorna somente os nomes do array pessoas inteiro

let mensagem = pessoas.map(pessoa => 
    
    `${pessoa.nome} tem ${pessoa.idade} anos.`
    // pessoa.nome + " tem " + pessoa.idade + " anos."
) // retorna a mensagem para todos os elementos do array

console.log(mensagem)
*/

// Deixar os nomes em maiúsculos e adicionar um sufixo

/*
const nomes = ["sofia", "andré", "angela"]

const nomesMaiusculo = nomes.map(nome => "Colaborador: " + nome.toUpperCase())

console.log(nomesMaiusculo)
*/

// ! REDUCE
// Reduz um array a um único valor

// Somar todos os números do array

/*
const numeros = [1, 2, 3, 4, 5]

// acumulador e numero podem ter qualquer nome
const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0) // o número em que o acumulador começa fica depois da vírgula
// número vai percorrer cada um, o acumulador vai começar em 0 e vai somando os números percorridos guardando o resultado na soma

console.log(soma)
*/

// Verificar o maior número do array 

/*
const numeros = [10, 20, 12, 45, 5]

const maiorNumero = numeros.reduce((max, numero) => { // percorre os valores e o max recebe o maior valor, o numero faz a verificação do próximo número e se for maior que o número atribuído ao max ele substitui o valor e assim até o final do array, o maior valor final fica armazenado no maiorNumero

    if(numero > max) {
        return numero 
    } else {
        return max
    }

    } , numeros[0]
)

console.log(maiorNumero)
*/

// Contar a frequência de palavras

/*
const palavras = ["cereja", "banana", "cereja", "laranja", "banana", "cereja"]

// a contagem percorre as palavras e reduz a um único objeto, o acumulador começa com o objeto vazio, a palavra vai percorrer e o acumulador vai armazenar "maçã" (palavra), ele vai verificar se ja tem maçã (palavra) no objeto e vai somando 1 
const contagem = palavras.reduce((acumulador, palavra) => {
    acumulador[palavra] = (acumulador[palavra] || 0) + 1
    // aqui ele verifica se a palavra já existe, se ela ainda não existir começa em zero e adiciona um, se já existir só adiciona 1 
    return acumulador
}, {} // aqui que o acumulador comeca 
)

console.log(contagem)
*/

// Calcular média de notas

/*
const notas = [7, 8, 9, 6, 10]
                            // vai contar quantos numeros tem dentro, quais os numero e vai dividir pelo tamanho 
const media = notas.reduce((total, nota) => total + nota, 0) / notas.length

console.log(media)
*/

// USO COMBINADO

/*
const usuarios = [
    {id: 1, nome: "Alice", idade: 25},
    {id: 2, nome: "Bob", idade: 30},
    {id: 3, nome: "Carol", idade: 20}
]

// Filtrar usuários com idade maior que 21

const maioresDeIdade = usuarios.filter(usuario => usuario.idade > 21)

// Encontrar o primeiro usuário com idade maior que 21

const usuarioIdade = usuarios.find(usuario => usuario.idade > 21)

// Criar um array apenas com nomes de usuários

const nomesUsuarios = usuarios.map(usuario => usuario.nome)

// Somar todas as idades dos usuários usando o reduce

const somaIdades = usuarios.reduce((total, usuario) => total + usuario.idade, 0)

console.log("Maiores de idades: ", maioresDeIdade)
console.log("Primeiro maior de idade: ", usuarioIdade)
console.log("Nomes de usuarios: ", nomesUsuarios)
console.log("Soma de idades: ", somaIdades)
*/