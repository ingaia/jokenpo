module.exports = ([p1, p2]) => {
  if(p1 === p2) return 0;

  const possibleHands = ['pedra', 'tesoura', 'papel'];

  const p1Index = possibleHands.indexOf(p1);
  const p2Index = possibleHands.indexOf(p2);

  if(p1Index === -1 || p2Index === -1)
    return Promise.reject(Error('Movimento não existe'))

  let winner = 0;

  if(p1Index === 0 && p2Index === 2) winner = 2;
  else if( p1Index < p2Index || (p1Index === 2 && p2Index === 0) ) winner = 1;
  else winner = 2;

  return winner;
}
