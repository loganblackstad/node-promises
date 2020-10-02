// Basic
const getFruit = async name => {
  const fruits = {
    pineapple: 'pineapple',
    peach: 'peach',
    strawberry: 'strawberry'
  };

  return fruits[name];
};


// Async + Await

const makeSmoothie = async () => {
  const a = await getFruit('pineapple');
  const b = await getFruit('strawberry');

  return [a, b];
};

const makeSmoothie2 = () => {
  let a;
  return getFruit('pineapple')
    .then(funcArg => {
      a = funcArg;
      return getFruit('strawberry');
    })
    .then(funcArg2 => [a, funcArg2]);
};


getFruit('peach').then(console.log);

// makeSmoothie & makeSmoothie2 do exactly the same thing:
// it is very clear that async await is much easier to read
makeSmoothie().then(console.log);
makeSmoothie2().then(console.log);