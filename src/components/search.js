angular.module('video-player')
.controller('searchController', function(youTube, $scope) {
  this.result = function(input, callback) {
    youTube.search(input, callback);
  };
})
.component('search', {
  bindings: {
    update: '<',
  },

  controller: 'searchController',

  templateUrl: 'src/templates/search.html'
});
