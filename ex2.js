function RolarN() {
    const n = Math.floor(Math.random() * 100 + 1)
    const DadoN = Math.floor(Math.random() * n + 1)
    return DadoN
}
console.log(RolarN())
