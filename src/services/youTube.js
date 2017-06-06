angular.module('video-player')
.service('youTube', function($http, $window) {
  var apiKey = $window.YOUTUBE_API_KEY;

  $http({
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    params: {
      maxResults: 5,
      q: 'dogs',
      part: 'snippet',
      key: apiKey
    }
  }).then(function successCallback(response) {
    console.log(response.data.items);


  }, function errorCallback(response) {
    console.log('Error: GET request failed');

  });
});
