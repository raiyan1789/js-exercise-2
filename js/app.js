var userSubmit = document.querySelector('#user-submit');
var toDolist = document.querySelector('#to-do-list');


function addToDo(event){

	event.preventDefault();
	
	var userInput = document.querySelector('#user-input');
	
	
	if(userInput.value === ''){
		return false;
	}
	
	toDolist.innerHTML = '<li><i class="fa fa-window-close close-to-do" aria-hidden="true"></i>' + userInput.value + '</li>' + toDolist.innerHTML;
	

	userInput.value = '';

}

function removeToDo(event) {
	if(event.target.classList.contains('close-to-do')){
		var li = event.target.parentElement;
		toDolist.removeChild(li);
		

	}
}


toDolist.addEventListener('click', removeToDo, false);
userSubmit.addEventListener('click', addToDo, false);






