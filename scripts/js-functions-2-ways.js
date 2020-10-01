const tick = Date.now();

const log = (msg) => console.log(`${msg} \n Elapsed: ${Date.now() - tick}ms`);

function logFunction(msg) {
  console.log(`${msg} \n Elapsed: ${Date.now() - tick}ms`);
}


// Run test code below:

log('🥪 Synchronous 1');

logFunction('🥪 Synchronous 2');