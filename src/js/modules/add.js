
function add() {
	const taskInput = document.querySelector('#taskInput'),
		form = document.querySelector('#form'),
		tasksList = document.querySelector('#tasksList'),
		emptyList = document.querySelector('#emptyList');

	let tasks = [];

	if (localStorage.getItem('tasks')) {
		tasks = JSON.parse(localStorage.getItem('tasks'));

		tasks.forEach(task => renderTask(task));
	}

	checkEmptyList();
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

		//Сохраняем список задач в локальное хранилище браузера
		saveToLocalStorage();

		renderTask(newTask);

		//Очищаем поле ввода и возвращаем фокус на него
		taskInput.value = '';
		taskInput.focus();

		checkEmptyList();
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

		//Удаляем задачу из массива с задачами с помощью фильтрации(создаем новый массив )
		tasks = tasks.filter(task => {
			if (task.id == id) {
				return false;
			} else {
				return true;
			}
		});

		//Сохраняем список задач в локальное хранилище браузера
		saveToLocalStorage();

		//Удаляем задачу из разметки
		parentNode.remove();
		checkEmptyList();
	}

	function doneTask(e) {
		if (e.target.dataset.action !== 'done') {
			return;
		}

		const parentNode = e.target.closest('.list-group-item');

		const id = Number(parentNode.id);

		const task = tasks.find((task) => {
			if (task.id == id) {
				return true;
			}
		});

		task.done = !task.done;

		//Сохраняем список задач в локальное хранилище браузера
		saveToLocalStorage();

		const taskTitle = parentNode.querySelector('.task-title');
		taskTitle.classList.toggle('task-title--done');

	}

	function checkEmptyList() {
		if (tasks.length == 0) {
			const emptyListHTML = `
			<li id="emptyList" class="list-group-item empty-list">
				<img src="./img/icons/leaf.svg" alt="Empty" width="48" class="mt-3">
				<div class="empty-list__title">Список дел пуст</div>
			</li>
			`;
			tasksList.insertAdjacentHTML('afterbegin', emptyListHTML);
		} else {
			const emptyListEl = document.querySelector('#emptyList');
			emptyListEl ? emptyListEl.remove() : null;
		}
	}

	//Сохраняем в локальное хранилище
	function saveToLocalStorage() {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}

	function renderTask(task) {
		//Формируем CSS класс
		const cssClass = task.done ? 'task-title task-title--done' : 'task-title';

		//Формируем разметку для новой задачи
		const taskHTML = `
				<li id = '${task.id}' class="list-group-item d-flex justify-content-between task-item">
						<span class="${cssClass}"> ${task.text}</span>
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
		//Добавляем задачу на страницу
		tasksList.insertAdjacentHTML("beforeend", taskHTML);

	}

}


export default add;