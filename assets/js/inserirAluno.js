// Selecionar botão
var btn = document.querySelector("#btn-inserir");

btn.addEventListener("click", inserirAluno);

function inserirAluno(event) {

    event.preventDefault();

    // Criar elementos HTML
    var tr_linha = document.createElement("tr");
    var td_nome = document.createElement("td");
    var td_nota1 = document.createElement("td");
    var td_nota2 = document.createElement("td");
    var td_nota3 = document.createElement("td");
    var td_media = document.createElement("td");

    // Buscar dados do formulário
    var formNome = document.querySelector(".nome");
    var formNota1 = document.querySelector(".nota1");
    var formNota2 = document.querySelector(".nota2");
    var formNota3 = document.querySelector(".nota3");

    // Verificando se os inputs estão vazios

    function isEmpty () {
        if (formNota3.value == "") {
            alert("há campos vazios!")
        }

        else {
            // Modificando
            td_nome.innerHTML = formNome.value;
            td_nota1.innerHTML = formNota1.value;
            td_nota2.innerHTML = formNota2.value;
            td_nota3.innerHTML = formNota3.value;

            // Inserir tds na tr
            tr_linha.appendChild(td_nome);
            tr_linha.appendChild(td_nota1);
            tr_linha.appendChild(td_nota2);
            tr_linha.appendChild(td_nota3);
            tr_linha.appendChild(td_media);

            // Inserir tr na tb
            var table = document.querySelector("#tbody1");

            table.appendChild(tr_linha);

            calcularMedia();

        }
    }

    isEmpty();

}

