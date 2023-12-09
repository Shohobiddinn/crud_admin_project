<template>
	<sidebar />
	<div class="videos">
		<div class="title-box">
			<img src="/src/assets/images/slash.svg" alt="" />
			<h3 class="contact_title">Ko'p beriladigan savollar</h3>
		</div>
		<div class="videos_box">
			<VideoPlayer
				src="/src/assets/images/video.mp4"
				:controls="true"
				:fullscreen="true"
				:responsive="true"
				style="width: 100%"
			/>
		</div>

		<div class="video_carusel">
			<carousel
				:items-to-show="5"
				:autoplay="1500"
				:wrap-around="true"
				:breakpoints="breakPoints"
			>
				<slide v-for="slide in 6" :key="slide">
					<VideoPlayer
						src="/src/assets/images/video.mp4"
						:controls="true"
						fullscreen="true"
						responsive="true"
					/>
				</slide>
			</carousel>
		</div>
		<contactBox />
	</div>
</template>
<script>
import sidebar from '/src/components/sidebar.vue';
import contactBox from '../../components/contactBox.vue';
import { VideoPlayer } from '@videojs-player/vue';
import 'video.js/dist/video-js.css';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';

export default {
	components: {
		VideoPlayer,
		Carousel,
		Slide,
		contactBox,
		sidebar,
	},
	data() {
		return {
			breakPoints: {
				320: {
					itemsToShow: 1,
					snapAlign: 'center',
				},
				500: {
					itemsToShow: 1.5,
					snapAlign: 'center',
				},
				700: {
					itemsToShow: 2,
					snapAlign: 'center',
				},
				900: {
					itemsToShow: 3,
					snapAlign: 'center',
				},

				1024: {
					itemsToShow: 4,
					snapAlign: 'start',
				},
			},
		};
	},
};
</script>
<style></style>
