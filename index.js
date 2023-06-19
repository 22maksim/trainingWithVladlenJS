const peopleWithVisa = [
  {
      firstName: 'Stasia',
      lastName: 'Ward',
      criminalRecord: true,
      passportExpiration: '19.06.2040',
  },
  {
      firstName: 'Elliot',
      lastName: 'Baker',
      criminalRecord: false,
      passportExpiration: '04.06.2041',
  },
  {
      firstName: 'Leighann',
      lastName: 'Scott',
      criminalRecord: true,
      passportExpiration: '31.07.2039',
  },
  {
      firstName: 'Nick',
      lastName: 'Pop',
      criminalRecord: false,
      passportExpiration: '31.12.2010',
  },
];

function allowVisa(withoutKillers) {
  let actualDate = new Date();
  actualDate = Date.parse(actualDate);
  let withoutCriminal = withoutKillers.filter(item => item.criminalRecord !== true);
  let answer = withoutCriminal.filter(item => {
    let pars = item.passportExpiration.split('.');
    pars = [pars[2], pars[1], pars[0]].join('-');
    pars = new Date(pars);
    pars = Date.parse(pars);
    if (pars < actualDate) {
      return pars
    } else {
      false
    }
  })
  return answer;
}
 
const result = allowVisa(peopleWithVisa);
console.log('result', result);