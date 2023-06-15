const answer12 = 4,
      answer3 = 1,
      answer4 = 12,
      answer5 = 6;
const question1 = +prompt('Сколько будет 2 + 2?', 'введите ответ цифрами');
const question2 = +prompt('Сколько будет 2 * 2?', 'введите ответ цифрами');
const question3 = +prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось', 'введите ответ цифрами');
const question4 = +prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?', 'введите ответ цифрами');
const question5 = +prompt('Сколько будет 2 + 2 * 2?', 'введите ответ цифрами');
let correctAnswers = 0;
let incorrectAnswers = 0;

if(answer12 === question1) {
  correctAnswers++;
}else{incorrectAnswers++}
if(answer12 === question2) {
  correctAnswers++;
}else{incorrectAnswers++}
if(answer3 === question3) {
  correctAnswers++;
}else{incorrectAnswers++}
if(answer4 === question4) {
  correctAnswers++;
}else{incorrectAnswers++}
if(answer5 === question5) {
  correctAnswers++;
}else{incorrectAnswers++};

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`);