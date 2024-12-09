// Números
console.log('==Números==');

// Inteiros
const numero = 20 // Valor não pode ser alterado
let outroNumero; // Valor pode ser alterado

//Reais
const numeroReal = 5.4

outroNumero = 14;

console.log(`Valor de const: ${numero}`); // Mostra o número
console.log(`Primeiro valor de let: ${outroNumero}`); // Mostra o número

outroNumero = 8;

console.log(`Segundo valor de let: ${outroNumero}`); // Mostra o número
console.log(`Número real: ${numeroReal}`); // Mostra o número

// Strings
console.log('==Strings==');
let nome = 'Laura';
nome = "Laura";
nome = `Laura`;

// Formatações
console.log('Oi ' + nome + '!');
console.log('Oi ',nome, '!');
console.log(`Oi ${nome}!`);

// Boolean
console.log('==Boolean==');

const estaChovendo = false;
console.log(`Está chovendo? ${estaChovendo}`);

// Undefined
console.log('==Undefined==');
const naoExiste = undefined;
console.log(naoExiste);

// Null
console.log('==Null==')
const valorNulo = null;
console.log(valorNulo);

// NaN - Not a Number
console.log('==Nan==')

const numero1 = 10;
const numero2 = 30;

const resultado = 'ab' - numero1;

console.log(resultado);

// Operações
console.log('==Operações==')
const soma = 1 + 4;
const subtracao = 4 - 3;
const multiplicacao = 4 * 2;
const divisao = 30/3;
let elevado = 2 ** 4;
elevado = Math.pow(2, 4);
const restoDaDivisao = 3 % 2
const numeroNegativo = -5;
const numeroAbsoluto = Math.abs(numeroNegativo);

console.log();
console.log('==Resultados==');
console.log({soma});
console.log({subtracao});
console.log({multiplicacao});
console.log({divisao});
console.log({elevado});
console.log({restoDaDivisao});
console.log({numeroNegativo});
console.log({numeroAbsoluto});


