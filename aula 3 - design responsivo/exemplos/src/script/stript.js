class Prato{
    constructor(nome, preco){
        this.nome = nome 
        this.preco = preco
    }

    exibirComoMoeda(total){
        return "R$" + total.toFixed(2)
    }


}

const lasanha = new Prato("Lasanha Bolonhesa",45.00)


alert("Seja bem vindo ao restaurante Sabor  e Saber!")

console.log("Teste")

const cliente = prompt("bem vindo,cliente. Para um atendimento personalizado, digite seu nome:")

let nomeFormatado = cliente.trim().toUpperCase()

alert("Bem vindo:" + nomeFormatado)
alert(`Bem vindo ${nomeFormatado}`)




const horaAgora = new Date()

const hora = horaAgora.getHours()

if(hora < 12){
    alert(`Bom dia, ${nomeFormatado}, aproveite as delicias do  café da manhã!`)

}else{
    alert(`Boa tarde, ${nomeFormatado},aproveite as iguarias do almoço!`)
    console.log("Depois das onze")
}




const querPrato = confirm(`Falar meu querido ${nomeFormatado} quer um Prato?`)
if(querPrato){
    let quantidade = prompt("Hoje temos lasanha bolonhesa, quantas voce quer?")
    let total = lasanha.preco * quantidade 
    //alert(total)
    alert(`Bacana, o seu total de ${lasanha.nome} é de:${lasanha.exibirComoMoeda(total)}`)

    }else{
        alert("ok, obrigado pela visita, volte sempre!")
    }
