var userSubmit = document.querySelector('#user-submit');
function addToDo(event){

	event.preventDefault();
	
	var userInput = document.querySelector('#user-input');
	var toDolist = document.querySelector('#to-do-list');
	
	if(userInput.value === ''){
		return false;
	}
	var li = document.createElement("li");
	toDolist.innerHTML += '<li>' + userInput.value + '</li>';
	document.getElementById("to-do-list").prependChild(li);


	userInput.value = '';

}

userSubmit.addEventListener('click', addToDo, false);






