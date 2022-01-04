module.exports = function reverse (n) {
  let numb = String(n).slice(-3);
  let number = numb.split('').reverse().join('');
  return +number;
}
