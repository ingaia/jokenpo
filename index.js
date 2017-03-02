const jogarJokenpo = require('./jogarJokenpo');

Promise
    .resolve(['pedra', 'papel'])
    .then(jogarJokenpo)
    .then(console.log)
