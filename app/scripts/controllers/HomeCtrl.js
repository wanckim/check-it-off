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
        $scope.newTaskDesc = null;
      };
    };

    this.isExpired = function(task) {
      return Task.expired(task) || task.state === "completed";
    };

    this.isActive = function(task) {
      return task.state === "active";
    };

    this.toggleState = function(task) {
      Task.toggle(task);
    };
  }

  angular
    .module('checkItOff')
    .controller('HomeCtrl', ['$scope', 'Task', HomeCtrl]);
})();
