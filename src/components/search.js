angular.module('video-player')

.component('search', {
  
  controller: function(youTube) {
    this.search = function(input) {
      youTube.search(input);
      console.log('search');
    };
  },

  templateUrl: 'src/templates/search.html'
});
