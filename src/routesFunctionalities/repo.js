import { createTable, createDiv } from './DOMFunction.js'

export default function accessFunction(accessToken){
	// display error if miising accessToken
	if(!accessToken) {
		createDiv("errorMess", "error", "contentItems");
		let erro = document.getElementById("errorMess")
		erro.innerHTML = "<h2> Enter valid access token and try again </h2>"
		return
	}
	var url = `https://api.github.com/user/repos?access_token=${accessToken}`

	// Setup to remove table and paragraph if exists
	var dispTblGit = document.getElementById("gitRepos");
	var erro = document.getElementById("errorMess");

	// Remove previous results if exists
	if(dispTblGit) {
		dispTblGit.parentNode.removeChild(dispTblGit);
	}
	if(erro) {
		erro.parentNode.removeChild(erro)
	}

	// request to get the list of repos
	fetch(url).then(function(response){
		return response.json();
	})
	.then(function(repoJson){

		let repoKeys = Object.keys(repoJson);
		if(repoKeys.includes("message")) {
			console.log(repoJson);
			createDiv("errorMess", "error", "contentItems");
			let erro = document.getElementById("errorMess")
			erro.innerHTML = "<h2> Enter valid access token and try again </h2>"
			return
		}

		createTable("gitRepos", "contentItems");
		dispTblGit = document.getElementById("gitRepos");

		console.log(repoJson);
		var eachRepo
		for (eachRepo in repoJson) {
			if (eachRepo) {
				var row = dispTblGit.insertRow(eachRepo);
				row.className = "tBodyRow"
				row.insertCell(0).innerHTML = repoJson[eachRepo].name;
			}
		}
	})
}
