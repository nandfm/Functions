function helloWorld() {
    console.log("Hello, World!")
}

helloWorld()
helloWorld()
helloWorld()

function helloWorld() {
    return "Hello, World!"
}

let x = helloWorld()
console.log(x)

function hello(name) {
   // return "hello, " + name + "!"
   return `Hello, ${name}!`
}
console.log(hello("Lisa"))
console.log(hello("Lua"))

let prof = "Denny"
console.log(hello(prof))

function somar(a, b) {
    const resultado = a + b
    return resultado
}
console.log(somar(1, 2))
console.log(somar(1, 2))
console.log(somar(1, 2))

function subtrair(x, y) {
    return x - y
}

let n1 = 5
let n2 = 6
let resultado = subtrair(n1, n2)
console.log(`${n1} - ${n2} = ${resultado}`)