
const idade = 18;
const temCNH = true;
let numeroDePassegeiros = 0;

const podeDirigir = idade >= 18 && temCNH;

if(podeDirigir) console.log('Pessoa pode dirigir.');
else console.log('Pessoa não pode dirigir.');

// Ternário
numeroDePassegeiros = podeDirigir ? 4 : 0;

console.log(numeroDePassegeiros);