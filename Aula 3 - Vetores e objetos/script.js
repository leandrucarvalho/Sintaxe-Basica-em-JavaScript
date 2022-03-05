// o que são vetores ou arrays

// como declarar um array

// let array = ['string', 1, true];
// console.log(array);

// pode guardar vários tipos de dados

let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
// console.log(array[0]);

// Manipulando arrays 

// forEach()- itera um array, executa uma função pra cada índice de um array; 
// push() - add item no final do array;
// pop() - remove item no final do array;
// shift() - remove item no início do array;
// unshift() - add item no início do array;
// indexOf() - retorna o índice de um valor;
// splice() - remove ou substitui um item pelo índice;
// slice() - retorna uma parte de um array existente;

// forEach
// array.forEach(function(item, index) {console.log(item, index)});

// push
// array.push('novo item')
// console.log(array)

// pop
// array.pop();
// console.log(array); 

// shift
// array.shift();
// console.log(array);

// unshift
// array.unshift('novo item início');
// console.log(array);

// indexOf

console.log(array.indexOf(true));




