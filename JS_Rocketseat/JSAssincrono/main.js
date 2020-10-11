function checaIdade(idade) {
  return new Promise(function(resolve, reject){
     var yearsToRetire = [65 - idade, idade];
    if (idade > 18){
      resolve(yearsToRetire);
    } else {
      reject(yearsToRetire);
    }
  })
}
checaIdade(2)
  .then(function (yearsToRetire) {
    console.log(`Sua idade é ${yearsToRetire[1]}. Faltam ${yearsToRetire[0]} anos para você se aposentar`)
    console.log("Maior que 18");
  })
  .catch(function (yearsToRetire) {
    console.log(`Sua idade é ${yearsToRetire[1]}. Faltam ${yearsToRetire[0]} anos para você se aposentar`)
    console.log("Menor que 18");
  });

let inputElement = document.querySelector("input[name=user]");
let containerElement = document.querySelector("div#app");
let loadingElement = document.createElement("li");
let loadingText = document.createTextNode("Loading");
loadingElement.appendChild(loadingText);

function search(){
  userText = inputElement.value;
  console.log(userText);
  url = `https://api.github.com/users/${userText}/repos`
  console.log(url);

  containerElement.appendChild(loadingElement);

  axios.get(url).then(function(response){

    containerElement.removeChild(loadingElement);
    let listElement = document.createElement("li");
    let textOfListElement = document.createTextNode(userText);
    listElement.appendChild(textOfListElement);
    containerElement.appendChild(listElement);
    console.log(listElement);
    console.log(response);
    
  }).catch(function(error){
    
    containerElement.removeChild(loadingElement);
    alert("User not found")
    console.log(listElement);
    console.log(response);

    console.warn(error)
  })



  inputElement.value = "";
}