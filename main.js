const form = document.getElementById('form-contato')
const contatos = []
const telefone = []
let linhas = ''

form.addEventListener('submit', function(e){
e.preventDefault()

adicionaLinha()
atualizaTabela()

})

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato')
    const inputNumContato = document.getElementById('numero-contato')

    if (contatos.includes(inputNomeContato.value)){
    alert(`O contato ${inputNomeContato.value} já foi adicionado`)
    } else {
        contatos.push(inputNomeContato.value)
        telefone.push(inputNumContato.value)

        let linha = '<tr>'
        linha += `<td> ${inputNomeContato.value}`
        linha += `<td> ${inputNumContato.value}`
        linha += '</tr>'
        linhas += linha
    }

    inputNomeContato.value = ''
    inputNumContato.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}