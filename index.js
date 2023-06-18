function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const getWinner = (applicants, winnerObject) => {
  const objKeys = Object.keys(winnerObject);
  const num = getRandomNumberInRange(0, objKeys.length);
  const links = Object.values(winnerObject);
  const winner = links[num];
  const out = {...applicants, ...winner};
  
  return out;
};

//---------callFunction--------
const todaysWinner = {
  prize: '10 000$',
}

const winnerApplicants = {
  '001': {
     name: 'Максим',
     age: 25,
  },
  '201': {
     name: 'Светлана',
     age: 20,
  },
  '304': {
     name: 'Екатерина',
     age: 35,
  },
}

const resultWinner = getWinner(todaysWinner, winnerApplicants);
console.log('resultWinner', resultWinner);