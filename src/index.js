module.exports = function check(str, bracketsConfig) {
  var brackets = [];
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < bracketsConfig.length; j++) {
      if(bracketsConfig[j][0] === bracketsConfig[j][1] && bracketsConfig[j][1] === str[i]) {
        if(str[i] === brackets[brackets.length - 1]) {
          brackets.pop();
        } else 
        brackets.push(str[i]);
        } else {
        if (str[i] === bracketsConfig[j][0])
        brackets.push(str[i]);
        if ((str[i] === bracketsConfig[j][1]) && (brackets[brackets.length - 1] === bracketsConfig[j][0]))
        brackets.pop();
      }
    }
  }
return brackets.length === 0;
}