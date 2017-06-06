angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function($window) {
    this.videos = $window.exampleVideoData;
    this.currentVideo = this.videos[0];
    this.searchResults = function() {};
    this.selectVideo = (video) => {
      this.currentVideo = video;
    };
    
  }
});
