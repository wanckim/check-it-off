(function() {
  function HomeCtrl(Task) {
    // Task.add("testing 1");

    /**
    * @desc Grab all task items in Task object firebase array
    * @type {Object}
    */
    this.tasks = Task.all;

    this.isExpired = function(task) {
      var currentDate = new Date();
      var expireDate = new Date(task.expireAt);
      if (currentDate > expireDate) {
        console.log(task.task + " - expires on " + task.expireAt + " | Expired");
        return true;
      } else {
        console.log(task.task + " - expires on " + task.expireAt + " | On going");
        return false;
      };
    };
  }

  angular
    .module('checkItOff')
    .controller('HomeCtrl', ['Task', HomeCtrl]);
})();
