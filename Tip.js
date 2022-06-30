'use strict'
let form = document.getElementById('form');


let bill = document.getElementById('Bill'); 
let tipAmount = document.getElementById('tipAmount'); 
let customers = document.getElementById('Customers');
let tipPerPerson = document.getElementById('tipPerPerson'); 
let totalAmountPerPerson = document.getElementById('finalPerPerson');
let reset = document.getElementById('reset');


class Forms {
    constructor(bill, tipAmount, customers) {
        this.bill = bill;
        this.tipAmount = tipAmount;
        this.customers = customers;
    }
}


form.addEventListener("submit", function (event) {
	
	event.preventDefault();
	
	let totalBill = parseFloat(bill.value); 


	let tip = parseInt(tipAmount.value); 

	let customer = parseInt(customers.value);
	let Forms = new Forms(totalBill, tip, customer); 

	window.localStorage.setItem('form', JSON.stringify(Forms));
	


	calculate(Forms.bill, Forms.tipAmount, Forms.customers);
});


let calculate = (bill, amount, customers) =>{
    let percentage = (amount / 100) * bill;



let billPerPerson = percentage / customers;
let total = bill / customers + billPerPerson;

total = total.toFixed(2);

	showResults(billPerPerson.toFixed(2), total)
}


function showResults(tip, total) {
	tipPerPerson.innerHTML = tip; 

	totalAmountPerPerson.innerHTML = total;



}


function clearReset() {
	totalAmountPerPerson.innerHTML = '0.00';
	tipPerPerson.innerHTML = '0.00'; 
	Forms.reset();  
	window.localStorage.clear();


}


reset.addEventListener('click', function () {
	clearReset(); 

})
