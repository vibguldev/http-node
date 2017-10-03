const square = (num) => {
  if(typeof(num) !== 'number')
    return 'ERROR'
  return num*num;
}

module.exports = square