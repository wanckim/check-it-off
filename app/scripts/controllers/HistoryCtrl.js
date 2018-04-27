(function() {
  function HistoryCtrl(Task) {
    var currentDate = new Date();

    this.oldTasks = Task.all;

    this.isOld = function(task) {
      var currentDate = new Date();
      var expireDate = new Date(task.expireAt);

      return currentDate > expireDate && task.status === "completed";
    };
  }

  angular
    .module('checkItOff')
    .controller('HistoryCtrl', ['Task', HistoryCtrl]);
})();
