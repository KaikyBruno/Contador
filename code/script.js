function adicionar () {
    const resp = document.getElementById('resp')
    const respmais = Number((resp.innerHTML))
    document.getElementById ('resp').innerHTML = respmais + 1
} 

function remover () {
    const resp = document.getElementById('resp')
    const respmais = Number((resp.innerHTML))
    document.getElementById ('resp').innerHTML = respmais + -1
} 

function reset () {
    document.getElementById ('resp').innerHTML = '0'
}