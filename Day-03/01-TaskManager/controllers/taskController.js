/*Task Controller*/
	angular.module("taskApp").controller("taskController", function taskController($scope, taskStorage){
		
		var tasks = $scope.tasks = taskStorage.getAll();
		

		$scope.addTask = function(taskName){
			var newTask = taskStorage.add(taskName);
			tasks.push(newTask);
			$scope.message = "A new task is added..!!";
		};

		$scope.toggleCompletion = function(task){
			task.toggleCompletion();
			taskStorage.update(task);
		};

		$scope.removeCompleted = function(){
				for(var i=tasks.length-1;i>=0;i--)
					if (tasks[i].isCompleted){
						taskStorage.remove(tasks[i]);
						tasks.splice(i,1);
					}
			
			$scope.message = "Zero or more completed tasks are removed..!!";
		};
		$scope.getCompletedCount = function(){
			return tasks.reduce(function(seed,task){
					return task.isCompleted ? seed + 1 : seed;
				},0);	
			
		}
	});