/**
* @param let {number} Las variables deben ser de tipo Number y nos indican el valor de cambio de cada moneda
* @param const {function} Las funciones son las que realizan el cambio de moneda
* @param console.log {string} Imprime en consola el resultado de la conversion de moneda
* @param module.exports {function} Exporta las funciones para ser utilizadas en el archivo test.js
*/

let oneDollarIsYen = 146 // Cambio de dolar a Yen ===> 1 dollar = 106.58 Yen
let oneEuroIsDollar = 1.2 // Cambio de dollar a euro ===> 1 dollar = 0.83 euros
let oneYenIsGbp = 184 // cambio de Yen a GBP ===> 1 Yen = 0.006 GBP

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * oneDollarIsYen;
    return valueInYen;
}

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * oneEuroIsDollar;
    return valueInDollar;
}

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * oneYenIsGbp;
    return valueInPound;
}

console.log('7 Dolares son equivalentes ' + fromDollarToYen(7) + ' Yens');
console.log('3.5 Euros son equivalentes ' + fromEuroToDollar(3.5) + ' Dolares');
console.log('1150 Yens son equivalentes ' + fromYenToPound(1150) + ' Libras');

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };