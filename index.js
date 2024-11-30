
function capitalize(str) {
    if (typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function reverse(str) {
    if (typeof str !== 'string') return '';
    return str.split('').reverse().join('');
  }
  

  module.exports = {
    capitalize,
    reverse,
  
  };
  