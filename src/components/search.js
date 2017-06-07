angular.module('video-player')

.component('search', {
  bindings: {
    update: '<',
  },

  controller: function(youTube, $scope) {
    console.log(this);
    this.search = function(input, callback) {
      youTube.search(input, callback);
      console.log('search controller search callback', callback);
    };
    console.log('search controller this', $scope);
  },

  templateUrl: 'src/templates/search.html'
});
