function init() {
  document.getElementById("subscribe").addEventListener("click", function(evnt) {
	evnt.preventDefault();
	alert("Thanks for Subscribing! Happy Learning!");
	});
};
  function incheck() {
    firstName = document.getElementById("fName").value;
    lastName = document.getElementById("lName").value;
    email = document.getElementById("emailId").value;
    phone = document.getElementById("phoneNum").value;
    dob = document.getElementById("BirthDate").value;
  
    if(!firstName || !lastName || !email || !phone || !dob) {
      alert("There are missing fields! Please fill all in all fields");
	  return false;
    }
}

function chckbox() {
  if(!document.getElementById("age-verification").checked) {
	alert("Please check that you are 18 or older");
	return false;
  }
  else if(!document.getElementById("crime-verification").checked) {
	alert("Please check that you won't commit any of these crimes");
	return false;
  }
  else {
	return true;
  }
}

window.addEventListener('load', init);
  
	