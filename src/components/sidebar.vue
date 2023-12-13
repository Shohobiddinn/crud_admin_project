<script>
import api from "../server/api";
import baseurl from "../server/baseurl";
export default {
  name: "sidebar",
  data() {
    return {
      isNavbarOpen: false,
      navBarItem: null,
      params: {
        id: 5,
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
      navBarInput: {
        bir: false,
        ikki: false,
        uch: false,
        tort: false,
      },
      url: baseurl,
      navBar: [],
      navBarFile: [],
    };
  },
  components: {
    baseurl,
  },
  computed: {
    logo() {
      return this.url + this.navBarFile[0]?.file;
    },
  },
  methods: {
    activeFunc() {
      this.isNavbarOpen = false;
    },
    openRight() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    getNavber() {
      api
        .category_one(this.params)
        .then((res) => {
          this.navBar = res.data.category_items;
        })
        .catch((err) => {});
    },
    getNavbarFile() {
      api.file_files_source(this.data).then((res) => {
        this.navBarFile = res.data;
      });
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
    navBarItemEdit(event, item) {
      (this.item_data.category_item_id = item.id),
        (this.item_data.text = event.target.value);
      api
        .category_item_update(this.item_data)
        .then((res) => {
          this.$util.toastError("success", "Amaliyot bajarildi");
          this.getNavber();
          this.navBarInput.bir = false;
          this.navBarInput.ikki = false;
          this.navBarInput.uch = false;
          this.navBarInput.tort = false;
        })
        .catch((err) => {
          this.$util.toastError("error", "Ma'lumotni yuklab bo'lmadi");
        });
    },
    // input open close
    navBarInputBir() {
      setTimeout(() => {
        this.navBarInput.bir = true;
        this.navBarInput.ikki = false;
        this.navBarInput.uch = false;
        this.navBarInput.tort = false;
      }, 1000);
    },
    navBarInputIkki() {
      setTimeout(() => {
        this.navBarInput.bir = false;
        this.navBarInput.ikki = true;
        this.navBarInput.uch = false;
        this.navBarInput.tort = false;
      }, 1000);
    },
    navBarInputUch() {
      setTimeout(() => {
        this.navBarInput.bir = false;
        this.navBarInput.ikki = false;
        this.navBarInput.uch = true;
        this.navBarInput.tort = false;
      }, 1000);
    },
    navBarInputTort() {
      setTimeout(() => {
        this.navBarInput.bir = false;
        this.navBarInput.ikki = false;
        this.navBarInput.uch = false;
        this.navBarInput.tort = true;
      }, 1000);
    },
    // router link
    routerBir() {
      this.$router.push("/about");
    },
    routerIkki() {
      this.$router.push("/connection");
    },
    routerUch() {
      this.$router.push("/faq");
    },
    routerTort() {
      this.$router.push("/videos");
    },
  },
  created() {
    this.getNavber();
    this.getNavbarFile();
  },
};
</script>

<template>
  <div class="side-nav">
    <nav class="navigate">
      <ul class="navigate_list">
        <li class="navigate_item">
          <div
            v-if="!navBarInput.bir"
            @click="navBarInputBir()"
            @dblclick="routerBir()"
            class="navigate_link"
          >
            {{ navBar[0]?.text }}
          </div>
          <input
            v-if="navBarInput.bir"
            type="text"
            :value="navBar[0]?.text"
            @change="navBarItemEdit($event, navBar[0])"
            ref="navbarInput"
          />
        </li>
        <li class="navigate_item"><b>.</b></li>

        <li class="navigate_item">
          <div
            v-if="!navBarInput.ikki"
            @click="navBarInputIkki()"
            @dblclick="routerIkki()"
            class="navigate_link"
          >
            {{ navBar[1]?.text }}
          </div>
          <input
            v-if="navBarInput.ikki"
            type="text"
            :value="navBar[1]?.text"
            @change="navBarItemEdit($event, navBar[1])"
            ref="navbarInput"
          />
        </li>
        <li class="navigate_item"><b>.</b></li>

        <li class="navigate_item">
          <input
            class="d-none"
            ref="logoRef"
            id="img"
            type="file"
            @change="imgFunc($event)"
          />
          <label class="imglabel" for="img">
            <img id="uploadedImage" class="imgLogo" :src="logo" alt="" />
          </label>
        </li>

        <li class="navigate_item">
          <div
            v-if="!navBarInput.uch"
            @click="navBarInputUch()"
            @dblclick="routerUch()"
            class="navigate_link"
          >
            {{ navBar[2]?.text }}
          </div>
          <input
            v-if="navBarInput.uch"
            type="text"
            :value="navBar[2]?.text"
            @change="navBarItemEdit($event, navBar[2])"
            ref="navbarInput"
          />
        </li>
        <li class="navigate_item"><b>.</b></li>

        <li class="navigate_item">
          <div
            v-if="!navBarInput.tort"
            @click="navBarInputTort()"
            @dblclick="routerTort()"
            class="navigate_link"
          >
            {{ navBar[3]?.text }}
          </div>
          <input
            v-if="navBarInput.tort"
            type="text"
            :value="navBar[3]?.text"
            @change="navBarItemEdit($event, navBar[3])"
            ref="navbarInput"
          />
        </li>
      </ul>
    </nav>
    <div class="home-sidebar_navbar col-10 m-auto">
      <div class="d-flex justify-content-between py-4">
        <div @click="activeFunc()">
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
              :src="logo"
              alt=""
              style="width: 300px; height: 50px; object-fit: contain"
            />
          </label>
        </div>
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
              <div @click="activeFunc()">
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
                    :src="logo"
                    alt=""
                    style="width: 200px; height: 50px; object-fit: contain"
                  />
                </label>
              </div>
            </li>
            <li class="home-sidebar__item">
              <div
                v-if="!navBarInput.bir"
                @click="navBarInputBir()"
                @dblclick="routerBir()"
                class="home-sidebar__link"
              >
                {{ navBar[0]?.text }}
              </div>
              <input
                v-if="navBarInput.bir"
                type="text"
                :value="navBar[0]?.text"
                @change="navBarItemEdit($event, navBar[0])"
                ref="navbarInput"
              />
            </li>

            <li class="home-sidebar__item">
              <div
                v-if="!navBarInput.ikki"
                @click="navBarInputIkki()"
                @dblclick="routerIkki()"
                class="home-sidebar__link"
              >
                {{ navBar[1]?.text }}
              </div>
              <input
                v-if="navBarInput.ikki"
                type="text"
                :value="navBar[1]?.text"
                @change="navBarItemEdit($event, navBar[1])"
                ref="navbarInput"
              />
            </li>

            <li class="home-sidebar__item">
              <div
                v-if="!navBarInput.uch"
                @click="navBarInputUch()"
                @dblclick="routerUch()"
                class="home-sidebar__link"
              >
                {{ navBar[2]?.text }}
              </div>
              <input
                v-if="navBarInput.uch"
                type="text"
                :value="navBar[2]?.text"
                @change="navBarItemEdit($event, navBar[2])"
                ref="navbarInput"
              />
            </li>

            <li class="home-sidebar__item">
              <div
                v-if="!navBarInput.tort"
                @click="navBarInputTort()"
                @dblclick="routerTort()"
                class="home-sidebar__link"
              >
                {{ navBar[3]?.text }}
              </div>
              <input
                v-if="navBarInput.tort"
                type="text"
                :value="navBar[3]?.text"
                @change="navBarItemEdit($event, navBar[3])"
                ref="navbarInput"
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<style></style>
