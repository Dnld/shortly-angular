angular.module('shortly.links', [])

.controller('LinksController', function($scope, Links) {
  $scope.data = {};
  
  $scope.getLinks = function() {
    Links.getLinks()
    .then(function(resp) {
      // add to DOM/LinkView
      $scope.data.links = resp;
    })
    .catch(function(err) {
      console.log(err);
    });
  };
 
  $scope.init = function() {
    $scope.getLinks();
  };
  
  $scope.init();
  
});
