const form = document.getElementById("form_contato");
                                                            
 let linhas = " ";

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const inputnomecontato = document.getElementById("nome_contato");
    const inputnumerocontato = document.getElementById("numero_contato");

     let linha = '<tr>';

     linha += `<td>${inputnomecontato.value}</td>`;
     linha += `<td>${inputnumerocontato.value}</td>`;
     linha += '</tr>'

     linhas += linha;

    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
   
});