angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      onClick: '<',
      currentVideo: '<'
    }, 
    controller: function() {
      console.log(this);
    },
    templateUrl: 'src/templates/videoList.html'
  });

