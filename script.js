let tipAmount = document.getElementById("tip-amt");
let total = document.getElementById("total");
let noOfPeople = document.getElementById("noofpeople");
let tipPercentage = document.getElementsByClassName("tipPercent");
let bill = document.getElementById("bill");
let custom = tipPercentage[5];
let percent=0;
console.log(custom);
bill.addEventListener('keyup',function(){
    calculateTip();
})

noOfPeople.addEventListener('keyup',function(){
    calculateTip();
})

custom.addEventListener('keyup', function () {
     percent=custom.value;
    calculateTip();
})

for (let i = 0; i < tipPercentage.length ; i++) {

    tipPercentage[i].addEventListener("click", function () {
        for (let i = 0; i < tipPercentage.length ; i++){
            tipPercentage[i].classList.remove("selected");
        }
    tipPercentage[i].classList.toggle("selected");
    var per = tipPercentage[i].textContent.substring(
              0,
              tipPercentage[i].textContent.length - 1
           );
    percent=parseInt(per);
    calculateTip();
    })
    
}

function calculateTip(){
    let billAmount=bill.value;
    let noOfPeopleValue=noOfPeople.value;
    let tip = parseFloat(((billAmount * percent) / 100)/noOfPeopleValue);
    
    let splitValue = (billAmount / noOfPeopleValue) + tip;
    tipAmount.innerHTML = `$${tip.toFixed(2)}`;
    total.innerHTML = `$${splitValue.toFixed(2)}`;
}


let reset = document.getElementById("resetbtn");
 resetbtn.addEventListener("click", function () {
   tipAmount.innerHTML = `$0`;
   total.innerHTML = `$0`;
   for (let i = 0; i < tipPercentage.length ; i++){
    tipPercentage[i].classList.remove("selected");
}

});


