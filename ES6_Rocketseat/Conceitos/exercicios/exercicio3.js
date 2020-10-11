// 3.1
const arr = [1, 2, 3, 4, 5];
console.log(arr.map((item) => {
 return item + 10;
}));


// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = (usuario) => {
  return usuario.idade;
}
console.log(mostraIdade(usuario));

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Jureg";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => {
  return { nome, idade };
}
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));
console.log(mostraUsuario());

// 3.4
const promise = () => {
  return new Promise(function (resolve, reject) {
    return resolve("Tudo ok");
  })
}

promise().then(function(response){
  console.log(response)
});

''
