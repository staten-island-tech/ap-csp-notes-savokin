//get bill input
const tipForm = document.getElementById("tip-form"); //global scope

tipForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const billAmount = Number(document.querySelector("#bill-amount").value); //scoped to functionm, function scoped
  const tipPercentage = Number(document.querySelector("#tip-amount").value);
  //do some math for the tip
  //do some math for tip plus bill
  const tipAmount = document.querySelector("#final-tip");
  tipAmount.innerHTML = 
  //reset the calculator
});

//get tip percentage

//process the values (actual calulations) get the tip

//display to the user
