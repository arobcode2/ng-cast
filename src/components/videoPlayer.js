angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      currentVideo: '<',
      currentThumbnail: '<'
    },

    templateUrl: 'src/templates/videoPlayer.html'
  });
