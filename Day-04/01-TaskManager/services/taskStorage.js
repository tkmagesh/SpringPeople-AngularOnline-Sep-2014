angular.module("taskApp")
    .service("taskStorage",["$http","Task","$q", function($http, Task,$q){
        this.getAll = function(){
            
            var defered = $q.defer();
            
            var promise = $http({method : "get", url : "/tasks"});
             promise.then(function(response){
                console.dir(response.data);
                var tasks = response.data.map(function(o){
                    return new Task(o);
                });
                defered.resolve(tasks);
            });
            return defered.promise;
        };
        this.add = function addTaskToStorage(taskName){
            var newTaskData = {name : taskName , isCompleted : false};
			//fill in the blank to send the newTaskData to "/tasks" using "post" method and display the result in the list
		};

    }]);
/*
	angular.module("taskApp").service("taskStorage", ['Task','$window',function TaskStorage(Task, $window){
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
	}]);
*/
