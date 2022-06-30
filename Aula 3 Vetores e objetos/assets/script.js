//oque são vetores ou arrays

//como declarar arrays

/*
let array = [1,'string',false, true];
console.log(array);
*/

//Pode guardar varios tipos de dados
/*
let array = ['string', 2, 3, false, ['array1'],['array2'],['array3'], true];
*/
/*console.log(array)*/


//forEach

/*array.forEach(function(item, index){console.log(item, index)});
*/
/*

//.push (adiciona um novo item ao final do array existente)

array.push(['arraynovopush']);
console.log(array); 

*/

//.pop (remove um item final do array existente)
/*
array.pop();
console.log(array);
*/

//.shift (remove o item do início do array existente)
/*
array.shift();
console.log(array);
*/
//.unshift (adiciona um item no início do array)

/*
array.unshift(true);
console.log(array);
*/

//.indexof (atraves do console.log(array.indexOf(item)); mostra a ordem no qual o ítem esta)

/*
console.log(array.indexOf(true));
*/

//splice (apaga um intervalo de itens do array)

/*
array.splice(0, 4);
console.log(array);
*/

//.slice (adiciona parte do intervalo informado de um array existente)
/*
let novoarray = array.slice(3, 7);
console.log(novoarray);*/

//recapitulando:
// forEach() – itera um array;
//• push() – add item no final do array;
//• pop() – remove item no final do array;
//• shift() – remove item no início do array;
//• unshift() – add item no início do array;
//• indexOf() – retorna o índice de um valor;

//exemplos de como criar objetos
/*

let object ={string:'string', boolean:true, Number:1, array: [1,false, true], newobject:{string:'novastring'}};
console.log (object);



//como acessar apenas uma propriedade específica do objeto usando o exemplo da linha 75:
/*
console.log(object.newobject);
*/
/* var string= object.string;
console.log(string);

var arrayinterno = object.array;
console.log(arrayinterno);

var {string, boolean, array} = object;
console.log(string, boolean, array);

//fim da aula 3 */