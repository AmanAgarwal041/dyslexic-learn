
function generateUID() {
  let first = (Math.random() * 2048) | 0;
  let second = (Math.random() * 2048) | 0;
  first = ('000' + first.toString(32)).slice(-3);
  second = ('000' + second.toString(32)).slice(-3);
  return first + second;
}