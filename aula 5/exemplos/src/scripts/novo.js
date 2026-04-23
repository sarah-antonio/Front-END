const tituloNhoque = document.querySelector('#card-nhoque h3')

const botoesCompra = document.querySelectorAll('btn-pedido')

const terceiroCard = document.querySelector('.card:nth-child(3)')



//Manipulando atributo

const imagem_lasanha = document.querySelector('#foto-destaque')

const card_lasanha = document.querySelector('#card-lasanha')

const agora = new Date()
const hora = agora.getHours(0)

const imgLasanha = document.querySelector('img[alt="Lasanha-tech"]')

const nomeCompleto = document.querySelector('#nome')

console.log("1. Mostrando o titulo NHOQUE (pelo ID)",tituloNhoque)

console.log("2. Quantidade de botoes de pedido",botoesCompra.length)

console.log("3. A terceira posicao da class.card:", terceiroCard)


if (tituloNhoque){
    console.log("titulo CAPTURADO:", tituloNhoque.innerText)
}

// saudacao.textContent = hora < 18 ? "Bem vindo, boa tarde": "bem vindo,boa noite"

nomeCompleto.innerHTML = "Meu <strong>nome</strong> é <em>Celso</em>"

//Manipulando  atributos

// imgLasanha.alt = "Produto esgotado"

// imgLasanha.src = "./src/imagem/esgotado.jpg"

tituloNhoque.style.color = "#0bc850"

card_lasanha.classList.add('em-promocao')


