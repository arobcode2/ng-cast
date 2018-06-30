angular.module('video-player')

  .component('app', {
    // TODO,
    controller: function() {
      this.videos = window.exampleVideoData;
      this.currentThumbnail = 'https://www.youtube.com/embed/' + window.exampleVideoData[0].id.videoId;
      this.currentVideo = window.exampleVideoData[0];
      this.onClick = function(player) {
        currentVideo = this.video; 
        console.log(currentVideo);  
      };
      //console.log(this); 

      // playVideo: function(){
      //   console.log('i was clicked')
      // };
    },
    templateUrl: 'src/templates/app.html'
  });
