<template>
  <video-player
    src="../assets/images/video.mp4"
    controls
    :loop="true"
    :volume="0.6"
  >
  </video-player>
</template>
  <script>
import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";

export default {
  data() {
    return{}
  },
  components: {
    VideoPlayer,
  },
};
</script>