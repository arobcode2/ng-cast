angular.module('video-player')
  .component('videoListEntry', {
  // TODO
    bindings: {
      video: '<',
      onClick: '<',
      currentVideo: '<'
    },
    templateUrl: 'src/templates/videoListEntry.html'
  });
