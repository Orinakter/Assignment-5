document.getElementById("DonateButton3").addEventListener("click", function(){

    let input = allInputValue("input3");
    let Balance = textData("balance")
    let cardAmount = textData("card-amount3");

    if(Balance>input || !isNaN(input) || input>0){
        document.getElementById("DonateButton3").setAttribute("onclick", "my_modal_5.showModal()")
    }
    else{
        document.getElementById("DonateButton3").removeAttribute("onclick", "my_modal_5.showModal()")
    }

    if(Balance<input || isNaN(input) ||  input<0){
        alert("Input value Wrong input Positive number");
        return ;
    }
    else{
       
       let totalDonation = cardAmount + input;
       let remainingBalance = Balance-input;
   document.getElementById("balance").innerText = remainingBalance;
   document.getElementById("card-amount3").innerText = totalDonation;

   let historySection = document.getElementById("history");
   let card3h2 = document.getElementById("card3-h2").innerText;
   
   const date = new Date;
   const day = date.toDateString().split(' ')[0];
   const month = date.toDateString().split(' ')[1];
   const dayNum = date.getDate();
   const year = date.getFullYear();
   const time = date.toTimeString().split(' ')[0]; 
  

   
   let div = document.createElement("div");
   div.classList.add("border-2");
   div.classList.add("rounded-xl");
   div.classList.add("p-4");

   div.innerHTML = `
        <p class="text-2xl font-medium mb-4">${input} Taka is ${card3h2} </p>
        <p class="">Date : ${day} ${month} ${dayNum} ${year} ${time} GMT +6600</p>
        
        `
        historySection.appendChild(div);


    }
      
});