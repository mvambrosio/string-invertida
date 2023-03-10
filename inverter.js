function inverter(str) {
    var novastr = ""
    var i
    for (i = 0; i < str.length; i++) {
        novastr = str[i] + novastr
    }
    return novastr
}

var exemplo = "Teste de vaga para inverter string"
var invertida = inverter(exemplo)
console.log(invertida)