function comparaNumeros(num1, num2) {

    if (typeof (num1) == "undefined" || typeof (num2) == "undefined") {
        console.log('Numeros requeridos');
        return;
    }

    if (typeof num1 != 'number') {
        console.log('Numeros 1 precisa ser um numero');
        return;
    }

    if (typeof num2 != 'number') {
        console.log('Numeros 2 precisa ser um numero');
        return;
    }

    let primeiraFrase = criaPrimeiraFrase(num1, num2);
    let segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`;
}



function criaPrimeiraFrase(num1, num2) {
    let saoIguais = '';
    if (num1 !== num2) {
        saoIguais = 'não';
    }
    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
}

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;
    let resultado10 = 'menor';
    let resultado20 = 'menor';

    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10) {
        resultado10 = 'maior'
    }

    if (compara20) {
        resultado20 = 'maior'
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

var result = comparaNumeros('a',0);
console.log(result);