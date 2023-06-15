const javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.';
let num = Math.floor((javaScriptDescription.length - 1) / 2);
let newString = javaScriptDescription.slice(0, num).replaceAll('a', 'A').replaceAll('а', 'А').split(' ').join('');
newString = newString + newString + newString;
console.log((newString[num]), newString);