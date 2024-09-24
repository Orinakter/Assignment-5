function changePage(id){
    document.getElementById("donation").classList.add("hidden");
    document.getElementById("history").classList.add("hidden");
  
    document.getElementById(id).classList.remove("hidden"); 
  };



  function textData (id){
    let TextInner = document.getElementById(id).innerText;
    let TextNumber = parseFloat(TextInner);
  
    return TextNumber;
  };

  function allInputValue (id){
    let value = document.getElementById(id).value;

    for (let x=0; x<value.length; x++){
      console.log(value[x])
      if(isNaN(value[x])){
            return;
          }
    }

    const NumberValue = parseFloat(value);

    return NumberValue;
  }