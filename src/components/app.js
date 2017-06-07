angular.module('video-player')
.controller('appController', function($window) {
  this.videos = $window.exampleVideoData;
  this.currentVideo = this.videos[0];
  this.searchResults = (data) => {
    this.videos = data;
    this.currentVideo = data[0];
  };
  this.selectVideo = (video) => {
    this.currentVideo = video;
  }; 
})

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: 'appController'
});
