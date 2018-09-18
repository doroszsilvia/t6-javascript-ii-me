const button = document.querySelector(".transacao__button");

button.addEventListener("click", function (event){
    event.preventDefault(); // previne o evento padrão
    const tabela = document.querySelector(".extrato__table"); // pega a tabela do documento
    
    const inputName = document.getElementById("transacaoInputName");
    const inputMoney = document.getElementById("transacaoInputMoney");
    const inputDate = document.getElementById("transacaoInputDate");

    // cria linha
    const linha = document.createElement("tr");


    // cria colunas
    const colunaName = document.createElement ("td");
    const colunaNameTexto = document.createTextNode(inputName.value)
    colunaName.appendChild(colunaNameTexto);
    

    const colunaValor = document.createElement("td");
    const colunaValorText= document.createTextNode(inputMoney.value)
    colunaValor.appendChild(colunaValorText);
    
    const colunaDate = document.createElement("td");
    const colunaDateText= document.createTextNode(inputDate.value)
    colunaDate.appendChild(colunaDateText);

    // inserir colunas na linha
    linha.appendChild(colunaName);
    linha.appendChild(colunaValor);
    linha.appendChild(colunaDate);

    
    tabela.appendChild(linha);



})



