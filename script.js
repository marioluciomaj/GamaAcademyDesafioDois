
function cadastraCliente(){
    let campo1 = document.getElementById("campo1");
    let campo2 = document.getElementById("campo2");
    let campo3 = document.getElementById("campo3");
    let campo4 = document.getElementById("campo4");
    let campo5 = document.getElementById("campo5");

    let dados = JSON.parse(localStorage.getItem("dadosCliente"));

    if(dados == null){
        localStorage.setItem("dadosCliente", "[]");
        dados = [];
    }

    let auxRegistro = {
        nome: campo1.value,
        email: campo2.value,
        cpf: campo3.value,
        telefone: campo4.value,
        endereço: campo5.value
    }

    dados.push(auxRegistro);

    localStorage.setItem("dadosCliente", JSON.stringify(dados));
    alert("Registro incluído com sucesso!");

    campo1.value = "";
    campo2.value = "";
    campo3.value = "";
    campo4.value = "";
    campo5.value = "";
}


function cadastraProduto(){
    let campo1 = document.getElementById("campo6");
    let campo2 = document.getElementById("campo7");
    let campo3 = document.getElementById("campo8");
    let campo4 = document.getElementById("campo9");
    let campo5 = document.getElementById("campo10");

    let dados = JSON.parse(localStorage.getItem("dadosProduto"));

    if(dados == null){
        localStorage.setItem("dadosProduto", "[]");
        dados = [];
    }

    let auxRegistro = {
        codigo: campo6.value,
        produto: campo7.value,
        marca: campo8.value,
        quantidade: campo9.value,
        observações: campo10.value
    }

    dados.push(auxRegistro);

    localStorage.setItem("dadosProduto", JSON.stringify(dados));
    alert("Registro incluído com sucesso!");

    campo6.value = "";
    campo7.value = "";
    campo8.value = "";
    campo9.value = "";
    campo10.value = "";
}

function abriCadastroCliente(){
    let storage = window.localStorage;
    let key = this.getAttribute('dadosCliente');
    let recDados = JSON.parse(storage.getItem(key));
    
    document.getElementById('nome').innerText = campo1[0];
    document.getElementById('email').innerText = campo2[1];
    document.getElementById('cpf').innerText = campo3[2];
    document.getElementById('telefone').innerText = campo4[3];
    document.getElementById('endereço').innerText = campo5[4];
}