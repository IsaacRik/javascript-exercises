const ftoc = function(temp) {
  temp= (((temp -32)*5)/9);
  temp = temp.toFixed(1);
  return temp;
};

const ctof = function(temp) {
  temp = (temp *1.8) + 32;
  temp = temp.toFixed(1);
  return temp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
