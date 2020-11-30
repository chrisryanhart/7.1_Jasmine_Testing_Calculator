//what's the most efficient way to minimize number of DOM variables?

window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");

  //how does the form if statement evaluate?
  if (form) {
    //gets the initial values. won't load again
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      console.log('entered click');

      //updates the new monthly payment
      update();

    });
  }
});


function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs                              
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const defaultAmount = document.getElementById('loan-amount').value = 1000;
  const defaultYears = document.getElementById("loan-years").value = 10;
  const defaultRate = document.getElementById("loan-rate").value =1;

  const defaultPayment = {amount: defaultAmount, years: defaultYears, rate: defaultRate};

  calculateMonthlyPayment(defaultPayment);

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const updatedInputs = getCurrentUIValues();
  calculateMonthlyPayment(updatedInputs);
  
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {

  //get loan values from form
  let P = values.amount;
  let yearlyInt = (values.rate)/100;
  let i = yearlyInt/12;
  let y = values.years;
  let n = y*12;

  let monthlyPayment = (P*i)/(1-(1+i)**(-n));
  let mPaymentRounded = monthlyPayment.toFixed(2);
  
  updateMonthly(mPaymentRounded);

  return mPaymentRounded;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPay = document.getElementById('monthly-payment')
  monthlyPay.innerText = `$${monthly}`;
}
