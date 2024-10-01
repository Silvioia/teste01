document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Este comando Evita o envio do formulário inicial 

    const numero = parseInt(document.getElementById('numero').value); 
    // Número inicial a ser digitado.

    const indice = parseInt(document.getElementById('indice').value); 
    // Incremento, que será somado x vezes.
    const outputElement = document.getElementById('output');

    outputElement.innerHTML = ''; 
    // Limpa o conteúdo anterior... um pouco de organização é bom! rss

    let soma = numero; // Inicializa a soma com o número inicial que vc inseriu.

    for (let i = 1; i <= indice; i++) { //Esta é a estrutura do For,
        const para = document.createElement('p');
        para.textContent = `Iteração ${i}: ${soma}`;
        outputElement.appendChild(para);

        soma += numero; // Soma o número inicial a cada iteração, curtiram?
    }
});
