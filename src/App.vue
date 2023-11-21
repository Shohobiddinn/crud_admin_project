<template>
  <div>
    <div class="hero">
      <div class="d-flex juctify-content-between col-13">
        <div class="sidebar col-2 text-bg-warning">
          <div class="sidebar_logo">
            <img src="./assets/images/Logo.png" alt="photo" />
          </div>
          <div class="item" v-for="item in sidebar" :key="item">
            <router-link to="/" class="item_link">
              {{ item }}
            </router-link>
          </div>
        </div>
        <div class="contents col-10">
          <div class="contents_top d-flex justify-content-between p-2">
            <h1 class="contents_top_logo_title text-uppercase text-end col-6">
              crud group
            </h1>
            <div class="exit d-flex align-items-center">
              <div class="exit_icon">
                <svg
                  width="32"
                  height="32"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="blue"
                >
                  <path
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                  />
                </svg>
              </div>
              <div class="exit_title">Chiqish</div>
            </div>
          </div>
          <div class="content text-bg-warning">
            <router-view />
          </div>
          <div class="contents_bottom col-10">
            <h1 class="contents_bottom_title text-uppercase text-center col-8">
              crud group
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebar: ["Hodimlar", "prektlar", "targetlar", "sozlamar"],
    };
  },
};
</script>

<style lang="scss" scoped>
.hero {
  height: 100vh;
  .sidebar {
    height: 100vh !important;
    background: linear-gradient(180deg, transparent 0%, transparent 100%);
    backdrop-filter: blur(100px);
    background-color: #1e1e42 !important;
    &_logo {
      img {
        width: 250px !important;
        height: 70px !important;
        object-fit: contain;
        margin-left: 20px;
        margin-bottom: 50px;
      }
    }
    .item {
      padding-left: 20px;
      &_link {
        display: inline-block;
        font-family: sans-serif;
        font-weight: 600;
        font-size: 25px;
        text-decoration: none;
        color: #fff;
        text-transform: capitalize;
        margin-bottom: 20px;
      }
    }
  }
  .contents {
    right: 0 !important;
    position: absolute;
    top: 0;

    border-bottom: 2px solid #1e1e42;

    &_top {
      background-color: #1e1e42;
      &_logo_title {
        color: #fff;
      }
      .exit {
        cursor: pointer;
        &_title {
          font-weight: 700;
          font-size: 20px !important;
          margin-left: 8px;
          user-select: none;
          color: #fff;
        }
      }
    }
    &_bottom {
      background-color: #1e1e42;
      position: fixed;
      bottom: 0;
      width: 100%;
      &_title {
        color: #fff;
      }
    }
  }
}
</style>