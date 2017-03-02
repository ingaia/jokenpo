Promise
    .resolve(['pedra', 'papel'])
    .then(require('./jogarJokenpo'))
    .then(console.log)
