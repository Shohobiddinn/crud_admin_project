<template>
  <div class="background">
    <div class="about">
      <div class="container-c">
        <sidebar />
        <div class="title-box">
          <img src="/src/assets/images/slash.svg" alt="" />
          <h3 class="contact_title">Biz haqimizda</h3>
        </div>
        <div class="about_box">
          <VideoPlayer
            :options="videoOptions"
            style="width: 100%; background-color: inherit; object-fit: cover"
          />
        </div>
        <div class="title-box">
          <img src="/src/assets/images/slash.svg" alt="" />
          <h3 class="contact_title">Mijozlarimiz fikrlari</h3>
        </div>
        <!-- <pre class="text-white">{{ swiperImages1 }}</pre> -->
        <div class="video_carusel">
          <carousel :items-to-show="4" :breakpoints="breakPoints">
            <slide
              class="video_carusel_slide d-flex flex-column"
              v-for="item in swiperVideoData"
              :key="item.id"
            >
              <VideoPlayer
                src="/src/assets/images/video.mp4"
                :fullscreen="true"
                :controls="true"
                :responsive="true"
                style="width: 100%"
              />
              <input
                type="file"
                :id="item.id"
                class="d-none"
                accept="video/*"
                @change="updateFileSwiperVideo($event, item)"
              />
              <label :for="item.id">
                <div
                  class="card_content_btn text-bg-warning text-uppercase btn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    width="18"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
                    />
                  </svg>
                </div>
              </label>
            </slide>
          </carousel>
        </div>
        <div class="title-box">
          <img src="/src/assets/images/slash.svg" alt="" />
          <h3 class="contact_title">Bizning mijozlarimiz</h3>
        </div>
        <div class="client-box">
          <swiper
          class="mySwiper mb-3"
          :slidesPerView="4"
          :spaceBetween="30"
          :cssMode="true"
          :mousewheel="true"
          :keyboard="true"
          :loop="true"
          :autoplay="{
            delay: 1500,
            disableOnInteraction: false,
          }"
          :modules="modules"
          :breakpoints="{
            '200': {
              slidesPerView: 1,
            },
            '500': {
              slidesPerView: 2,
            },
            '600': {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            '800': {
              slidesPerView: 3,
            },
            '1020': {
              spaceBetween: 30,
              slidesPerView: 3,
            },
          }"
        >
          <swiper-slide v-for="item in 8" :key="item">
            <div class="client_link" href="">
                <img class="client__img" style="border-radius: 20px; height: 250px;" src="https://picsum.photos/seed/picsum/200/300" alt="" />
              </div>
          </swiper-slide>
        </swiper>
          <carousel
            :items-to-show="5"
            :autoplay="1500"
            :wrap-around="true"
            :breakpoints="breakPoints"
          >
            <slide v-for="slide in images" :key="slide">
              <a class="client_link" href="">
                <img class="client__img" :src="slide" alt="" />
              </a>
            </slide>
          </carousel>
        </div>
        <contactBox />
      </div>
    </div>
  </div>
</template>
<script>
import api from "../../server/api";
import baseurl from "../../server/baseurl";
import sidebar from "/src/components/sidebar.vue";
import parvoz from "../../assets/images/parvoz.png";
import ideal from "../../assets/images/ideal.png";
import ecoBonu from "../../assets/images/eco-bonu.png";
import dehqon from "../../assets/images/dehqon-uz.png";
import effectiveEngineering from "../../assets/images/effective-engineering.png";
import contactBox from "../../components/contactBox.vue";
import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
export default {
  setup() {
    return {
      modules: [Autoplay],
    };
  },
  components: {
    VideoPlayer,
    Carousel,
    Slide,
    sidebar,
    contactBox,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      images: [parvoz, ideal, dehqon, ecoBonu, effectiveEngineering],
      videoOptions: {
        fullscreen: true,
        responsive: true,
        autoplay: false,
        controls: true,
        sources: [
          {
            src: "/src/assets/images/video.mp4",
            type: "video/mp4",
          },
        ],
      },
      breakPoints: {
        320: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        500: {
          itemsToShow: 1.5,
          snapAlign: "center",
        },
        700: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        900: {
          itemsToShow: 3,
          snapAlign: "center",
        },

        1024: {
          itemsToShow: 4,
          snapAlign: "start",
        },
      },
      // get params
      about_swiper_video_params: {
        source_id: 2,
      },
      about_swiper_images1_params: {
        source_id: 3,
      },
      // response data
      swiperVideoData: [],
      swiperImages1: [],
      // url
      url: baseurl,
      // put update data
      item_put_data: {
        file_id: 0,
        file: [],
      },
    };
  },
  methods: {
    // get function
    getSwiperVideo() {
      api.file_files_source(this.about_swiper_video_params).then((res) => {
        this.swiperVideoData = res.data;
      });
    },
    getSwiperImages1() {
      api.file_files_source(this.about_swiper_images1_params).then((res) => {
        this.swiperImages1 = res.data;
      });
    },
    // update put function
    updateFileSwiperVideo(event, item) {
      this.item_put_data.file_id = item.id;
      this.item_put_data.file.push(event.target.files[0]);
      api
        .file_update_id(this.item_put_data)
        .then((res) => {
          this.$util.toastError("success", "Amaliyot bajarildi!");
        })
        .catch((err) => {
          this.$util.toastError("error", "Ma'lumot yuklanmadi!");
        });
    },
  },
  mounted() {},
  created() {
    this.getSwiperVideo();
    this.getSwiperImages1();
  },
};
</script>
<style></style>
