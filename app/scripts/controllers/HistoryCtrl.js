(function() {
  function HistoryCtrl(Task) {
    var currentDate = new Date();

    this.oldTasks = Task.all;

    this.isOld = function(task) {
      return Task.expired(task) || task.state === "completed";
    };

    this.isExpired = function(task) {
      return Task.expired(task);
    };
  }

  angular
    .module('checkItOff')
    .controller('HistoryCtrl', ['Task', HistoryCtrl]);
})();
