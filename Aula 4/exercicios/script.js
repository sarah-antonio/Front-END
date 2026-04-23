//Exercicio 1 
const nome = prompt("digite o seu nome ")
const sobrenome = prompt("digite o seu sobrenome")
const nomeCompleto = nome.trim() + " " + sobrenome.trim()
alert(nomeCompleto.toLowerCase())
const tamanhoNome = nome.length + sobrenome.length
alert(`o seu nome possui ${tamanhoNome} caracterias`) 

//Exercicio 2 
const total = prompt("digite o valor total da conta")
const quantidade = prompt("digite a quantidade de pessoas")
const precoPorPessoa =total/quantidade
alert (`cada amigo deve pagar R$ ${precoPorPessoa.toFixed(2)}`)

//Exercicio 3
const valorCompra = prompt("qual é o valor da compra?")
const cupom = confirm("você tem cupom de fretes")
if(valorCompra > 150 || cupom ){
    alert("frete gratis liberado")
}else{
    alert("frete pago")
}

//Exercicio 4 
const numeroCliente = prompt("digite um numero de 1 a 10")
const numeroAleatorio= Math.round(Math.random()*10)
if(numeroCliente == numeroAleatorio){
    alert("Parabens você ganhou")
}else{
    alert (`que pena o numero sortiado é ${numeroAleatorio}`)
}

//Exercicio 5
class Veiculo{
    constructor(modelo, marca, ano){
        this.modelo = modelo
        this.marca =  marca 
        this.ano = ano 
    }
    idadeVeiculo(anoAtual){
        return anoAtual - this.ano
    }
}

const carro = new Veiculo("toyota","corola",2020)

const dataAtual = new Date()
const anoAtual = dataAtual.getFullYear()
alert(`modelo: ${carro.modelo}/n idade: ${carro.idadeVeiculo(anoAtual)}`)

