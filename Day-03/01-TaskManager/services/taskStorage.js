

	/*Task Storage*/

	/*taskApp.factory("taskStorage", function getTaskStorage(Task){
		function getAllTasksFromStorage(){
			var result = [];
			for(var i=0;i<window.localStorage.length;i++){
				var key = window.localStorage.key(i);
				var task = new Task(window.JSON.parse(window.localStorage.getItem(key)));
				result.push(task);
			}
			return result;
		}
		function addTaskToStorage(taskName){
			var id = new Date().getTime().toString();
			var newTask = new Task({
				id : id,
				name : taskName,
				isCompleted : false
			});
			window.localStorage.setItem(id, window.JSON.stringify(newTask));
			return newTask;
		}
		function removeTaskFromStorage(task){
			window.localStorage.removeItem(task.id);
		}
		function updateTaskInStorage(task){
			window.localStorage.setItem(task.id, window.JSON.stringify(task));
		}
		return {
			add : addTaskToStorage,
			remove : removeTaskFromStorage,
			update : updateTaskInStorage,
			getAll : getAllTasksFromStorage
		}
	});
*/

	angular.module("taskApp").service("taskStorage", function TaskStorage(Task, $window){
		this.getAll = function getAllTasksFromStorage(){
			var result = [];
			for(var i=0;i<$window.localStorage.length;i++){
				var key = $window.localStorage.key(i);
				var task = new Task($window.JSON.parse($window.localStorage.getItem(key)));
				result.push(task);
			}
			return result;
		};
		this.add = function addTaskToStorage(taskName){
			var id = new Date().getTime().toString();
			var newTask = new Task({
				id : id,
				name : taskName,
				isCompleted : false
			});
			$window.localStorage.setItem(id, $window.JSON.stringify(newTask));
			return newTask;
		};

		this.remove = function removeTaskFromStorage(task){
			$window.localStorage.removeItem(task.id);
		};

		this.update = function updateTaskInStorage(task){
			$window.localStorage.setItem(task.id, $window.JSON.stringify(task));
		};
	});
