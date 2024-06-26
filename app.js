function sortear() {
   let quantidade = parseInt(document.querySelector("#quantidade").value);
   let de = parseInt(document.querySelector("#de").value);
   let ate = parseInt(document.querySelector("#ate").value);

   let sorteados = [];
   let numero;

   for (let i = 0; i < quantidade; i++) {
      numero = obterNumeroAleatorio(de, ate);

      while (sorteados.includes(numero)) {
         numero = obterNumeroAleatorio(de, ate)
      }

      sorteados.push(numero);
   }
   let resultado = document.querySelector("#resultado");
   resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`
}

function obterNumeroAleatorio(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}