
function add() {
	const taskInput = document.querySelector('#taskInput'),
		form = document.querySelector('#form'),
		tasksList = document.querySelector('#tasksList'),
		emptyList = document.querySelector('#emptyList');

	let tasks = [];

	// Добавили задачу
	form.addEventListener('submit', addTask);

	// Удаляем задачу
	tasksList.addEventListener('click', deleteTask);

	// Отмечаем задачу завершенной
	tasksList.addEventListener('click', doneTask);


	// Функции

	function addTask(e) {
		e.preventDefault();
		const taskText = taskInput.value;

		const newTask = {
			id: Date.now(),
			text: taskText,
			done: false,
		};

		//Добавляем задачу в массив с задачами
		tasks.push(newTask);

		//Формируем CSS класс
		const cssClass = newTask.done ? 'task-title task-title--done' : 'task-title';

		console.log(tasks);

		const taskHTML = `
		<li id = '${newTask.id}' class="list-group-item d-flex justify-content-between task-item">
				<span class="${cssClass}"> ${newTask.text}</span>
				<div class="task-item__buttons">
					<button type="button" data-action="done" class="btn-action">
						<img src="./img/icons/tick.svg" alt="Done" width="18" height="18">
					</button>
					<button type="button" data-action="delete" class="btn-action">
						<img src="./img/icons/cross.svg" alt="Done" width="18" height="18">
					</button>
				</div>
			</li>
		`;

		tasksList.insertAdjacentHTML("beforeend", taskHTML);
		taskInput.value = '';
		taskInput.focus();
		if (tasksList.children.length > 1) {
			emptyList.classList.add('none');
		}
	}

	function deleteTask(e) {

		if (e.target.dataset.action !== 'delete') {
			return;
		}
		const parentNode = e.target.closest('.list-group-item');

		const id = Number(parentNode.id);

		// // Находим индекс задачи в массиве
		// const index = task.findIndex((task) => {
		// 	return task.id == id;
		// });

		// // Удаляем задачу из массива с задачами
		// tasks.splice(index, 1);

		//Удаляем задачу из массива с задачами с помощью фильтрации
		tasks = tasks.filter(task => {
			if (task.id == id) {
				return false;
			} else {
				return true;
			}
		});

		//Удаляем задачу из разметки
		parentNode.remove();

		if (tasksList.children.length === 1) {
			emptyList.classList.remove('none');
		}


	}

	function doneTask(e) {
		if (e.target.dataset.action !== 'done') {
			return;
		}

		const parentNode = e.target.closest('.list-group-item');

		const id = parentNode.id;
		const taskTitle = parentNode.querySelector('.task-title');
		taskTitle.classList.toggle('task-title--done');
		console.log(id);
	}

	//Сохраняем в локальное хранилище
	function saveToLocal(e) {


	}

}


export default add;