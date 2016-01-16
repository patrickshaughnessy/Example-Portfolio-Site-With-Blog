'use strict';

angular
  .module('app')
  .controller('portfolioCtrl', function($scope){
    $scope.projects = [
      {
        title: 'Point Break',
        url: 'http://ecx.images-amazon.com/images/I/510VH759YJL.jpg'
      },
      {
        title: 'The Matrix',
        url: 'http://ecx.images-amazon.com/images/I/51CSWX5V3KL.jpg'
      }
    ]
  })
