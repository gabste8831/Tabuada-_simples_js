//seleção de elementos

const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTable = document.querySelector("#multiplication-operations");
const multiplicationTitle = document.querySelector("#multiplication-title span")


//funções
const createTable = (multiplicationNumber, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";

    for (i = 1; i <= multiplicatorNumber; i++) {
        const result = multiplicationNumber * i

        const template = `<div class="row">
        <div class="operation">${multiplicationNumber} X ${i} = </div> 
        <div class="result"> ${result}</div> 
          </div>`;

        const parser = new DOMParser() //o domparser é usado para analisar strings, e converter em elementos HTML

        const htmlTemplate = parser.parseFromString(template, "text/html"); //a constante é, a convesão da string (template), para o "text/html"

        const row = htmlTemplate.querySelector(".row") //realiza a busca do row, presente no template

        multiplicationTable.appendChild(row); //adiciona a linha gerada no row, para a multiplication table 
    }
    multiplicationTitle.innerText = multiplicationNumber //atualiza o número para o título da tabuada
}

//eventos

multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;
    const multiplicatornNumber = +multiplicationInput.value;

    if (!multiplicationNumber || !multiplicatornNumber) return;

    createTable(multiplicationNumber, multiplicatornNumber);
})