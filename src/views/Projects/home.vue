<template>
  <div class="background">
    <nav class="navigate">
      <ul class="navigate_list">
        <li class="navigate_item">
          <div v-if="!navBar.bir" class="navigate_link" @click="navBar1()">
            {{ homeNavbar[4]?.text }}
          </div>
          <input
            type="text"
            v-else
            :value="homeNavbar[4]?.text"
            @change="updateHomeNavbar($event, homeNavbar[4])"
          />
        </li>
        <li class="navigate_item"><b>.</b></li>

        <li class="navigate_item">
          <div v-if="!navBar.ikki" @click="navBar2()" class="navigate_link">
            {{ homeNavbar[3]?.text }}
          </div>
          <input
            type="text"
            v-else
            :value="homeNavbar[3]?.text"
            @change="updateHomeNavbar($event, homeNavbar[3])"
          />
        </li>
        <li class="navigate_item"><b>.</b></li>

        <li class="navigate_item">
          <input
            class="d-none"
            id="img"
            type="file"
            @change="imgFunc($event)"
          />
          <label class="imglabel" for="img">
            <img
              id="uploadedImage"
              class="imgLogo"
              :src="
                url + navBarFile[0]?.file.replace('media', 'uploaded_files')
              "
              alt=""
            />
          </label>
        </li>

        <li class="navigate_item">
          <div v-if="!navBar.uch" @click="navBar3()" class="navigate_link">
            {{ homeNavbar[2]?.text }}
          </div>
          <input
            type="text"
            v-else
            :value="homeNavbar[2]?.text"
            @change="updateHomeNavbar($event, homeNavbar[2])"
          />
        </li>
        <li class="navigate_item"><b>.</b></li>

        <li class="navigate_item">
          <div
            @click="navBar4()"
            v-if="!navBar.tort"
            href="#video"
            class="navigate_link"
          >
            {{ homeNavbar[1]?.text }}
          </div>
          <input
            type="text"
            v-else
            :value="homeNavbar[1]?.text"
            @change="updateHomeNavbar($event, homeNavbar[1])"
          />
        </li>
      </ul>
    </nav>
    <div class="home-sidebar_navbar col-10 m-auto">
      <div class="d-flex justify-content-between py-4">
        <input
          class="d-none"
          ref="logoRef"
          id="img"
          type="file"
          @change="imgFunc($event)"
        />
        <label class="imglabel" for="img">
          <img
            id="uploadedImage"
            class="imgLogo"
            :src="url + navBarFile[0]?.file.replace('media', 'uploaded_files')"
            alt=""
            style="width: 250px; height: 50px"
          />
        </label>
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
              <input
                class="d-none"
                ref="logoRef"
                id="img"
                type="file"
                @change="imgFunc($event)"
              />
              <label class="imglabel" for="img">
                <img
                  id="uploadedImage"
                  class="imgLogo"
                  :src="
                    url + navBarFile[0]?.file.replace('media', 'uploaded_files')
                  "
                  alt=""
                  style="width: 250px; height: 50px"
                />
              </label>
            </li>
            <li class="home-sidebar__item">
              <a
                href="#dastur"
                @click="activeFunc()"
                class="home-sidebar__link"
                >{{ homeNavbar[4]?.text }}</a
              >
            </li>

            <li class="home-sidebar__item">
              <a
                href="#dastur"
                @click="activeFunc()"
                class="home-sidebar__link"
                >{{ homeNavbar[3]?.text }}</a
              >
            </li>

            <li class="home-sidebar__item">
              <a
                href="#yonalish"
                @click="activeFunc()"
                class="home-sidebar__link"
                >{{ homeNavbar[2]?.text }}</a
              >
            </li>

            <li class="home-sidebar__item">
              <a
                href="#video"
                @click="activeFunc()"
                class="home-sidebar__link"
                >{{ homeNavbar[1]?.text }}</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <pre class="text-white">{{ homeBannerFile }}</pre>

    <div class="xozmag-box">
      <h3 v-if="!navBar.besh" class="xozmag-title" @click="navBar5()">
        {{ homeNavbar[0]?.text }}
      </h3>
      <input
        v-else
        class="w-75"
        type="text"
        :value="homeNavbar[0]?.text"
        @change="updateHomeNavbar($event, homeNavbar[0])"
      />
    </div>
    <div class="banner">
      <div class="container-c">
        <div class="item">
          <input
            class="d-none"
            id="banner1"
            type="file"
            @change="fileUpdate($event, homeBannerFile[0])"
          />
          <label class="imglabel" for="banner1">
            <img
              class="imgLogo"
              :src="
                url + homeBannerFile[0]?.file.replace('media', 'uploaded_files')
              "
              :alt=" url + homeBannerFile[0]?.file.replace('media', 'uploaded_files')"
            />
          </label>
          <input
            class="d-none"
            id="banner2"
            type="file"
            @change="fileUpdate($event, homeBannerFile[1])"
          />
          <label class="imglabel" for="banner2">
            <img
              class="imgLogo"
              :src="
                url + homeBannerFile[1]?.file.replace('media', 'uploaded_files')
              "
              alt="photo"
            />
          </label>
        </div>
        <div class="item item1" data-aos="fade-down" data-aos-duration="700">
          <input
            class="d-none"
            id="banner3"
            type="file"
            @change="fileUpdate($event, homeBannerFile[2])"
          />
          <label class="imglabel" for="banner3">
            <img
              class="imgLogo"
              :src="
                url + homeBannerFile[2]?.file.replace('media', 'uploaded_files')
              "
              alt=""
            />
          </label>
        </div>
        <div class="item">
          <input
            class="d-none"
            id="banner4"
            type="file"
            @change="fileUpdate($event, homeBannerFile[3])"
          />
          <label class="imglabel" for="banner4">
            <img
              class="imgLogo"
              :src="
                url + homeBannerFile[3]?.file.replace('media', 'uploaded_files')
              "
              alt=""
            />
          </label>

          <input
            class="d-none"
            id="banner5"
            type="file"
            @change="fileUpdate($event, homeBannerFile[4])"
          />
          <label class="imglabel" for="banner5">
            <img
              class="imgLogo"
              :src="
                url + homeBannerFile[4]?.file.replace('media', 'uploaded_files')
              "
              alt=""
            />
          </label>
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
          @click="resoult1()"
          v-if="!resuolt.bir"
        >
          {{ homeResoult[4]?.text }}
        </div>
        <input
          v-else
          type="text"
          class="w-100 resoult_title"
          :value="homeResoult[4]?.text"
          @change="updateHomeNavbar($event, homeResoult[4])"
        />
        <div class="resoult_bottom">
          <div class="content">
            <div
              @click="resoult2()"
              v-if="!resuolt.ikki"
              class="content_title"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="700"
            >
              {{ homeResoult[3]?.text }}
            </div>
            <div class="textarea d-flex" v-else>
              <textarea
                ref="resultTextarea"
                class="content_title text-black"
                type="text"
                rows="10"
                cols="50"
                :value="homeResoult[3]?.text"
              >
              </textarea>
              <div class="textarea_icon">
                <button
                  class="btn btn-success align-self-end"
                  @click="textareaUpdate(homeResoult[3])"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="14"
                    fill="#fff"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                  </svg>
                </button>
              </div>
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
                <div @click="resoult3()" v-if="!resuolt.uch" class="item_title">
                  {{ homeResoult[2]?.text }}
                </div>
                <input
                  v-else
                  class="item_title"
                  type="text"
                  :value="homeResoult[2]?.text"
                  @change="updateHomeNavbar($event, homeResoult[2])"
                />
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
                <div
                  @click="resoult4()"
                  v-if="!resuolt.tort"
                  class="item_title"
                >
                  {{ homeResoult[1]?.text }}
                </div>
                <input
                  v-else
                  class="item_title"
                  type="text"
                  :value="homeResoult[1]?.text"
                  @change="updateHomeNavbar($event, homeResoult[1])"
                />
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
                <div
                  @click="resoult5()"
                  v-if="!resuolt.besh"
                  class="item_title"
                >
                  {{ homeResoult[0]?.text }}
                </div>
                <input
                  v-else
                  class="item_title"
                  type="text"
                  :value="homeResoult[0]?.text"
                  @change="updateHomeNavbar($event, homeResoult[0])"
                />
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
          <div @click="user1()" v-if="!user.bir" class="users_content_title">
            {{ user[1]?.text }}
          </div>
          <input
            v-else
            type="text"
            style="width: 250px"
            :value="user[1]?.text"
            @change="updateHomeNavbar($event, user[1])"
          />
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
            <div @click="user2()" v-if="!user.ikki" class="content_title">
              {{ user[0]?.text }}
            </div>
            <div class="textarea d-flex" v-else>
              <textarea
                ref="userTextarea"
                class="content_title text-black"
                type="text"
                rows="10"
                cols="50"
                :value="user[0]?.text"
              >
              </textarea>
              <div class="textarea_icon">
                <button
                  class="btn btn-success align-self-end"
                  @click="textareaUpdate1(user[0])"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="14"
                    fill="#fff"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                  </svg>
                </button>
              </div>
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
          <div
            @click="swiperVideo1()"
            v-if="!swiperVideo.bir"
            class="current_users_title"
          >
            {{ swiperVideoTitle[1]?.text }}
          </div>
          <input
            v-else
            type="text"
            style="width: 250px"
            :value="swiperVideoTitle[1]?.text"
            @change="updateHomeNavbar($event, swiperVideoTitle[1])"
          />
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
            <h3
              @click="swiperVideo2()"
              v-if="!swiperVideo.ikki"
              class="contact_title"
            >
              {{ swiperVideoTitle[0]?.text }}
            </h3>
            <input
              v-else
              type="text"
              style="width: 250px"
              :value="swiperVideoTitle[0]?.text"
              @change="updateHomeNavbar($event, swiperVideoTitle[0])"
            />
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
import baseurl from "../../server/baseurl";
import api from "../../server/api";
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
      url: baseurl,
      // get uchun params
      params: {
        id: 1,
      },
      result_params: {
        id: 2,
      },
      users_params: {
        id: 3,
      },
      swiperVideo_params: {
        id: 4,
      },
      // put update uchun data
      file_data: {
        source_id: 1,
      },
      file_update_data: {
        file_id: 0,
        file: null,
      },
      data: {
        source_id: 5,
      },
      fileData: {
        file_id: 1,
        file: 2,
      },
      item_data: {
        category_item_id: 0,
        text: "",
      },
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
      // bo'lim uchun o'zgaruvchi
      homeNavbar: [],
      homeResoult: [],
      navBarFile: [],
      homeBannerFile: [],
      user: [],
      swiperVideoTitle: [],
      // text open close
      navBar: {
        bir: false,
        ikki: false,
        uch: false,
        tort: false,
        besh: false,
      },
      resuolt: {
        bir: false,
        ikki: false,
        uch: false,
        tort: false,
        besh: false,
      },
      user: {
        bir: false,
        ikki: false,
      },
      swiperVideo: {
        bir: false,
        ikki: false,
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    VideoPlayer,
    contactBox,
  },
  computed: {
    logo() {
      return this.url + this.navBarFile[0]?.file;
    },
    data() {
      return this.homeNavbar.sort(
        (a, b) => parseFloat(a.ordinal_number) - parseFloat(b.ordinal_number)
      );
    },
  },
  methods: {
    findItems(id) {
      let item = homeNavbar.find((e) => e.ordinal_number == id);
      return item;
    },
    showTitle() {
      this.show = !this.show;
    },
    activeFunc() {
      this.isNavbarOpen = false;
    },
    openRight() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    imgFunc(e) {
      if (e.target.files[0]) {
        var picture = new FileReader();
        picture.readAsDataURL(e.target.files[0]);
        picture.addEventListener("load", function (event) {
          document
            .getElementById("uploadedImage")
            .setAttribute("src", event.target.result);
          this.logo = event.target.result;
        });
        this.fileData.file = e.target.files[0];
        this.fileData.file_id = 1;
        api
          .file_update_id(this.fileData)
          .then((res) => {
            this.$util.toastError("success", "Amaliyot bajarildi");
            this.getNavbarFile();
          })
          .catch((err) => {
            this.$util.toastError("error", "Ma'lumotni yuklab bo'lmadi");
          });
      }
    },
    // get zapros
    getNavbarFile() {
      api.file_files_source(this.data).then((res) => {
        this.navBarFile = res.data;
      });
    },
    getNavbar() {
      api
        .category_one(this.params)
        .then((res) => {
          this.homeNavbar = res.data?.category_items;
        })
        .catch((err) => {});
    },
    getHomeBannerFile() {
      api.file_files_source(this.file_data).then((res) => {
        this.homeBannerFile = res?.data;
      });
    },
    getResoult() {
      api
        .category_one(this.result_params)
        .then((res) => {
          this.homeResoult = res.data?.category_items;
        })
        .catch((err) => {});
    },
    getUser() {
      api
        .category_one(this.users_params)
        .then((res) => {
          this.user = res.data?.category_items;
        })
        .catch((err) => {});
    },
    getSwiperVideo() {
      api
        .category_one(this.swiperVideo_params)
        .then((res) => {
          this.swiperVideoTitle = res.data?.category_items;
        })
        .catch((err) => {});
    },
    // input open close
    navBar1() {
      setTimeout(() => {
        this.navBar.bir = true;
        this.navBar.ikki = false;
        this.navBar.uch = false;
        this.navBar.tort = false;
        this.navBar.besh = false;
      }, 1000);
    },
    navBar2() {
      setTimeout(() => {
        this.navBar.bir = false;
        this.navBar.ikki = true;
        this.navBar.uch = false;
        this.navBar.tort = false;
        this.navBar.besh = false;
      }, 1000);
    },
    navBar3() {
      setTimeout(() => {
        this.navBar.bir = false;
        this.navBar.ikki = false;
        this.navBar.uch = true;
        this.navBar.tort = false;
        this.navBar.besh = false;
      }, 1000);
    },
    navBar4() {
      setTimeout(() => {
        this.navBar.bir = false;
        this.navBar.ikki = false;
        this.navBar.uch = false;
        this.navBar.tort = true;
        this.navBar.besh = false;
      }, 1000);
    },
    navBar5() {
      setTimeout(() => {
        this.navBar.bir = false;
        this.navBar.ikki = false;
        this.navBar.uch = false;
        this.navBar.tort = false;
        this.navBar.besh = true;
      }, 1000);
    },
    resoult1() {
      this.resuolt.bir = true;
      this.resuolt.ikki = false;
      this.resuolt.uch = false;
      this.resuolt.tort = false;
      this.resuolt.besh = false;
    },
    resoult2() {
      this.resuolt.bir = false;
      this.resuolt.ikki = true;
      this.resuolt.uch = false;
      this.resuolt.tort = false;
      this.resuolt.besh = false;
    },
    resoult3() {
      this.resuolt.bir = false;
      this.resuolt.ikki = false;
      this.resuolt.uch = true;
      this.resuolt.tort = false;
      this.resuolt.besh = false;
    },
    resoult4() {
      this.resuolt.bir = false;
      this.resuolt.ikki = false;
      this.resuolt.uch = false;
      this.resuolt.tort = true;
      this.resuolt.besh = false;
    },
    resoult5() {
      this.resuolt.bir = false;
      this.resuolt.ikki = false;
      this.resuolt.uch = false;
      this.resuolt.tort = false;
      this.resuolt.besh = true;
    },
    user1() {
      (this.user.bir = true), (this.user.ikki = false);
    },
    user2() {
      (this.user.bir = false), (this.user.ikki = true);
    },
    swiperVideo1() {
      this.swiperVideo.bir = true;
      this.swiperVideo.ikki = false;
    },
    swiperVideo2() {
      this.swiperVideo.bir = false;
      this.swiperVideo.ikki = true;
    },
    // update put api
    updateHomeNavbar(event, item) {
      this.item_data.category_item_id = item.id;
      this.item_data.text = event.target.value;
      api
        .category_item_update(this.item_data)
        .then((res) => {
          this.$util.toastError("success", "Amaliyot bajarildi");
          this.getNavbar();
          this.getResoult();
          this.navBar.bir = false;
          this.navBar.ikki = false;
          this.navBar.uch = false;
          this.navBar.tort = false;
          this.navBar.besh = false;
          this.resuolt.bir = false;
          this.resuolt.ikki = false;
          this.resuolt.uch = false;
          this.resuolt.tort = false;
          this.resuolt.besh = false;
          this.user.bir = false;
          this.user.ikki = false;
          this.swiperVideo.bir = false;
          this.swiperVideo.ikki = false;
        })
        .catch((err) => {
          this.$util.toastError("error", "Ma'lumotni yuklab bo'lmadi");
        });
    },
    textareaUpdate(item) {
      (this.item_data.category_item_id = item.id),
        (this.item_data.text = this.$refs.resultTextarea.value);
      api
        .category_item_update(this.item_data)
        .then((res) => {
          this.$util.toastError("success", "Amaliyot bajarildi");
          this.getNavbar();
          this.getResoult();
          this.navBar.bir = false;
          this.navBar.ikki = false;
          this.navBar.uch = false;
          this.navBar.tort = false;
          this.navBar.besh = false;
          this.resuolt.bir = false;
          this.resuolt.ikki = false;
          this.resuolt.uch = false;
          this.resuolt.tort = false;
          this.resuolt.besh = false;
        })
        .catch((err) => {
          this.$util.toastError("error", "Ma'lumotni yuklab bo'lmadi");
        });
    },
    textareaUpdate1(item) {
      (this.item_data.category_item_id = item.id),
        (this.item_data.text = this.$refs.userTextarea.value);
      api
        .category_item_update(this.item_data)
        .then((res) => {
          this.$util.toastError("success", "Amaliyot bajarildi");
          this.getNavbar();
          this.getResoult();
          this.getUser();
          this.navBar.bir = false;
          this.navBar.ikki = false;
          this.navBar.uch = false;
          this.navBar.tort = false;
          this.navBar.besh = false;
          this.resuolt.bir = false;
          this.resuolt.ikki = false;
          this.resuolt.uch = false;
          this.resuolt.tort = false;
          this.resuolt.besh = false;
          this.user.bir = false;
          this.user.ikki = false;
        })
        .catch((err) => {
          this.$util.toastError("error", "Ma'lumotni yuklab bo'lmadi");
        });
    },
    // file update
    fileUpdate(event, item) {
      this.file_update_data = {
        file_id: item.id,
        file: event.target.files[0],
      };
      api
        .file_update_id(this.file_update_data)
        .then((res) => {
          this.$util.toastError("success", "Amaliyot bajarildi");
          this.getHomeBannerFile();
        })
        .catch((error) => {
          this.$util.toastError("error", "Ma'lumotni yuklab bo'lmadi");
        });
    },
  },
  created() {
    this.showTitle();
    this.getNavbarFile();
    this.getNavbar();
    this.getHomeBannerFile();
    this.getResoult();
    this.getUser();
    this.getSwiperVideo();
  },
};
</script>
  <style></style>
  