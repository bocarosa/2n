function criacartao(categoria, pergunta, resposta){
    let container = document.getElementById('container')
    let cartao = document.createElement('Article')
    cartao.className = 'Cartao';
    cartao.innerHTML = `
<div class="conteudo-cartao">
        <h3>${categoria}</h3>
    <div class="pergunta-cartao">
        <p>${pergunta}</p>
    </div>
    <div class="resposta-cartao">
        <p>${resposta}</p>
    </div>
</div>
    `

    let visivel = false;
    function viracartao(){
        visivel = !visivel;
        cartao.classList.toggle('active', visivel)
    }
    cartao.addEventListener('click', viracartao)
    container.appendChild(cartao);
}