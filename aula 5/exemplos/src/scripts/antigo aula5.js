const listaCards  = document.getElementsByClassName("card")

const links = document.getElementsByTagName("a")

const topo = document.getElementsById("topo-loja")

console.log("1. o elemento TOPO:", topo)
console.log("2. o primeiro card da lista:", listaCards[0])
console.log("3. A lista completa de LINSK:", links)
console.log("4. o endereco (URL)do primeiro link:", links[0].href)
console.log("5. A cor do cabeçario:", topo.style.backgroundColor)


const foto = document.querySelector('#foto-destaque')

const caminhoAtual = foto.getAttribute('src')

foto.setAttribute('src','src/images/esgotado.jpg')
foto.setAttribute('alt','prato esgotad!')
