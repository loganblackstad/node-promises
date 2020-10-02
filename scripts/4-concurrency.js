// import { getFruit } from './3-async-await';

const { log } = require('./2-create-promise.js')
const { getFruit } = require('./3-async-await.js')

const makeSmoothieFaster = async () => {
    const a = getFruit('pineapple');
    const b = getFruit('strawberry');

    const smoothie = await Promise.all([a, b])

    return smoothie;
}


const fruitRace = async () => {
    const a = getFruit('pineapple');
    const b = getFruit('strawberry');

    const winner = await Promise.race([a, b])

    return winner;
}

makeSmoothieFaster().then(log)
fruitRace().then(log)
// fruitRace().then(log)
// fruitRace().then(log)
// fruitRace().then(log)
// fruitRace().then(log)
