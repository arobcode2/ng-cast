angular.module('video-player')

  .component('app', {
    // TODO,
    controller: function(youTube) {
      //console.log(this);
      //google how to get access to the service
      this.videos = window.exampleVideoData;
      this.currentThumbnail = 'https://www.youtube.com/embed/' + window.exampleVideoData[0].id.videoId;
      this.currentVideo = window.exampleVideoData[0];
      // this.youtubeData = function(youTube) {
      //   var youtubeVideos = youTube.getVideos();
      //   console.log(youtubeVideos);
      // };
      console.log(youTube.getVideos());
      this.onClick = (player) => {
        //scurrentVideo = this.video;
        console.log(player);  
        this.currentVideo = player;
        this.currentThumbnail = 'https://www.youtube.com/embed/' + player.id.videoId;
        console.log(this.currentVideo); 
      };
      //console.log(this); 

      // playVideo: function(){
      //   console.log('i was clicked')
      // };
    },
    templateUrl: 'src/templates/app.html'
  });
