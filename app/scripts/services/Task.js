(function() {
  function Task($firebaseArray) {
    var Task = {};
    var ref = firebase.database().ref().child("tasks");
    var list = $firebaseArray(ref);

    Task.all = list;

    Task.add = function(task) {
      var timeArr = getTime();
      var newTask = {
        task: task,
        createdAt: timeArr[0],
        expireAt: timeArr[1]
      }

      list.$add(newTask).then(function(ref) {
        var id = ref.key;
        list.$indexFor(id);
      });
    };

    var getTime = function() {
      var currentTime = new Date();

      var expiration = new Date();
      expiration.setDate(expiration.getDate() + 7);

      var createdAt = (currentTime.getMonth() + 1) + "-" +
                       currentTime.getDate() + "-" +
                       currentTime.getFullYear();

      var expireAt = (expiration.getMonth() + 1) + "-" +
                      expiration.getDate() + "-" +
                      expiration.getFullYear();

      var timeStamp = [createdAt, expireAt];

      return timeStamp;
    };

    return Task;
  }

  angular
    .module('checkItOff')
    .factory('Task', ['$firebaseArray', Task])
})();
