//Begin with the document ready function
$(document).ready(function() {

});
//Checking account deposit function
function depositChecking() {

}
//On click of the depositChecking button
$('#depositChecking').on('click', function() {
  //Get value from the amountChecking input field
  var depositAmount = $('#amountChecking').val();
  var depositAmountNum = parseInt(depositAmount);
  //Take that value and add it to the existing value in the checkingBalance div
  var currentAmount = $('#checkingBalance').text().replace('$', '');
  var currentAmountNum = parseInt(currentAmount);
  var newTotal = depositAmountNum + currentAmountNum;

  $('#checkingBalance').text('$' + newTotal);
  console.log(newTotal);
})


//Checking account withdrawl function
function withdrawChecking() {

}
//On click of the withdrawChecking button
$('#withdrawChecking').on('click', function() {
  //Get value from the amountChecking input field
  var withdrawAmount = $('#amountChecking').val();
  console.log(withdrawAmount);
  var currentAmount = $('#checkingBalance').text().replace('$', '');
  var currentAmountNum = parseInt(currentAmount)
    // If that value is greater than the value in the account ignore that action


  if (withdrawAmount > currentAmountNum) {
    alert('Wtf dude')
  } else {
    //Else subtract that value from the current amount in the checking account
    // !!!Math for checking acct when going between deposit and withdrawl!!
    alert('ball out')
  }
  // In other words if this would put the account into a negative balance do not allow it
})


//Savings account deposit function
function depositSavings() {

}
//On click of the depositSavings button
$('#depositSavings').on('click', function() {
  var savingsDeposit = $('#amountSavings').val();
  var savingsDepositNum = parseInt(savingsDeposit);
//Take that value and add it to the existing value in the savingsBalance div
  var currentAmount = $('#savingsBalance').text().replace('$', '');
  var currentAmountNum = parseInt(currentAmount);
  var newTotal = savingsDeposit + savingsDepositNum;

  $('#savingsBalance').text('$' + newTotal);
  console.log(newTotal);

})

//Savings account withdraw funtion
function withdrawSavings() {

}
//On click of the withdrawl button
$('#withdrawSavings').on('click', function() {
  //Get value from the amountSavings input field
  var withdrawAmount = $('#amountSavings').val();
  console.log(withdrawAmount);
  var currentAmount = $('#savingsBalance').text().replace('$', '');
  var currentAmountNum = parseInt(currentAmount)

  if (withdrawAmount > currentAmountNum) {
    alert('Wtf dude')
  } else {
    alert('ball out')
  }

})

//If that value is greater than the value in the account ignore that action
//In other words if this would put the account into a negative balance do not allow it

//Else subtract that value from the current amount in the savings account

// Bonus-- get the two accounts to work with each other and allow for overdraft protection

// Double Bonus-- This isnt very DRY.  Using the keyword "this" see if you can make the withdraw and deposit functions work for both accounts
