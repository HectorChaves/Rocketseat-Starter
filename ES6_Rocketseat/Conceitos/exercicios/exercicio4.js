const empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  }
};

// const {nome, endereco: {cidade, estado}} = empresa

const { nome, endereco } = empresa;
const { cidade, estado } = endereco;

console.log(nome); 
console.log(cidade); 
console.log(estado); 




// function mostraInfo(usuario) {
//   return `${usuario.nome} tem ${usuario.idade} anos.`;
// }
// console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

function mostraInfo({nome, idade}) {
  return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

