let transfer = document.getElementById("transfer");
let airtime = document.getElementById("airtime");
let balance = document.getElementById("balance");

const defaultPassword = "1234";

// TRANSFER, this method handles USSD TRANSFER;
const transferMoney = () => {
  let count = 3;
  let bank = prompt(
    "Choose Beneficiary's Bank \n 1. GTB \n 2. Second Bank \n 3. Access"
  );
  let recieverAccountNumber = prompt("Enter Account Number");
  let amount = prompt("Enter Amount");
  alert(
    "you are about to transfer " + "#" + amount + " to " + recieverAccountNumber
  );
  let pin = prompt("Enter your pin");
  if (pin === defaultPassword) {
    alert(
        `You have successfully transfered #${amount} to ${recieverAccountNumber}`
      );
  } else {
    while (count > 0 || pin !== defaultPassword) {
      if (pin === defaultPassword) {
        alert(
            `You have successfully transfered #${amount} to ${recieverAccountNumber}`
          );
        break;
      } else if (count == 0) {
        alert("Too many attemps, Transaction cancelled");
        break;
      } else {
        pin = prompt(
          `Incorrect password, try again. you have ${count} attempt left`
        );
        count--;
      }
    }
  }
};

//BuyAIRTIME, this function handles airtime purchase;
const buyAirtime = () => {
  let count = 3;
  let network = prompt("Select Network \n 1. MTN \n 2. GLO \n 3. AIRTEL");
  switch (network) {
    case "1":
      network = "MTN";
      break;
    case "2":
      network = "GLO";
      break;
    case "3":
      network = "AIRTEL";
      break;
    default:
      network = "MTN";
  }
  let number = prompt("Enter Receiver Mobile Number");
  let amount = prompt("Enter Card Amount");
  let confirmPin = prompt("Confirm your pin to continue");
  if (confirmPin === defaultPassword) {
    alert(
      `You have succesfully purchased #${amount} ${network} airtime for ${number}`
    );
  } else {
    while (count > 0 || confirmPin !== defaultPassword) {
      if (confirmPin === defaultPassword) {
        alert(
          `You have succesfully purchased #${amount} ${network} airtime for ${number}`
        );
        break;
      } else if (count == 0) {
        alert("Too many attemps, Transaction cancelled");
        break;
      } else {
        confirmPin = prompt(
          `Incorrect password, try again. you have ${count} attempt left`
        );
        count--;
      }
    }
  }
};

// checkBalance, this method is called when user clicked on Balance button;
const checkBalance = () => {
  alert("Your account balance is #10,000");
};

transfer.addEventListener("click", transferMoney);
airtime.addEventListener("click", buyAirtime);
balance.addEventListener("click", checkBalance);
