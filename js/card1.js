document.getElementById("DonateButton1").addEventListener("click", function(){

    let input1 = allInputValue("input1");
    let Balance = textData("balance")
    let cardAmount1 = textData("card-amount1");
  
    if(Balance<input1 || isNaN(input1) ||  input1<0){
        document.getElementById("DonateButton1").removeAttribute("onclick", "my_modal_5.showModal()")
        alert("Input value Wrong input Positive number");
        
        return ;
    }
    else{

        document.getElementById("modal1").setAttribute("href", "#my_modal_8");

        document.getElementById("exitModal").addEventListener("click", function(){
         document.getElementById("modal1").removeAttribute("href");
          
     });
        
       const totalDonation = cardAmount1 + input1;
       const remainingBalance = Balance-input1;
   document.getElementById("balance").innerText = remainingBalance;
   document.getElementById("card-amount1").innerText = totalDonation;

   let historySection = document.getElementById("history");
   let card1h2 = document.getElementById("card1-h2").innerText;
   

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
        <p class="text-2xl font-medium mb-4">${input1} Taka is ${card1h2} </p>
        <p class="">Date : ${day} ${month} ${dayNum} ${year} ${time} GMT +6600</p>
        
        `
        historySection.appendChild(div);  

    }
});