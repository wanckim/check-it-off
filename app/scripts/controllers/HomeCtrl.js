(function() {
  function HomeCtrl(Task) {
    /**
    * @desc Grab all task items in Task object firebase array
    * @type {Object}
    */
    this.tasks = Task.all;

    this.isExpired = function(task) {
      var currentDate = new Date();
      var expireDate = new Date(task.expireAt);

      return currentDate > expireDate || task.status === "completed";
    };
  }

  angular
    .module('checkItOff')
    .controller('HomeCtrl', ['Task', HomeCtrl]);
})();
