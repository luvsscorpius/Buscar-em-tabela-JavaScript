// Popular a tabela 
let dados = [
    ["and", "and@gmail.com", "35-98922086", "Ativo"],
    ["bea", "bea@gmail.com", "35-88487499", "Ativo"],
    ["Ju", "juliana@gmail.com", "35-98765432", "Ativo"],
    ["Fran", "fran@gmail.com", "35-00000000", "Bloqueado"],
    ["João", "jao@gmail.com", "35-00000000", "Bloqueado"]
]

console.log(dados.length)

// Populando o tbody

const tbody = document.querySelector('#tbody')
for (let i = 0; i < dados.length; i++) {
    var tr = "<tr>" +
        "<td>" + dados[i][0] + "</td>" +
        "<td>" + dados[i][1] + "</td>" +
        "<td>" + dados[i][2] + "</td>" +
        "<td>" + dados[i][3] + "</td>" +
        "</tr>"
    tbody.innerHTML += tr

    var tr = tbody.childNodes
}

// keyup é pra quando você solta a tecla
document.querySelector('#txtBusca').addEventListener('keyup', function () {
    var busca = document.querySelector('#txtBusca').value.toLowerCase();
    console.clear()
    for (let i = 0; i < tbody.childNodes.length; i++) {
        var achou = false
        var tr = tbody.childNodes[i]
        var td = tr.childNodes

        for (let j = 0; j < td.length; j++) {
            var value = td[j].childNodes[0].nodeValue.toLowerCase()
            if (value.indexOf(busca) >= 0) {
                achou = true
            }
        }
        if (achou) {
            tr.style.display = "table-row"
        } else {
            tr.style.display = "none"
        }
    }
})