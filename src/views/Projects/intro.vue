<template>
  <div class="background">
    <div class="home-pc">
      <sidebar />
      <div class="hero">
        <div class="container">
          <div class="hero__box" v-if="show">
            <h3
              class="hero__title title1"
              data-aos="fade-down"
              data-aos-duration="500"
            >
              Biznesingizga <span>oson</span>
            </h3>
            <h3
              class="hero__title title1 hero__title--bottom"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              yechim topamiz
            </h3>
          </div>
          <div class="hero__box" v-else>
            <h3
              class="hero__title title2"
              data-aos="fade-down"
              data-aos-duration="500"
            >
              Ishingizni
            </h3>
            <h3
              class="hero__title title2 hero__title--bottom"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              osonlashtiramiz
            </h3>
          </div>
        </div>
      </div>
      <div class="intro">
        <div class="container">
          <div class="intro_top">
            <div class="intro_top_title">bizning dasturlarimiz:</div>
            <router-link to="/home">
              <div class="intro_top_content">
                <div class="intro_top_content_title">
                  boshqa dasturlarimiz haqida batafsil
                </div>
                <div class="intro_top_content_icon">
                  <svg
                    width="25"
                    height="44"
                    viewBox="0 0 25 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0H3.87931L25 22L3.87931 44H0L21.1207 22L0 0Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </router-link>
          </div>
          <div class="intro_bottom">
            <div class="content" v-for="item in forServise" :key="item">
              <router-link :to="item.path" class="content_link">
                <div class="content_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="104"
                    height="104"
                    viewBox="0 0 104 104"
                    fill="none"
                  >
                    <g filter="url(#filter0_f_6_159)">
                      <path
                        d="M67.0706 52.0353C67.0706 60.3391 60.3391 67.0706 52.0353 67.0706C43.7315 67.0706 37 60.3391 37 52.0353C37 43.7315 43.7315 37 52.0353 37C60.3391 37 67.0706 43.7315 67.0706 52.0353ZM43.3746 52.0353C43.3746 56.8185 47.2521 60.696 52.0353 60.696C56.8185 60.696 60.696 56.8185 60.696 52.0353C60.696 47.2521 56.8185 43.3746 52.0353 43.3746C47.2521 43.3746 43.3746 47.2521 43.3746 52.0353Z"
                        :fill="item?.color"
                      />
                    </g>
                    <path
                      d="M67.0706 52.0353C67.0706 60.3391 60.3391 67.0706 52.0353 67.0706C43.7315 67.0706 37 60.3391 37 52.0353C37 43.7315 43.7315 37 52.0353 37C60.3391 37 67.0706 43.7315 67.0706 52.0353ZM43.3746 52.0353C43.3746 56.8185 47.2521 60.696 52.0353 60.696C56.8185 60.696 60.696 56.8185 60.696 52.0353C60.696 47.2521 56.8185 43.3746 52.0353 43.3746C47.2521 43.3746 43.3746 47.2521 43.3746 52.0353Z"
                      :fill="item?.color"
                    />
                    <defs>
                      <filter
                        id="filter0_f_6_159"
                        x="0.247059"
                        y="0.247059"
                        width="103.576"
                        height="103.576"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="18.3765"
                          result="effect1_foregroundBlur_6_159"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div class="content_title">{{ item?.title }}</div>
                <div
                  class="content_show"
                  :style="` background:linear-gradient(180deg, ${item?.color} 0%, ${item?.color} 100%);     box-shadow: 0 0  30px ${item?.color};`"
                ></div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-mb">
      <div class="home-left">
        <div class="hero-ft">
          <button class="hero-ft__btn d-flex align-items-center justify-content-center" type="button" @click="openLeft()">
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
          </button>
          <div class="hero-ft__box">
            <h3 class="hero-ft__title">
              <b
                >Bizning <br />
                dasturlarimiz:</b
              >
            </h3>
            <div
              class="content d-flex flex-column"
              v-for="item in forServise"
              :key="item"
            >
              <router-link :to="item.path" class="content_link">
                <span>
                  <i
                    class="fa-solid fa-circle-dot fa-xl"
                    :style="` color:${item.color} ;box-shadow: 0px 0px 25px ${item.color};`"
                  ></i>
                </span>
                <h4 class="content_title">{{ item?.title }}</h4>
                <div
                  class="content_show"
                  :style="` background:linear-gradient(180deg, ${item?.color} 0%, ${item?.color} 100%);     box-shadow: 0 0  30px ${item?.color};`"
                ></div>
              </router-link>
            </div>
            <router-link to="/">
              <div class="d-flex align-items-center">
                <div class="hero-ft__bottom">
                  boshqa <br />
                  dasturlarimiz <br />
                  haqida batafsil
                </div>
                <div class="intro_top_content_icon">
                  <svg
                    width="25"
                    height="44"
                    viewBox="0 0 25 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0H3.87931L25 22L3.87931 44H0L21.1207 22L0 0Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <img
        class="crud-logo"
        src="../../assets/images/Crud.svg"
        width="169"
        height="20"
        alt=""
      />
      <div class="">
        <div class="hero-mb__box" v-if="show">
          <h3
            class="hero-mb__title title1"
            data-aos="fade-down"
            data-aos-duration="500"
          >
            Biznesingizga <span>oson</span>
          </h3>
          <h3
            class="hero-mb__title title1 hero-mb__title--bottom"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            yechim topamiz
          </h3>
        </div>
        <div class="hero-mb__box" v-else>
          <h3
            class="hero-mb__title title2"
            data-aos="fade-down"
            data-aos-duration="500"
          >
            Ishingizni
          </h3>
          <h3
            class="hero-mb__title title2 hero-mb__title--bottom"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            osonlashtiramiz
          </h3>
        </div>
      </div>
      <div class="home-sidebar">
        <nav class="home-sidebar__nav">
          <button class="home-sidebar__btn d-flex align-items-center justify-content-center" type="button" @click="openRight()">
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
          </button>
          <ul class="home-sidebar__list">
            <li class="home-sidebar__item">
              <RouterLink @click="activeFunc()" to="/">
                <img
                  class="home-sidebar__img"
                  src="../../assets/images/Crud.svg"
                  alt=""
                />
              </RouterLink>
            </li>
            <li class="home-sidebar__item">
              <RouterLink
                @click="activeFunc()"
                class="home-sidebar__link"
                to="/about"
                >Biz haqimizda</RouterLink
              >
            </li>

            <li class="home-sidebar__item">
              <RouterLink
                @click="activeFunc()"
                class="home-sidebar__link"
                to="/connection"
                >Aloqa uchun</RouterLink
              >
            </li>

            <li class="home-sidebar__item">
              <RouterLink
                @click="activeFunc()"
                class="home-sidebar__link"
                to="/faq"
                >FAQ</RouterLink
              >
            </li>

            <li class="home-sidebar__item">
              <RouterLink
                @click="activeFunc()"
                class="home-sidebar__link"
                to="/videos"
                >Video qo'llanmalar</RouterLink
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "../../components/sidebar.vue";
export default {
  name: "Intro",
  data() {
    return {
      show: true,
      text: [
        {
          title: "Biznesingizga <span>oson</span> yechim topamiz",
        },
        {
          title: "Ishingizni osonlashtiramiz",
        },
      ],
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
      forServise: [
        {
          color: "#0085FF",
          title: "Savdo hozmaglar uchun",
          path: "/xozmag",
        },
        {
          color: "#FFB800",
          title: "Qurilish davlat obyektlari uchun",
          path: "/structure",
        },
        {
          color: "#00FF47",
          title: "Ishlab chiqarish",
          path: "/manufacture",
        },
        {
          color: "#AD00FF",
          title: "Qurilish mahsulotlarini ishlab chiqarish",
          path: "/output",
        },
      ],
    };
  },
  components: { sidebar },
  methods: {
    showTitle() {
      setInterval(() => {
        this.show = !this.show;
      }, 2000);
    },
    openRight() {
      document.querySelector(".home-sidebar").classList.toggle("open_sidebar");
    },
    openLeft() {
      document.querySelector(".home-left").classList.toggle("open-menu");
    },
  },
  created() {
    this.showTitle();
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
