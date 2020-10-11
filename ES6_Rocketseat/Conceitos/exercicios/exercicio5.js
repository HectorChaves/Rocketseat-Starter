const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x);
console.log(y);


function soma(...params){
  const value = params.reduce((total, cur) => {
    return total + cur;
  })
  return value;
}

console.log(soma(1, 2, 3, 4, 5, 6)); 
console.log(soma(1, 2));