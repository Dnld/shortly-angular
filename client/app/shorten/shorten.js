angular.module('shortly.shorten', [])

.controller('ShortenController', function($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function(link) {
    console.log('____________________________ userlink');
    console.log(link);
    Links.addLink(linkink)
    .then(function(resp) {
      // add to DOM/LinkView
      return resp;
    })
    .catch(function(err) {
      console.log(err);
    });
  };
});
