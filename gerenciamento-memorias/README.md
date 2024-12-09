# Regras para Variáveis

Este documento descreve as principais regras e boas práticas para nomeação e uso de variáveis em programação.

## 1. Regras de Nomeação de Variáveis

- **Não comece o nome da variável com numerais**: Variáveis não podem começar com números. Exemplos inválidos: `1variavel`, `3numero`.
  
- **Evite caracteres especiais**: Apenas letras, números e o caractere de sublinhado `_` (underscore) são permitidos. Exemplos inválidos: `variável!`, `minha@variavel`.

- **Use letras minúsculas e separação com underscore para múltiplas palavras**: Para aumentar a legibilidade, use letras minúsculas e separe palavras com o caractere `_`. Exemplo: `minha_variavel`.

- **Evite palavras reservadas**: Não use palavras reservadas da linguagem como nomes de variáveis. Exemplos de palavras reservadas em JavaScript: `let`, `const`, `if`, `else`.

- **Seja claro e descritivo**: O nome da variável deve descrever seu propósito. Exemplo: `total_de_vendas` é mais claro do que `x` ou `a`.

## 2. Boas Práticas

- **Use o CamelCase para variáveis de uma palavra**: Para variáveis que são compostas por uma palavra, é comum usar a convenção camelCase. Exemplo: `idade`, `nomeUsuario`.

- **Evite abreviações excessivas**: Embora abreviações possam ser úteis para nomes curtos, evite usá-las demais, pois isso pode dificultar a leitura do código. Por exemplo, prefira `numeroDeUsuarios` ao invés de `numUsr`.

- **Constantes em maiúsculas**: Se você estiver utilizando uma constante, é uma boa prática usar letras maiúsculas com underscores para separar palavras. Exemplo: `TAXA_DE_IMPOSTO`.

- **Evite nomes genéricos como `dados` ou `info`**: Embora esses nomes possam ser rápidos, eles não descrevem claramente o que a variável representa. Prefira nomes mais específicos, como `dadosDeUsuario` ou `infoDeProduto`.

## 3. Exemplo de Boa Prática

```javascript
// Definindo uma constante com o valor da taxa de imposto
const TAXA_DE_IMPOSTO = 0.2;

// Definindo uma variável para armazenar o nome do usuário
let nomeUsuario = 'Laura';

// Definindo uma função que calcula o total com imposto
function calcularTotalComImposto(preco) {
  return preco + (preco * TAXA_DE_IMPOSTO);
}

let precoOriginal = 100;
let total = calcularTotalComImposto(precoOriginal);
console.log('Preço com imposto:', total);
