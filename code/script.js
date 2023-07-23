
function adicionar () {
    const resp = document.getElementById('resp')
    const respmais = Number((resp.innerHTML))
    document.getElementById ('resp').innerHTML = respmais + definir()[1]
}
 

function remover () {
    const resp = document.getElementById('resp')
    const respmais = Number((resp.innerHTML))
    document.getElementById ('resp').innerHTML = respmais - definir()[0]
} 

function reset () {
    document.getElementById ('resp').innerHTML = '0'
}

function personalizar () {
    const personalizar = document.getElementById ('personalizar-bloco').style.display = 'block'
}

function voltar () {
    const personalizar = document.getElementById ('personalizar-bloco').style.display = 'none' 
}



function definir (num) {
    const personalizar = document.getElementById ('personalizar-bloco').style.display = 'none'
    
    const contar = document.getElementById ('contagem')
    const mais = document.getElementById ('aumentar')
    const menos= document.getElementById ('diminuir')
    var contarvalue = Number (contar.value)
    var menosvalue = Number (menos.value)
    var maisvalue = Number (mais.value)

    const resp = document.getElementById ('resp').innerHTML = contarvalue
    
    return [menosvalue, maisvalue]


}


