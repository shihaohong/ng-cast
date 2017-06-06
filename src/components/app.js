angular.module('video-player')

.component('app', {
  // TODO
  templateUrl: "src/templates/app.html",
  controller: function() {
    this.videos = window.exampleVideoData;
  }
});


/*
.component('app', {
  // TODO
  templateUrl: "src/templates/app.html",
  controller: ['$http', 
    function VideoListController($http) {
      var self = this;
      
      $http.get('src/data/exampleVideoData.js').then(function(response) {
        self.videos = response.data;
      });
    }]
});
*/