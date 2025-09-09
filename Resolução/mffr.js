// ! FILTER

// 1 Dado o array const notas = [4, 7, 9, 3, 10, 5];, filtre apenas as notas maiores ou iguais a 7.

/*
const notas = [4, 7, 9, 3, 10, 5]

let nota7 = notas.filter(nota => nota >= 7)
console.log(nota7)


// 2 Dado o array const palavras = ["sol", "mar", "computador", "lua", "código"];, filtre apenas as palavras com mais de 4 letras.


const palavras = ["sol", "mar", "computador", "lua", "código"]

let palavrasGrandes = palavras.filter(palavra => palavra.length > 4 )
console.log(palavrasGrandes)


// 3 Dado o array const animais = ["gato", "cachorro", "peixe", "elefante", "abelha"];, filtre apenas os animais cujo nome começa com a letra "c".


const animais = ["gato", "cachorro", "peixe", "elefante", "abelha"]

let animaisC = animais.filter(animal => animal.startsWith("c"))
console.log(animaisC)
*/

// ! FIND

// 1 Dado o array const filmes = ["Avatar", "Batman", "Vingadores", "Matrix", "Barbie"];, encontre o primeiro filme que começa com a letra "B".

/*
const filmes = ["Avatar", "Batman", "Vingadores", "Matrix", "Barbie"]

let filmeB = filmes.find(filme => filme.startsWith("B"))
console.log(filmeB)

// 2 Dado o array const numeros = [2, 4, 6, 9, 12, 15];, encontre o primeiro número ímpar.

const numeros = [2, 4, 6, 9, 12, 15]

let impar = numeros.find(numero => numero % 2 === 1)
console.log(impar)


// 3 Dado o array const alunos = [{nome: "Ana", nota: 8}, {nome: "Carlos", nota: 5}, {nome: "Beatriz", nota: 9}];, encontre o primeiro aluno com nota maior ou igual a 7.

const alunos = [
    {nome: "Ana", nota: 8}, 
    {nome: "Carlos", nota: 5}, 
    {nome: "Beatriz", nota: 9}
]

let aluno7 = alunos.find(aluno => aluno.nota >= 7)
console.log(aluno7)
*/

// ! MAP 

// 1 Dado o array const temperaturas = [20, 25, 30, 15];, crie um novo array convertendo para Fahrenheit (C * 1.8 + 32).

/*
const temperaturas = [20, 25, 30, 15]

let fahrenheit = temperaturas.map(temperatura => temperatura * 1.8 + 32) 
console.log(fahrenheit)

// 2 Dado o array const produtos = ["camisa", "calça", "sapato"];, crie um novo array com os nomes em maiúsculo e prefixo "Produto: ".

const produtos = ["camisa", "calça", "sapato"]

let lista = produtos.map(produto => "Produto: " + produto.toUpperCase())
console.log(lista)

// 3 Dado o array const numeros = [1, 2, 3, 4];, crie um novo array com cada número elevado ao quadrado (x ** 2).

const numeros = [1, 2, 3, 4]

let numeroElevado = numeros.map(numero => numero ** 2)
console.log(numeroElevado)
*/

// ! REDUCE

// 1 Dado o array const valores = [100, 200, 50, 150];, calcule o total (como se fosse uma soma de compras).

/*
const valores = [100, 200, 50, 150]

let total = valores.reduce((acumulador, valor) => acumulador + valor, 0)
console.log(total)

// 2 Dado o array const palavras = ["JS", "é", "muito", "legal"];, use reduce para juntar tudo em uma única frase.

const palavras = ["JS", "é", "muito", "legal"]

let palavra = palavras.reduce((acumula, palavra) => acumula + " " + palavra)
console.log(palavra)

// 3 Dado o array const numeros = [1, 2, 3, 4, 5];, use reduce para calcular a média.

const numeros = [1, 2, 3, 4, 5]

let media = numeros.reduce((soma, numero) => soma + numero, 0) / numeros.length
console.log(media)
*/

// ! DESAFIOS

// 1 Dado o array 
// const livros = [
//   { titulo: "Dom Casmurro", paginas: 300 },
//   { titulo: "O Hobbit", paginas: 295 },
//   { titulo: "A Revolução dos Bichos", paginas: 112 }
// ];
// - Filtre apenas os livros com mais de 200 páginas.
// - Crie um array apenas com os títulos.
// - Calcule o total de páginas de todos os livros.

/*
const livros = [
    { titulo: "Dom Casmurro", paginas: 300 },
    { titulo: "O Hobbit", paginas: 295 },
    { titulo: "A Revolução dos Bichos", paginas: 112 }
    ]

let livros200 = livros.filter(livro => livro.paginas > 200)
console.log(livros200)

let livrosTitulos = livros.map(livro => livro.titulo)
console.log(livrosTitulos)

let totalPaginas = livros.reduce((acumulador, pagina) => acumulador + pagina.paginas, 0)
console.log(totalPaginas)

// 2 Dado o array
// const carrinho = [
//   { produto: "Notebook", preco: 2500 },
//   { produto: "Mouse", preco: 100 },
//   { produto: "Teclado", preco: 200 }
// ];
// - Use `map` para criar uma lista de strings no formato "Produto: X - R$ Y".
// - Use `reduce` para calcular o valor total da compra.
// - Use `find` para encontrar o produto chamado `"Mouse"`.

const carrinho = [
    { produto: "Notebook", preco: 2500 },
    { produto: "Mouse", preco: 100 },
    { produto: "Teclado", preco: 200 }
    ]

let lista = carrinho.map(produto => 
    `Produto: ${produto.produto} - R$ ${produto.preco}`
)
console.log(lista)

let somaTotal = carrinho.reduce((total, soma) => total + soma.preco, 0)
console.log(somaTotal)

let mouse = carrinho.find(produtoM => produtoM.produto.startsWith("M"))
console.log(mouse)
*/