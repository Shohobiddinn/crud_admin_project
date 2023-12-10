<template>
  <div class="background">
    <nav class="navigate">
      <ul class="navigate_list">
        <li class="navigate_item">
          <a href="#dastur" class="navigate_link">dastur haqida</a>
        </li>
        <li class="navigate_item"><b>.</b></li>

        <li class="navigate_item">
          <a href="#dastur" @click="showTitle()" class="navigate_link"
            >Foydali jihat</a
          >
        </li>
        <li class="navigate_item"><b>.</b></li>

        <li class="navigate_item">
          <router-link @click="activeFunc()" to="/">
            <img
              class="navigate_img"
              src="../../assets/images/Logo.png"
              alt=""
            />
          </router-link>
        </li>

        <li class="navigate_item">
          <a href="#yonalish" class="navigate_link">yo'nalishlari</a>
        </li>
        <li class="navigate_item"><b>.</b></li>

        <li class="navigate_item">
          <a href="#video" class="navigate_link">Video qo'llanmalar</a>
        </li>
      </ul>
    </nav>
    <div class="home-sidebar_navbar col-10 m-auto">
      <div class="d-flex justify-content-between py-4">
        <RouterLink @click="activeFunc()" to="/">
          <img
            class="home-sidebar__img"
            src="/src/assets/images/Crud.svg"
            alt="logo"
          />
        </RouterLink>
        <nav class="home-sidebar__nav" :class="{ active: isNavbarOpen }">
          <div
            class="sidebar-btn d-flex align-items-center justify-content-center"
            @click="openRight()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              fill="#fff"
              viewBox="0 0 448 512"
            >
              <path
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
              />
            </svg>
          </div>
          <ul class="home-sidebar__list">
            <li class="home-sidebar__item" style="margin-bottom: 50px">
              <RouterLink @click="activeFunc()" to="/">
                <img
                  class="home-sidebar__img"
                  src="/src/assets/images/Crud.svg"
                  alt=""
                />
              </RouterLink>
            </li>
            <li class="home-sidebar__item">
              <a href="#dastur"
                @click="activeFunc()"
                class="home-sidebar__link"
                >Biz haqimizda</a
              >
            </li>

            <li class="home-sidebar__item">
              <a
              href="#dastur"
                @click="activeFunc()"
                class="home-sidebar__link"
                >Foydali jihat</a
              >
            </li>

            <li class="home-sidebar__item">
              <a href="#yonalish"
                @click="activeFunc()"
                class="home-sidebar__link"
                >yo'nalishlar</a
              >
            </li>

            <li class="home-sidebar__item">
              <a href="#video"
                @click="activeFunc()"
                class="home-sidebar__link"
                >Video qo'llanmalar</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="xozmag-box">
      <h3 class="xozmag-title">
        <span>Qurilish davlat obyektlari</span> uchun dastur
      </h3>
    </div>

    <div class="banner">
      <div class="container-c">
        <div class="item">
          <img
            data-aos="fade-up"
            data-aos-duration="600"
            src="https://picsum.photos/id/35/1920/1080"
            alt="photo"
          />

          <img
            data-aos="fade-up"
            data-aos-duration="700"
            src="https://picsum.photos/id/36/1920/1080"
            alt="photo"
          />
        </div>
        <div class="item item1" data-aos="fade-down" data-aos-duration="700">
          <img src="https://picsum.photos/id/37/1920/1080" alt="photo" />
        </div>
        <div class="item">
          <img
            data-aos="fade-up"
            data-aos-duration="600"
            src="https://picsum.photos/id/38/1920/1080"
            alt="photo"
          />

          <img
            data-aos="fade-up"
            data-aos-duration="700"
            src="https://picsum.photos/id/39/1920/1080"
            alt="photo"
          />
        </div>
      </div>
    </div>
    <div id="dastur" class="resoult">
      <div class="container-c">
        <div
          class="resoult_title"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="700"
        >
          Savdo hozmaglar <span>uchun</span>
        </div>
        <div class="resoult_bottom">
          <div class="content">
            <div
              class="content_title"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="700"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
            </div>
            <div
              class="content_resoult"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="700"
            >
              <div class="item">
                <div class="item_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="90"
                    height="90"
                    viewBox="0 0 90 90"
                    fill="none"
                  >
                    <path
                      d="M44.6731 5.74207C44.6731 2.75149 42.2398 0.293265 39.2712 0.65486C30.5413 1.71821 22.275 5.34209 15.5461 11.1284C7.44194 18.0973 2.10497 27.741 0.503982 38.3089C-1.09701 48.8768 1.1441 59.6685 6.82052 68.7251C12.4969 77.7818 21.2324 84.503 31.4413 87.6689C41.6502 90.8347 52.6558 90.2353 62.4606 85.9795C72.2653 81.7237 80.2191 74.0935 84.8784 64.474C89.5377 54.8545 90.5936 43.8832 87.8544 33.5517C85.58 24.9734 80.8146 17.3083 74.218 11.4921C71.9749 9.51431 68.5776 10.1644 66.8856 12.6303L64.0538 16.7571C62.3617 19.2229 63.0354 22.5631 65.142 24.6857C68.678 28.2487 71.246 32.6973 72.5484 37.6097C74.3167 44.2792 73.6351 51.3616 70.6273 57.5714C67.6195 63.7812 62.485 68.7068 56.1557 71.4541C49.8263 74.2014 42.7217 74.5883 36.1314 72.5446C29.5412 70.5009 23.9021 66.1621 20.2377 60.3157C16.5733 54.4692 15.1266 47.5027 16.1601 40.6807C17.1936 33.8587 20.6389 27.6333 25.8705 23.1345C29.7239 19.821 34.3583 17.6059 39.2898 16.6688C42.2278 16.1105 44.6731 13.7376 44.6731 10.747V5.74207Z"
                      fill="#0085FF"
                    />
                  </svg>
                  <div class="item_icon_title">81%</div>
                </div>
                <div class="item_title">Ishingizni tezlashadi</div>
              </div>
              <div class="item">
                <div class="item_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="90"
                    height="90"
                    viewBox="0 0 90 90"
                    fill="none"
                  >
                    <path
                      d="M44.6731 5.74207C44.6731 2.75149 42.24 0.293278 39.2714 0.654882C31.5887 1.59069 24.2475 4.51148 17.9907 9.17105C10.2799 14.9134 4.62729 22.9901 1.87278 32.2011C-0.881724 41.4122 -0.591195 51.2661 2.70121 60.2989C5.99361 69.3316 12.1122 77.0612 20.1479 82.3393C28.1836 87.6174 37.7077 90.1622 47.3051 89.5958C56.9025 89.0294 66.0611 85.3819 73.4202 79.1953C80.7793 73.0086 85.9462 64.6129 88.1532 55.2556C89.9441 47.6627 89.7086 39.7653 87.5157 32.343C86.6684 29.475 83.4459 28.2185 80.7014 29.4064L76.1083 31.3944C73.3637 32.5823 72.1573 35.769 72.812 38.687C73.7629 42.9253 73.7492 47.3476 72.7413 51.6205C71.3166 57.6611 67.9812 63.0808 63.2306 67.0746C58.48 71.0683 52.5677 73.4229 46.3722 73.7886C40.1767 74.1542 34.0285 72.5114 28.8411 69.1042C23.6537 65.697 19.7039 60.7072 17.5785 54.8761C15.4531 49.0451 15.2656 42.684 17.0437 36.7379C18.8219 30.7918 22.4708 25.5779 27.4485 21.871C30.9696 19.2488 35.0226 17.4797 39.2898 16.6688C42.2279 16.1105 44.6731 13.7376 44.6731 10.747V5.74207Z"
                      fill="#FFB800"
                    />
                  </svg>
                  <div class="item_icon_title">78%</div>
                </div>
                <div class="item_title">Ishingizni tezlashadi</div>
              </div>
              <div class="item">
                <div class="item_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="87"
                    height="90"
                    viewBox="0 0 87 90"
                    fill="none"
                  >
                    <path
                      d="M45.3269 5.74207C45.3269 2.75149 42.8938 0.293297 39.9252 0.654911C33.6011 1.42526 27.493 3.54235 22.0222 6.8876C15.0059 11.1779 9.31003 17.3217 5.56222 24.6421C1.81441 31.9625 0.160089 40.1755 0.781532 48.376C1.40298 56.5765 4.27606 64.4463 9.08424 71.1184C13.8924 77.7904 20.4491 83.0057 28.0318 86.1897C35.6145 89.3736 43.9289 90.4026 52.059 89.1633C60.1891 87.9239 67.8194 84.4644 74.109 79.1658C79.0133 75.0343 82.954 69.9097 85.6856 64.1542C86.9678 61.4524 85.4056 58.3666 82.5687 57.4205L77.8208 55.837C74.9839 54.8909 71.9592 56.4598 70.5001 59.0703C68.8094 62.0952 66.5798 64.8038 63.907 67.0555C59.8467 70.476 54.9211 72.7093 49.6728 73.5093C44.4245 74.3094 39.0571 73.6451 34.1622 71.5897C29.2672 69.5344 25.0346 66.1677 21.9308 61.8606C18.8269 57.5535 16.9722 52.4732 16.571 47.1794C16.1699 41.8857 17.2378 36.5839 19.6572 31.8582C22.0765 27.1326 25.7534 23.1665 30.2827 20.397C33.2644 18.5738 36.5393 17.3157 39.9437 16.6688C42.8817 16.1105 45.3269 13.7376 45.3269 10.747V5.74207Z"
                      fill="#00FF47"
                    />
                  </svg>
                  <div class="item_icon_title">63%</div>
                </div>
                <div class="item_title">Ishingizni tezlashadi</div>
              </div>
            </div>
          </div>
          <div
            class="content_image"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <router-link to="/">
              <div class="images">
                <img src="https://picsum.photos/id/78/1920/1080" alt="" />
                <div class="icon_image">
                  <div class="icon"></div>
                  <div class="icon"></div>
                  <div class="icon"></div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div id="dastur" class="users">
      <div
        class="container-c"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="600"
      >
        <div class="users_content">
          <div class="users_content_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="45"
              viewBox="0 0 39 45"
              fill="none"
            >
              <path
                d="M37.4581 1.17455L37.7095 0.5H36.9896H18.0196H17.6723L17.5511 0.825445L1.53146 43.8255L1.28015 44.5H2H20.97H21.3173L21.4385 44.1746L37.4581 1.17455Z"
                stroke="white"
              />
            </svg>
          </div>
          <div class="users_content_title">foydalanuvchilar soni</div>
        </div>
        <div class="users_bottom">
          <div
            class="content"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="700"
          >
            <img src="../../assets/images/Vector 2.png" alt="" />
          </div>
          <div
            class="content"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="700"
          >
            <div class="content_title">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsumhas been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="yonalish" class="current_users">
      <div
        class="container-c"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="600"
      >
        <div class="current_users">
          <div class="current_users_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="45"
              viewBox="0 0 39 45"
              fill="none"
            >
              <path
                d="M37.4581 1.17455L37.7095 0.5H36.9896H18.0196H17.6723L17.5511 0.825445L1.53146 43.8255L1.28015 44.5H2H20.97H21.3173L21.4385 44.1746L37.4581 1.17455Z"
                stroke="white"
              />
            </svg>
          </div>
          <div class="current_users_title">Ayni damdagi foydalanuvchilar</div>
        </div>
        <swiper
          class="mySwiper"
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
              slidesPerView: 3,
              spaceBetween: 30,
            },
            '800': {
              slidesPerView: 3,
            },
            '1020': {
              spaceBetween: 30,
              slidesPerView: 4,
            },
          }"
        >
          bo'ldimi bo'ldi rahmad hozir shunda 11 qerakmikan 100ming pulimi
          bering qancha 1 yonida 2 ta nol men dasturlash kampaniya sotvolaman
          demadimu
          <swiper-slide v-for="item in 8" :key="item">
            <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div
      id="video"
      class="manual"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="700"
    >
      <div class="container-c">
        <div class="manual_content">
          <div class="title-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="45"
              viewBox="0 0 39 45"
              fill="none"
            >
              <path
                d="M37.4581 1.17455L37.7095 0.5H36.9896H18.0196H17.6723L17.5511 0.825445L1.53146 43.8255L1.28015 44.5H2H20.97H21.3173L21.4385 44.1746L37.4581 1.17455Z"
                stroke="white"
              />
            </svg>
            <h3 class="contact_title">Ko'p beriladigan savollar</h3>
          </div>
        </div>
        <div class="manual_video">
          <VideoPlayer
            :options="videoOptions"
            style="width: 95%; background-color: inherit; object-fit: cover"
          />
        </div>
      </div>
    </div>
    <div class="container-c">
      <contactBox />
    </div>
  </div>
</template>
  <script>
import { Swiper, SwiperSlide } from "swiper/vue";
import contactBox from "@/components/contactBox.vue";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";
export default {
  setup() {
    return {
      modules: [Autoplay],
    };
  },
  data() {
    return {
      show: true,
      isNavbarOpen: false,
      text: [
        {
          title: "Biznesingizga <span>oson</span> yechim topamiz",
        },
        {
          title: "Ishingizni osonlashtiramiz",
        },
      ],
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
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    VideoPlayer,
    contactBox,
  },
  methods: {
    showTitle() {
      this.show = !this.show;
    },
    activeFunc() {
      this.isNavbarOpen = false;
    },
    openRight() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
  },
  created() {
    this.showTitle();
  },
};
</script>
  <style></style>
  