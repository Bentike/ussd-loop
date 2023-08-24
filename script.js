alert("Welcome to Second Bank");
let ussdCode = prompt("Enter ussd Code");

let option = prompt("what do you want to do \n 1. Tranfers \n 2. Airtime \n 3. Balance");

// TRANSFER. 
if(option === "1"){
    let bank = prompt("Choose Beneficiary's Bank \n 1. GTB \n 2. Second Bank \n 3. Access");
    let recieverAccountNumber = prompt("Enter Account Number");
    let amount = prompt("Enter Amount");
    alert("you are about to transfer " + "#" + amount + " to " + recieverAccountNumber);
    let pin = prompt("Enter your pin");
    alert(`You have successfully transfered #${amount} to ${recieverAccountNumber}`);
}else if(option === "2"){

}

// AIRTIME.
if(option === "2"){
    let network = prompt("Select Network \n 1. MTN \n 2. GLO \n 3. AIRTEL");
    switch(network){
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
    alert(`You have succesfully purchased #${amount} ${network} airtime for ${number}`);
}

// CHECK BALANCE
option === "3" ? alert("Your account balance is #10,000") : "";