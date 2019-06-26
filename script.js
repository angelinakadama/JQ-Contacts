$(document).ready(function(){
var saveContact=() => {
	var first_name=document.querySelector("#FirstName").value;
	var second_name=document.querySelector("#SecondName").value;
	var phone_number=document.querySelector("#PhoneNumber").value;
	var email=document.querySelector("#EmailAddress").value;
//create a contact object using the constructor
var newcontact = [first_name,second_name,phone_number,email];
//save the contacts
contacts.push(newcontact);
//print an array of contacts.
//console.log(contacts);
console.log("saved successfully");
}

// console.log(contacts[0].phone_number);}
//console.log(contacts[0].first_name)
function search_function()

{
	var phrase = document.querySelector("#search_phrase").value;

	for (var i = 0; i<contacts.length; i++)
                                                                                 	{
		var contact = contacts[i];
		if(contact[0].includes(phrase)){
		 // console.log(contacts);

		 document.getElementById("result").innerhtml=""
		}
	    
        else
	    
	    {
      	console.log("Oops not found");}