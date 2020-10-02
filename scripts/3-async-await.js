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

const makeSmoothie3 = async () => {
  const a = getFruit('pineapple');
  const b = getFruit('strawberry');

  return Promise.all([a, b]);
};

const makeSmoothie4 = async () => {
  const a = getFruit('pineapple');
  const b = getFruit('strawberry');
  const smoothie = await Promise.all([a, b]);

  return smoothie;
};

const makeSmoothieWithErrHandling = async () => {

  try {

    const a = getFruit('pineapple');
    const b = getFruit('strawberry');
    const smoothie = await Promise.all([a, b]);

    throw 'broken!';

    return smoothie;

  } catch (err) {
    console.log(err)
    return 'catch: An error was thrown, but everything will be okay'
  }

};

makeSmoothieWithErrHandling().then(console.log)


// this does not work...
makeSmoothieWithErrHandling()
  .then(val => console.log({ val }))
  .catch(err => console.log({ err }))



getFruit('peach').then(console.log);

// makeSmoothie & makeSmoothie2 do exactly the same thing:
// it is very clear that async await is much easier to read
makeSmoothie().then(console.log);
makeSmoothie2().then(console.log);


module.exports = { getFruit, makeSmoothie, makeSmoothie2 };