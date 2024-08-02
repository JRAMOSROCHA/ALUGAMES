let quantidadeJogosAlugados=1;

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    
    if(imagem.classList.contains('dashboard__item__img--rented')){
        decisao = confirm('Você deseja realmente devolver este item?');
        if(decisao==true){
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            quantidadeJogosAlugados--;
        }
    }
    else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        quantidadeJogosAlugados++;
    }
    console.log(`A quantidade de jogos alugados é de: ${quantidadeJogosAlugados}`);
    alert(`A quantidade de jogos alugados é de: ${quantidadeJogosAlugados}`);
}