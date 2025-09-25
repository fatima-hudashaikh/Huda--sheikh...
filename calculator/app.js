 function setnumber(num) {
      var inputResult = document.getElementById("inputResult");
      var lastval = inputResult.value.slice(-1);

      var operator = ["+","*","-","/","%"];
      if (operator.includes(lastval) && operator.includes(num)) {
        
        inputResult.value = inputResult.value.slice(0,-1) + num;
      } else {
        inputResult.value += num;
      }
    }

    function del() {
      var inputResult = document.getElementById("inputResult");
      inputResult.value = inputResult.value.slice(0,-1);
    }

    function clc() {
      document.getElementById("inputResult").value = '';
    }

    function getResult() {
      var getResult = document.getElementById("inputResult");
      try {
        getResult.value = eval(getResult.value);
      } catch (e) {
        getResult.value = "Error";
      }
    }