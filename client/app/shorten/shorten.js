angular.module('shortly.shorten', [])

.controller('ShortenController', function($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function() {
    console.log('____________________________ userlink');
    console.log($scope.link);
    Links.addLink($scope.link)
    .then(function(resp) {
      // add to DOM/LinkView
      return resp;
    })
    .catch(function(err) {
      console.log(err);
    });
  };
});
