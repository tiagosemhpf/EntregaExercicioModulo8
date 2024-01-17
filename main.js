const form = document.getElementById('agenda');
const imgTel = `<img src="./image/telefone.png" alt="telefoniho" />`;

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroTelefone = document.getElementById('num-tel');

    let linha = `<tr>`;
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroTelefone.value}</td>`;
    linha += `<td>${imgTel}</td>`;
    linha += `</tr>`;

    linhas += linha;

    const ContatosNaAgenda = document.querySelector('tbody');
    ContatosNaAgenda.innerHTML = linhas;
});