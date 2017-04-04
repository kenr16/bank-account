//Back-end
function BankAccount(name, initDeposit) {
  this.name = name;
  this.initDeposit = initDeposit;
}

BankAccount.prototype.deposit = function(amount) {
  this.initDeposit += amount;
}

BankAccount.prototype.withdrawal = function(amount) {
  this.initDeposit -= amount;
}

// function User (bankAccount) {
//   this.bankAccount = bankAccount;
// }
//
// User.prototype = {
//   deposit: function(amount) {
//   this.bankAccount.balance += amount;
// },
//   withdrawal: function(amount) {
//     this.bankAccount.balance -= amount;
//   }
// }
// function BankAccount(balance) {
//   this.balance = balance;
// }
//
// var createAccount = function(name, initDeposit){
//   return new User(name, new BankAccount(initDeposit));
// }

var testFunction = function(userInput) {
  return ! /[^\d]/gi.test(userInput);
}
//returns true if numbers are typed in.

var newAccount = new BankAccount("Placeholder", 0);

//Front-End



$(function(){
  $("#accountForm").submit(function(e){
    e.preventDefault();
    var nameInput = $("#name").val();
    var initDeposit = parseFloat($("#initDeposit").val()).toPrecision(3);
    if (testFunction(initDeposit)) {
      alert("Account created!");
      newAccount.name = nameInput;
      newAccount.initDeposit = initDeposit;
      $("#output").text(newAccount.initDeposit);
      $("#name").val("");
      $("#initDeposit").val("");
    }
  });

  $("#transactionForm").submit(function(e){
    e.preventDefault();
    var userDeposit = parseFloat($("#depositForm").val());
    if (testFunction(userDeposit)) {
      alert("deposit activated!");
      var output2 = newAccount.deposit(userDeposit);
      $("#output").text(output2);
    }

    var userWithdrawal = parseFloat($("#withdrawalForm").val()).toPrecision(3);
    if (testFunction(userWithdrawal)) {
      alert("withdrawal activated!");
      var output = newAccount.withdrawal(userWithdrawal)
      $("#output").text(output);

    }
  });

//Button animation
   $(".mouse").mouseover(function() {
         var dWidth = $(document).width() - 100, // 100 = image width
             dHeight = $(document).height() - 100, // 100 = image height
             nextX = Math.floor(Math.random() * 400),
             nextY = Math.floor(Math.random() * 400);
         $(this).animate({ left: nextX + 'px', top: nextY + 'px' });
     });
});
