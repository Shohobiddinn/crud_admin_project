<template>
  <div class="apps">
    <div class="bg_img">
      <img src="../assets/images/backgruond.jpg" alt="" />
    </div>
    <div class="hero">
      <div class="d-flex juctify-content-between col-13">
        <div class="sidebar col-2" :class="{ active: sidebarModal }">
          <div class="sidebar_logo">
            <router-link to="/users" @click="sidebarModal = false">
              <img src="../assets/images/Logo2.png" alt="photo" />
            </router-link>
          </div>

          <div class="item">
            <RouterLink
              class="item_link d-flex align-items-center"
              v-for="item in routers"
              :key="item"
              :class="{ active: $route.path == item.path }"
              :to="item.path"
              @click="sidebarModal = false"
            >
              <div class="item_link_icon">
                <img :src="getImageUrl(item?.icon)" :alt="item?.icon" />
              </div>
              <div class="item_link_title">{{ item?.name }}</div>
            </RouterLink>
          </div>
        </div>
        <div class="contents col-10">
          <div class="contents_top d-flex justify-content-end p-2">
            <div
              class="sidebar_icon d-flex flex-column"
              @click="sidebarModal = !sidebarModal"
            >
              <span></span><span></span><span></span>
            </div>
            <div class="exit d-flex align-items-end">
              <div class="exit_icon" @click="toggleProfil">
                <svg
                  width="32"
                  height="32"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="#998FB3"
                >
                  <path
                    d="M224 256A128 128 0 1 1 224 0a128 128 0 1 1 0 256zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2H224h19.7c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 36-146.9c2-8.1 9.8-13.4 17.9-11.3c70.1 17.6 121.9 81 121.9 156.4c0 17-13.8 30.7-30.7 30.7H285.5c-2.1 0-4-.4-5.8-1.1l.3 1.1H168l.3-1.1c-1.8 .7-3.8 1.1-5.8 1.1H30.7C13.8 512 0 498.2 0 481.3c0-75.5 51.9-138.9 121.9-156.4c8.1-2 15.9 3.3 17.9 11.3l36 146.9 33.4-123.9z"
                  />
                </svg>
              </div>
              <div class="profil_modal" :class="{ active: profil }">
                <div class="profil_modal_close">
                  <button class="profil_modal_close_btn" @click="profil_close">
                    &#10006;
                  </button>
                </div>
                <div class="profil_modal_content" @click="exitProfil">
                  <div class="profil_modal_content_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="25"
                      width="25"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"
                      />
                    </svg>
                  </div>
                  <div class="profil_modal_content_title">chiqish</div>
                </div>
                <div class="profil_modal_content">
                  <div class="profil_modal_content_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="25"
                      width="25"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M224 256A128 128 0 1 1 224 0a128 128 0 1 1 0 256zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2H224h19.7c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 36-146.9c2-8.1 9.8-13.4 17.9-11.3c70.1 17.6 121.9 81 121.9 156.4c0 17-13.8 30.7-30.7 30.7H285.5c-2.1 0-4-.4-5.8-1.1l.3 1.1H168l.3-1.1c-1.8 .7-3.8 1.1-5.8 1.1H30.7C13.8 512 0 498.2 0 481.3c0-75.5 51.9-138.9 121.9-156.4c8.1-2 15.9 3.3 17.9 11.3l36 146.9 33.4-123.9z"
                      />
                    </svg>
                  </div>
                  <div class="profil_modal_content_title">profil</div>
                </div>
              </div>
            </div>
          </div>
          <div class="content_view">
            <router-view> </router-view>
          </div>
          <div class="contents_bottom col-10"></div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import tahrirlash from "../components/tahrirlash.vue";
export default {
  data() {
    return {
      profil: false,
      sidebarModal: false,
    };
  },
  components: {
    tahrirlash,
  },
  methods: {
    toggleProfil() {
      this.profil = !this.profil;
    },
    profil_close() {
      this.profil = false;
    },
    exitProfil() {
      localStorage.removeItem("user");
      this.$router.push("/login");
    },
    getImageUrl(name) {
      return new URL(`../assets/icons/${name}`, import.meta.url).href;
    },
  },
  mounted() {
    if (this.$route.path == "/") this.$router.push("/users");
  },
  computed: {
    routers() {
      return [
        {
          icon: "user.svg",
          name: "hodimlar",
          path: "/users",
        },
        {
          icon: "project.svg",
          name: "loyihalar",
          path: "/projects",
        },
        {
          icon: "target.svg",
          name: "targetlar",
          path: "/targets",
        },
        {
          icon: "category.svg",
          name: "toifalar",
          path: "/categorys",
        },
      ];
    },
  },
};
</script>
  
  <style lang="scss" scopd>
</style>