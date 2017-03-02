#! /usr/bin/env node
const prompt = require('prompt-promise');

const movimentos = [];

Promise.resolve()
    .then(() =>
        prompt('Movimento do jogador 1: ')
            .then(movimento => movimentos.push(movimento))
    )
    .then(() =>
        prompt('Movimento do jogador 2: ')
            .then( movimento => movimentos.push(movimento))
    )
    .then(()=> movimentos)
    .then(require('./jogarJokenpo'))
    .then(require('./respostasDeResultados'))
    .then(console.log)
    .catch(e => console.log(e.message))
    .then(process.exit)
