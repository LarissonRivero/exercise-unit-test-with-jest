/**
 * @require Funcion que importa las funciones a ser sometidas a pruebas unitarias
 * @test Funcion que realiza la prueba unitaria
 * @expect Funcion que realiza la comparacion de los resultados esperados con los resultados obtenidos
 * @tobe Funcion que realiza la comparacion de los resultados esperados con los resultados obtenidos
*/

const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One Dollar should be 146 Yen", function(){ //Un dólar debería valer 146 yenes. 
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(7)).toBe(1022);
})

test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One Yen should be 184 GBP", function(){
    const { fromYenToPound } = require('./app.js')// se requiere la funcion desde el archivo app.js
    expect(fromYenToPound(1150)).toBe(211600); 
})