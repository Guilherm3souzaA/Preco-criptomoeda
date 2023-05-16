const select = document.querySelector('select');
const precoBitCoin = document.querySelector('.preco_bitcoin');

select.addEventListener('change', (event) => {

    if (event.target[1].id === 'BTC') {

        console.log('BTC SELECIONADO');
    }
    const promise = fetch('https://www.mercadobitcoin.net/api/BTC/ticker/');

    promise.then((resposta) => {
        const respostaBody = resposta.json();

        respostaBody.then((promiseBody) => {
            const respostaBody = promiseBody;
            const maiorPreco = respostaBody.ticker.high;
            precoBitCoin.textContent = `O maior preço de compra do BTC é: R$${maiorPreco}`;

        });

    });

});