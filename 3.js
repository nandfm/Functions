console.log(Math.random())
console.log(Math.random() * 2)
console.log(Math.floor(Math.random() * 2))

function sortearcaraoucoroa(){
    const sorteio = Math.floor(Math.random() * 2)
    if (sorteio === 0) {
        return "cara"
    } else {
        return "coroa"
    }
}
console.log(sortearcaraoucoroa())

function sortearcaraoucoroa() {
    const sorteio = Math.floor(Math.random() * 2)
    return sorteio === 0 ? "cara" : "coroa"
}

function sortearcaraoucoroa() {
    return Math.floor(Math.random() * 2) === 0 ? "cara" : "coroa"
}