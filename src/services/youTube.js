angular.module('video-player')
  .service('youTube', function($http) {
  // TODO
    this.getVideos = function(key, callback) {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          part: 'snippet',
          query: 'golf',
          maxResults: 5,
          key: key,
          type: 'video',
          videoEmbeddable: true
        },
      }).then(function(data) {
        callback(data);
      });
    };
  });
