<template>
  <div class="background">
    <div class="about">
      <div class="container-c">
        <sidebar />
        <div class="title-box">
          <img src="/src/assets/images/slash.svg" alt="" />
          <h3 @click="about1()" v-if="!about.bir" class="contact_title">
            {{ aboutTitleData[2]?.text }}
          </h3>
          <input
            v-else
            type="text"
            :value="aboutTitleData[2]?.text"
            @change="updateCategory($event, aboutTitleData[2])"
          />
        </div>
        <div class="about_box">
          <VideoPlayer
            :src="url + aboutVideoData[0]?.file"
            :fullscreen="true"
            :controls="true"
            :responsive="true"
            style="width: 100%"
          />
          <input
            type="file"
            id="aboutVideo"
            class="d-none"
            accept="video/*"
            @change="updateFileSwiperVideo($event, aboutVideoData[0])"
          />
          <label for="aboutVideo">
            <div class="card_content_btn text-bg-warning text-uppercase btn">
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
        </div>
        <div class="title-box">
          <img src="/src/assets/images/slash.svg" alt="" />
          <h3 @click="about2()" v-if="!about.ikki" class="contact_title">
            {{ aboutTitleData[1]?.text }}
          </h3>
          <input
            v-else
            type="text"
            :value="aboutTitleData[1]?.text"
            @change="updateCategory($event, aboutTitleData[1])"
          />
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
                :src="url + item?.file"
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
          <h3 @click="about3()" v-if="!about.uch" class="contact_title">
            {{ aboutTitleData[0]?.text }}
          </h3>
          <input
            v-else
            type="text"
            :value="aboutTitleData[0]?.text"
            @change="updateCategory($event, aboutTitleData[0])"
          />
        </div>
        <div class="client-box">
          <carousel
            :items-to-show="5"
            :wrap-around="true"
            :breakpoints="breakPoints"
          >
            <slide v-for="item in swiperImages1" :key="item.id">
              <div class="client_link" href="">
                <input
                  type="file"
                  accept="image/*"
                  class="d-none"
                  :id="item.id"
                />
                <label :for="item.id">
                  <img
                    class="client__img"
                    :src="url + item?.file"
                    alt="photo"
                  />
                </label>
              </div>
            </slide>
          </carousel>
          <carousel
            :items-to-show="5"
            :autoplay="1500"
            :wrap-around="true"
            :breakpoints="breakPoints"
          >
            <slide v-for="item in swiperImages2" :key="item.id">
              <div class="client_link">
                <input
                  type="file"
                  accept="image/*"
                  class="d-none"
                  :id="item.id"
                />
                <label :for="item.id">
                  <img
                    class="client__img"
                    :src="url + item?.file"
                    alt="photo"
                  />
                </label>
              </div>
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
import contactBox from "../../components/contactBox.vue";
import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
export default {
  components: {
    VideoPlayer,
    Carousel,
    Slide,
    sidebar,
    contactBox,
  },
  data() {
    return {
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
      about_video_data: {
        source_id: 11,
      },
      about_swiper_video_params: {
        source_id: 12,
      },
      about_swiper_images1_params: {
        source_id: 13,
      },
      about_swiper_images2_params: {
        source_id: 14,
      },
      aboutParams: {
        id: 10,
      },
      // response data
      swiperVideoData: [],
      aboutVideoData: [],
      swiperImages1: [],
      swiperImages2: [],
      aboutTitleData: [],
      // url
      url: baseurl,
      // put update data
      item_put_data: {
        file_id: 0,
        file: [],
      },
      about_category_data: {
        category_item_id: 0,
        text: "",
      },
      // open close
      about: {
        bir: false,
        ikki: false,
        uch: false,
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
    getAboutVideo() {
      api.file_files_source(this.about_video_data).then((res) => {
        this.aboutVideoData = res.data;
      });
    },
    getSwiperImages1() {
      api.file_files_source(this.about_swiper_images1_params).then((res) => {
        this.swiperImages1 = res.data;
      });
    },
    getSwiperImages2() {
      api.file_files_source(this.about_swiper_images2_params).then((res) => {
        this.swiperImages2 = res.data;
      });
    },
    getCategory() {
      api.category_one(this.aboutParams).then((res) => {
        this.aboutTitleData = res.data?.category_items;
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
    updateCategory(event, item) {
      this.about_category_data.category_item_id = item.id;
      this.about_category_data.text = event.target.value;
      api
        .category_item_update(this.about_category_data)
        .then((res) => {
          this.getCategory();
          this.$util.toastError("success", "Amaliyot bajarildi");
          this.about.bir = false;
          this.about.ikki = false;
          this.about.uch = false;
        })
        .catch((error) => {
          this.$util.toastError("error", "Ma'lumot yuklanmadi");
        });
    },
    // open close function
    about1() {
      setTimeout(() => {
        this.about.bir = true;
        this.about.ikki = false;
        this.about.uch = false;
      }, 500);
    },
    about2() {
      setTimeout(() => {
        this.about.bir = false;
        this.about.ikki = true;
        this.about.uch = false;
      }, 500);
    },
    about3() {
      setTimeout(() => {
        this.about.bir = false;
        this.about.ikki = false;
        this.about.uch = true;
      }, 500);
    },
  },
  mounted() {},
  created() {
    this.getSwiperVideo();
    this.getSwiperImages1();
    this.getSwiperImages2();
    this.getAboutVideo();
    this.getCategory();
  },
};
</script>
<style></style>
