// CREATE FUNCTIONS
// These functions are each responsible for creating a different elements
// Appends them to the parentNode designated by the given parentId.
//

// Creates html "p" elements
export function createParagraph(id, parentId){
	var parentNode = document.getElementById(parentId)
	console.log("Looking for", parentId, parentNode)
	var p = document.createElement("P");
	p.setAttribute("type", "text");
	p.setAttribute("id", id);
	parentNode.appendChild(p);
}

// Creates html "Table" elements
export function createTable(id, parentId){
	var parentNode = document.getElementById(parentId)
	var t = document.createElement("TABLE");
	t.setAttribute("type", "text");
	t.setAttribute("id", id);
	parentNode.appendChild(t);
}


// Creates html "div" elements
export function createDiv(id, clas, parentId){
	var parentNode;
	if(!parentId)
		parentNode = document.body
	else
		parentNode = document.getElementById(parentId)

	var d = document.createElement("DIV");
	d.setAttribute("id", id);
	d.setAttribute("class", clas);
	parentNode.appendChild(d);
}
