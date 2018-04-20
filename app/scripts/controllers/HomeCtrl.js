(function() {
  function HomeCtrl($scope, $firebaseArray) {
    var ref = firebase.database().ref().child("tasks");

    $scope.tasks = $firebaseArray(ref);

    $scope.tasks.$add({
      text: "Do the laundry"
    });
    $scope.tasks.$add({
      text: "Do the dishes"
    });
    $scope.tasks.$add({
      text: "Do the homework"
    });
  }

  angular
    .module('checkItOff')
    .controller('HomeCtrl', ['$scope', '$firebaseArray', HomeCtrl]);
})();
