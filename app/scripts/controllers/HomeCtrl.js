(function() {
  function HomeCtrl($scope, Task) {
    /**
    * @desc Grab all task items in Task object firebase array
    * @type {Object}
    */
    this.tasks = Task.all;

    this.addTask = function() {
      if($scope.newTaskDesc && $scope.priority) {
        Task.add($scope.newTaskDesc, $scope.priority);
      };
    };

    this.isExpired = function(task) {
      var currentDate = new Date();
      var expireDate = new Date(task.expireAt);

      return currentDate > expireDate || task.status === "completed";
    };
  }

  angular
    .module('checkItOff')
    .controller('HomeCtrl', ['$scope', 'Task', HomeCtrl]);
})();
