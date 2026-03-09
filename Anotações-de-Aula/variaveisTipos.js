// strings
let nome = "fillipe"; // let permite que o valor da variável seja alterado
const sobrenome = "Santos"; // const não permite alteração do valor
let templateString = `o meu nome é ${nome} ${sobrenome}`;
console.log(templateString);

// Number - não diferencia por ponto flutuante
let A = 2;
let B = 5.56;
let C = -3.14;
const PI = 3.14;
let potencia = A ** C; // Operadores: +, -, *, %
console.log(typeof A);
console.log(typeof C);
console.log(`${A} ^ ${C} = ${potencia}`);

//Boolean
let verdadeiro = true;
let falso = false;
console.log(typeof verdadeiro);

//Operadores Lógicos 
let E = verdadeiro && falso;
let Ou = verdadeiro || falso;
console.log(E);
console.log(Ou);

let maior_que = B > A; // Outros: >=, <, <=, ==, !=
console.log(`${B} > ${A} = ${maior_que}`);

//Arrays
let numeros = [1, 3.14, -7, 99, 505.67];
console.log(numeros);
console.log(`numeros[0]= ${numeros[0]}`);// Usando o índice para acessar a array
console.log(`numeros[3]= ${numeros[3]}`);// Começa na posição 0
console.log(typeof numeros);

//object

let cadastroPessoa = {
    nome:'joão',
    cpf: '321.123.231-11',
    telefone: '99999-9999'
};
console.log(cadastroPessoa);
console.log(`cadastroPessoa.nome = ${cadastroPessoa.nome}`);