<template>
  <div class="background">
    <addFilePage @end="getVideoQoshimcha()" ref="filePage" />

    <sidebar />
    <div class="videos">
      <div class="title-box">
        <img src="/src/assets/images/slash.svg" alt="" />
        <h4 v-if="!videos.bir" @click="videos1()" class="contact_title">
          {{ videosTitleData[2]?.text }}
        </h4>
        <input
          v-else
          type="text"
          :value="videosTitleData[2]?.text"
          @change="categoryUpdate($event, videosTitleData[2])"
        />
      </div>
      <h3 class="videos_title" @click="videos2()" v-if="!videos.ikki">
        {{ videosTitleData[1]?.text }}
      </h3>
      <input
        v-else
        type="text"
        style="width: 100%"
        :value="videosTitleData[1]?.text"
        @change="categoryUpdate($event, videosTitleData[1])"
      />
      <div class="videos_box">
        <VideoPlayer
          :src="url + videoQollanmaData[0]?.file"
          :controls="true"
          :fullscreen="true"
          :responsive="true"
          style="width: 100%"
        />
        <input
          type="file"
          accept="video/*"
          class="d-none"
          id="videos_box"
          @change="fileUpdate($event, videoQollanmaData[0])"
        />
        <label for="videos_box">
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

      <div class="title-box ">
        <img src="/src/assets/images/slash.svg" alt="" />
          <h4
            class="contact_title align-self-end"
            @click="videos3()"
            v-if="!videos.uch"
          >
            {{ videosTitleData[0]?.text }}
          </h4>
          <input
            v-else
            type="text"
            :value="videosTitleData[0]?.text"
            @change="categoryUpdate($event, videosTitleData[0])"
          />
    
      </div>
      <div class="video_contents">
        <div
          class="btn btn-success mb-3"
          @click="
            ($refs.filePage.status = 'video'),
              ($refs.filePage.sourceNumber = 10),
              $refs.filePage.open()
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="14"
            fill="#fff"
            viewBox="0 0 448 512"
          >
            <path
              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
            />
          </svg>
        </div>
        <div class="video_content d-flex justify-content-center">
          <div
            class="content"
            v-for="item in videoQoshimchaData"
            :key="item.id"
          >
            <VideoPlayer
              :src="url + item?.file"
              :controls="true"
              fullscreen="true"
              responsive="true"
              style="width: 100%"
            />
            <input
              type="file"
              accept="video/*"
              @change="fileUpdate($event, item)"
              class="d-none"
              :id="item.id"
            />
            <label :for="item.id">
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
        </div>
      </div>
      <contactBox />
    </div>
  </div>
</template>
<script>
import sidebar from "/src/components/sidebar.vue";
import contactBox from "@/components/contactBox.vue";
import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";
import api from "../../server/api";
import baseurl from "../../server/baseurl";
import addFilePage from "../../components/Modal/addFilePage.vue";
export default {
  components: {
    VideoPlayer,
    contactBox,
    sidebar,
    addFilePage,
  },
  data() {
    return {
      url: baseurl,
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
      videosParams: {
        id: 9,
      },
      videoData: {
        source_id: 9,
      },
      videosData: {
        source_id: 10,
      },
      // response data
      videosTitleData: [],
      videoQollanmaData: [],
      videoQoshimchaData: [],
      // update data
      categoryItemUpdate: {
        category_item_id: 0,
        text: "",
      },
      fileUpdateData: {
        file_id: 0,
        file: [],
        comment: "",
        source: "",
      },
      // open close modal
      videos: {
        bir: false,
        ikki: false,
        uch: false,
      },
    };
  },
  methods: {
    // get zaprosalar
    getVideosTitle() {
      api.category_one(this.videosParams).then((res) => {
        this.videosTitleData = res.data?.category_items;
      });
    },
    getVideoQollanma() {
      api.file_files_source(this.videoData).then((res) => {
        this.videoQollanmaData = res.data;
      });
    },
    getVideoQoshimcha() {
      api.file_files_source(this.videosData).then((res) => {
        this.videoQoshimchaData = res.data;
      });
    },
    // update function
    categoryUpdate(event, item) {
      this.categoryItemUpdate.category_item_id = item.id;
      this.categoryItemUpdate.text = event.target.value;
      api
        .category_item_update(this.categoryItemUpdate)
        .then((res) => {
          this.getVideosTitle();
          this.$util.toastError("success", "Amaliyot Bajarildi");
          this.videos.bir = false;
          this.videos.ikki = false;
          this.videos.uch = false;
        })
        .catch((error) => {
          this.$util.toastError("error", "Ma'lumot yuklanmadi");
        });
    },
    fileUpdate(event, item) {
      this.fileUpdateData = {
        file_id: item?.id,
        file: [],
        comment: "",
        source: "",
      };
      this.fileUpdateData.file.push(event.target.files[0]);
      api
        .file_update_id(this.fileUpdateData)
        .then((res) => {
          this.getVideoQoshimcha();
          this.getVideoQollanma();
          this.$util.toastError("success", "Amaliyot bajarildi");
        })
        .catch((error) => {
          this.$util.toastError("error", "Ma'lumot yuklanmadi");
        });
    },
    // open close function
    videos1() {
      setTimeout(() => {
        this.videos.bir = true;
        this.videos.ikki = false;
        this.videos.uch = false;
      }, 500);
    },
    videos2() {
      setTimeout(() => {
        this.videos.bir = false;
        this.videos.ikki = true;
        this.videos.uch = false;
      }, 500);
    },
    videos3() {
      setTimeout(() => {
        this.videos.bir = false;
        this.videos.ikki = false;
        this.videos.uch = true;
      }, 500);
    },
  },
  created() {
    this.getVideosTitle();
    this.getVideoQollanma();
    this.getVideoQoshimcha();
  },
};
</script>
<style></style>
