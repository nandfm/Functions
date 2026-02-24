function jogar() {
    const jokenpo = Math.floor(Math.random() * 3 + 1)
    if (jokenpo === 1) {
        return "tesoura"
    } else if (jokenpo === 2) {
        return "pedra"
    } else {
        return "papel"
    }
}
console.log(jogar())