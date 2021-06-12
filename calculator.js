function sum(a, b) {
  if (typeof a === 'number' && b === undefined){
    return a + 0;
  }else if (a === undefined ){
    return 0;
  } else {
  return a + b;
}}

function subtract(a, b) {
  if( typeof a ===  "number" && b === undefined) {
    return a - 0 ;
  }else if( a === undefined && b === undefined){
    return 0
  }else if( a === undefined && typeof b ===  "number" ){
    return 0 - b ;
  }else if(parseFloat(a) && parseFloat(b)){
    return parseFloat(a - b);
  }else if (parseFloat(a) || parseFloat(b)){
    return parseFloat(a - b);
  }else{
    return a - b
  }
    
  }


function divide(a, b) {
 if(typeof a ===  "number" && b === 0 ){
  throw ("You cannot divide by 0");
}else if(parseFloat(a) && parseFloat(b)){
    return parseFloat(a /  b);
  }else if (parseFloat(a) || parseFloat(b)){
    return parseFloat(a / b); }
 else{
  return a / b;
  }
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
