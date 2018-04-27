(function() {
  function HistoryCtrl(Task) {
    var currentDate = new Date();

    this.oldTasks = Task.all;

    this.isOld = function(task) {
      return Task.expired(task) || task.state === "completed";
    };
  }

  angular
    .module('checkItOff')
    .controller('HistoryCtrl', ['Task', HistoryCtrl]);
})();
