import { createTable, createDiv, createParagraph } from './DOMFunction.js'
import { getCookie } from './cookieFunction.js'

// Redirect to login if missing cookie with name 'id_token'
export function authenticate() {
	let cookieVal = getCookie("id_token")
	let client_id = "2fior6770hvto4u6kuq084j7fu";
	let redirect_uri = "http://localhost:3000";
	if (cookieVal == ""){
		let loginUrl = `https://cognito-dev.calpoly.edu/login?response_type=token&` +
		`client_id=${client_id}&redirect_uri=${redirect_uri}`;

		window.location = loginUrl
	} else if ((new Date(cookieVal.expDate) - new Date())/60000 <= 30) {
      let update_url = `https://cognito-dev.calpoly.edu/oauth2/authorize?` +
		 `response_type=token&client_id=${client_id}&redirect_uri=${redirect_uri}`
         console.log("update_url")
         window.location = update_url;
	}
}

export function protectedContent(){
	console.log("inside protectedContent()");

	authenticate();
	let id_token = getCookie('id_token').value;

	createParagraph("display", "contentItems");
	createTable("petsTable", "contentItems");

	document.getElementById("display").innerHTML = "<h2>PROTECTED CONTENT " +
	"ACCESS GRANTED</h2><br><h4> You can now view and buy pets</h4>";

	let dispTblPet = document.getElementById("petsTable");
	var url = "https://api-dev.calpoly.edu/pets";

	const headers = new Headers();
	headers.append('Content-Type', 'application/json');
	headers.append('Authorization', `Bearer ${id_token}`);

	// make request to get the protected data
	fetch(url, {headers: headers, mode : 'cors'}).then(function(response){
		return response.json();
	})
	.then(function(petsJson){

		var keys = Object.keys(petsJson);
		var petKeys = Object.keys(petsJson[0]);
		var key
		for(key in keys) {
			if(key){
				var petJson = petsJson[key]

				var row = dispTblPet.insertRow();
				row.className = "tBodyRow"
				var petKey
				for(petKey in petKeys) {
					if(petKey) {
						var keyName = petKeys[petKey]
						row.insertCell().innerHTML = petJson[keyName]
					}
				}
			}
		}

		row = dispTblPet.createTHead().insertRow(0);
		row.className = "thRow"
		var petKey
		for (petKey in petKeys) {
			if(petKey)
				row.insertCell().innerHTML = '<b>' + petKeys[petKey] + '</b>'
		}
	})
	return;
}
