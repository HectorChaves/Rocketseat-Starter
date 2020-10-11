import axios from "axios";

// const delay = () => new Promise(resolve => setTimeout(() => {resolve("ok")}, 5000));

// async function umPorSegundo() {
//   console.log(await delay());
//   console.log(await delay());
// }

// umPorSegundo();

// Funão delay aciona o .then após 1s
// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

// function umPorSegundo() {
//  delay().then(() => {
//  console.log('1s');
//  delay().then(() => {
//  console.log('2s');
//  delay().then(() => {
//  console.log('3s');
//  });
//  })
//  });
// }
// umPorSegundo();

// Funão delay aciona o .then após 1s
// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
// async function umPorSegundo() {
//   await delay();
//   console.log("1s");
//   await delay();
//   console.log("2s");
//   await delay();
//   console.log("3s");
// }
// umPorSegundo();

// function getUserFromGithub(user) {
//   axios
//     .get(`https://api.github.com/users/${user}`)
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((err) => {
//       console.log('Usuário não existe');
//     });
// }
// getUserFromGithub('diego3g');
// getUserFromGithub('diego3g124123');

// async function getUserFromGithub(user) {
//   try{
//     const response = await axios.get(`https://api.github.com/users/${user}`);
//     console.log(response.data);
//   } catch {
//       console.warn('Usuário não existe');
//   }
// }

// getUserFromGithub('diego3g');
// getUserFromGithub('diego3g124123');

// class Github {
//   static getRepositories(repo) {
//     axios
//       .get(`https://api.github.com/users/${repo}`)
//       .then((response) => {
//         console.log(response.data);
//       })
//       .catch((err) => {
//         console.log('Repositório não existe');
//       });
//   }
// }
// Github.getRepositories('rocketseat/rocketseat.com.br');
// Github.getRepositories('rocketseat/dslkvmskv');
// Github.getRepositories('diego3g');

// class Github {
//   static async getRepositories(repo) {
//     try{
//     const response = await axios.get(`https://api.github.com/users/${repo}`)
//     console.log(response.data);
//     } catch {
//     console.warn('Repositório não existe');
//     };
//   }
// }

// async function getAll(){
// await Github.getRepositories('rocketseat/rocketseat.com.br');
// await Github.getRepositories('rocketseat/dslkvmskv');
// await Github.getRepositories('diego3g');
// }

// getAll();