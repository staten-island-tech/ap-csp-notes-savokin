//get bill input
const tipForm = document.getElementById("tip-form"); //global scope
const resetter = document.getElementById("resetter");
tipForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let billAmount = Number(document.querySelector("#bill-amount").value); //scoped to functionm, function scoped
  let tipPercentage = Number(document.querySelector("#tip-amount").value);
  //do some math for the tip
  //do some math for tip plus bill
  const tipAmount = document.querySelector("#final-tip");
  const total = document.querySelector("#total");
  //get tip percentage
  //process the values (actual calulations) get the tip
  let FTip = parseFloat(billAmount * (tipPercentage*.01));

  let calc_total = parseFloat(FTip + billAmount);
  
  //display to the user
  tipAmount.innerHTML = `Tip : ${FTip.toFixed(2)}`;
  total.innerHTML = `Total : ${calc_total}`;

  tipForm.addEventListener("reset", function(f){
    
    tipAmount.innerHTML = '';
    total.innerHTML = '';
  });
  
  
});


//reset the calculator
