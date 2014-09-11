/* Task Class*/
	angular.module("taskApp").factory("Task", function(){
		function Task(defaults){
			this.id = defaults.id || new Date().getTime().toString();
			this.name = defaults.name || "";
			this.isCompleted = defaults.isCompleted || false;
		}
		Task.prototype.toggleCompletion = function(){
			this.isCompleted = !this.isCompleted;
		}
		return Task;
	});
	