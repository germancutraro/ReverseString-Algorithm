// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return [...str].reduce((accum, current) => current + accum, '');
}

module.exports = reverse;

/*  * Others Solutions * */

// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// function reverse(str) {
//   let reversed = '';
//   Array.from(str, l => reversed = l + reversed);
//   return reversed; 
// }


