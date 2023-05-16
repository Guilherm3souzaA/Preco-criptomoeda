const input = document.querySelector('input');
const precoCripto = document.querySelector('.preco_cripto');
const body = document.querySelector('body');

input.addEventListener("keydown", (object) => {

    if (object.key === 'Enter') {
        if (input.value) {
            const promise = fetch(`https://www.mercadobitcoin.net/api/${input.value}/ticker/`);
            promise.then((resposta) => {
                const promiseBody = resposta.json();

                promiseBody.then((object) => {
                    const ticker = object.ticker;
                    const maiorPrecoMoeda = ticker.high;
                    let number = parseInt(maiorPrecoMoeda);

                    precoCripto.textContent = `O maior preco de ${input.value} é
                     R$${number}`;

                });
            });
        }
    }
})