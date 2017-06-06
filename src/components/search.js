angular.module('video-player')

.component('search', {
  
  controller: function(youTube) {
    console.log(youTube);
  },

  templateUrl: 'src/templates/search.html'
});
