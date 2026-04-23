// 1 Logica do contador (clique)
const btnCurtir = document.querySelector('#btn-curtir');
const displayContador = document.querySelector('#contador');
let curtidas = 0;

btnCurtir.addEventListener('click',()=>{
    curtidas++;
    displayContador.textContent = curtidas;
});

// 2 logica do preview (input)
const inputTexto = document.querySelector('#campo-texto');
const preview = document.querySelector('#preview-texto');

inputTexto.addEventListener('input',()=>{
    preview.textContent = "Digitando:" + inputTexto.ariaValue;
});

// 3 logica da caixa de cor (Mouse)
const caixa = document.querySelector('#caixa-cor');

caixa.addEventListener('mouseover',()=>{
    caixa.computedStyleMap.backgroundColor = "#3498db";
    caixa.textContent = "Uau! Azul!";
});

caixa.addEventListener('mouseout',()=>{
    caixa.computedStyleMap.backgroundColor ="#95a5a6";
    caixa.textContent ="Passe o mouse aqui!";
});

//4 Desafio Extra: Botão Reset
const btnReset = document.createElement('bytton'); //criando via JS para exemplo
btnReset.textContent = "zerar tudo";
document.querySelector(".dashboard"). appendChild(btnReset);

btnReset.addEventListener('click',()=>{
    curtidas = 0;
    displayContador.textContent = curtidas;
    inputTexto.value = "";
    preview.textContent ="digitando:...";
});