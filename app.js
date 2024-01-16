
function getvalue(e) {
  var getInp = document.getElementById("getInp");
  getInp.value += e;
}

function clearInput() {
    document.getElementById("getInp").value = '';
    }

    function calculateResult(){
var getInp = document.getElementById("getInp");
getInp.value=eval(getInp.value)
    }





