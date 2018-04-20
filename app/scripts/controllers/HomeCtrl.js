(function() {
  function HomeCtrl(Task) {
    /**
    * @desc Grab all task items in Task object firebase array
    * @type {Object}
    */
    this.tasks = Task.all;
  }

  angular
    .module('checkItOff')
    .controller('HomeCtrl', ['Task', HomeCtrl]);
})();
