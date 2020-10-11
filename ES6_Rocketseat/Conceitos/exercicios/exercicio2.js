const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];


const ages = usuarios.map((user) =>{
  return user.idade
})
console.log(ages);
console.log("");

const ageEighteen = usuarios.filter((user) =>{
  return (user.idade > 18) && (user.empresa === "Rocketseat");
});
console.log(ageEighteen);
console.log("");

const worker = usuarios.find((user) => {
  return (user.empresa === "Rocketseat");
});
console.log(worker);
console.log("");

// const newAges = usuarios.map((user) => {
//   return {nome: user.nome, idade: user.idade * 2, empresa: user.empresa};
// }).filter((user) => {
//   return user.idade < 50;
// });
// console.log(newAges);
// console.log('');

const newAges = usuarios.map((user) => {
  return {...user, idade: (user.idade * 2)};
}).filter((user) =>{
  return user.idade < 50;
})
console.log(newAges);
console.log('');