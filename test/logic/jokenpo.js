const assert = require('assert')

describe('Jogar Jokenpo', () => {
  const jogarJokenpo = require('../../logic/jokenpo/jogar.js');
  it('jogador 1 ganha', () => {
    assert.equal(jogarJokenpo('pedra', 'tesoura'), 1);
    assert.equal(jogarJokenpo('tesoura', 'papel'), 1);
    assert.equal(jogarJokenpo('papel', 'pedra'), 1);
  });

  it('jogador 2 ganha', () => {
    assert.equal(jogarJokenpo('tesoura', 'pedra'), 2);
    assert.equal(jogarJokenpo('papel', 'tesoura'), 2);
    assert.equal(jogarJokenpo('pedra', 'papel'), 2);
  });

  it('empate', () => {
    assert.equal(jogarJokenpo('pedra', 'pedra'), 0);
    assert.equal(jogarJokenpo('tesoura', 'tesoura'), 0);
    assert.equal(jogarJokenpo('papel', 'papel'), 0);
  });
});
