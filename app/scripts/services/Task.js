(function() {
  function Task($firebaseArray) {
    var Task = {};
    var ref = firebase.database().ref().child("tasks");
    var list = $firebaseArray(ref);

    Task.all = list;

    return Task;
  }

  angular
    .module('checkItOff')
    .factory('Task', ['$firebaseArray', Task])
})();
