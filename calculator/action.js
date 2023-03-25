
const display = document.getElementById("display");

//commands
function show(arg_value){
    display.value += arg_value;
}

function symbol(arg_operator){
  
  var reg = new RegExp(/^\d+$/);
  var num = display.value;

  if(num.length>1){
      num = num.charAt(num.length - 1);
  }

  if (reg.test(num))
  {
    display.value += arg_operator;
  }
}
