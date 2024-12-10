if (true) {
    console.log('Sempre aparecerei');
}

if (false) {
    console.log('Nunca aparecerei');
}

// or/ou: ||

// Expressões com ou sempre retornam verdadeiro, a menos que TODAS as expressões sejam falsas
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// and/e: &&

// Tudo precisa ser true
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);