
document.addEventListener('DOMContentLoaded', america);

function america() {

		/*populates the state list */
		for (i = 0; i < usStates.length; i++) {
			var stateList = document.getElementsByName("state");
			var state = document.createElement("option");
			state.text = usStates[i].name;
			stateList[0].appendChild(state);
		}

		/* For exiting the page */
		var leavePage = document.getElementById("cancelButton");
		leavePage.addEventListener('click', exit);

		function exit() {
			var exit = window.confirm("Are you sure you want to leave this sexy page and go to google instead?");
			if (exit) {
				window.location.replace("https://www.google.com");
			}
		}

		/* For selecting "other" as an occupation */
		occupation.addEventListener('change', other);

		function other() { 
	        var newChoice = document.getElementsByName("occupationOther");
			var input = document.getElementById("occupation").value;
			if(input === "other") {
				newChoice[0].style.display = "inherit";
			} else {
	            newChoice[0].style.display = "none";
	        }
	    } 

	    function checkBirthday(date) {


	    }

	    function checkZip(zip) {

	    	
	    }
}