function checkFive(num) {
    let result = '';
    if (num < 5) {
      result = num + ' is less than 5.';
    } else if (num === 5) {
      result = num + ' is equal to 5.';
    } else {
      result = num + ' is greater than 5.';
    }
  
    return result;
  }


  function getWinner(guess1, guess2) {
    if(guess1 === guess2) {
      return 'TIE'
    }
  }
  module.exports = checkFive;