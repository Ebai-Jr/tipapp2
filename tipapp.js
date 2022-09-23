window.onload = () =>
	//the function called when Calculate button is clicked.
	{
		/*calling a function calculatetotaltip
		which will calculate the totaltip for the bill. or you can go to the html 
		and set the onclick action to the name of the function*/
        document.querySelector('#calculate').onclick = calculatetotaltip;
	}

function calculatetotaltip() {
    /*assign values of ID : amount, person, custom and service to
    variables for further calculations.*/
    let amount = Number(document.querySelector('#amount').value);
    let persons = Number(document.querySelector('#persons').value);
    let service = Number(document.querySelector('#services').value);
	let custom = document.querySelector('#custom').value;
    
	if (custom === '' && service !== '') {
		totaltip = Number((amount * service).toFixed(2));
	}
	else{
		totaltip = Number(amount * (custom/100).toFixed(2));; 
	}
	// use this if u dont want to include the if/else above ie you don't want to use the custom field
	// let totaltip = Number((amount * service).toFixed(2));
    
	//Now display the calculated values
	document.querySelector('.totaltip').style.display = 'block';
	document.querySelector('#totaltip').innerHTML = totaltip;
	const totalbill = document.querySelector('#totalbill');
    const billperperson = document.querySelector('#billperperson')

    totalbill.innerText = amount + totaltip;

    billperperson.innerText = (amount + totaltip) / persons;
    
    total.innerText = (totaltip) / persons;

	// not needed!!! just checking data types of the elements 
    console.log(amount)
	console.log(custom)
    console.log(totaltip)
    console.log(typeof totaltip)
    console.log(typeof totalbill)
	
} 
