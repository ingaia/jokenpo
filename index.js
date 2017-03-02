Promise
    .resolve(['pedra', 'papel'])
    .then(require('./jogarJokenpo'))
    .then(require('./respostasDeResultados'))
    .then(console.log)
    .catch(e => console.log(e.message))
