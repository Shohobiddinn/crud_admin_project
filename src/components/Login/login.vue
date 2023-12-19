<template>
  <div>
    <div class="bg_img">
      <img src="../../assets/images/login_bg.jpg" alt="" />
    </div>
    <div
      class="login d-flex flex-column align-items-center justify-content-center"
    >
      <div
        class="login_modal d-flex flex-column align-items-center justify-content-center col-4"
      >
        <div class="login_logo">
          <img src="../../assets/images/Logo2.png" alt="logo" />
        </div>
        <div class="login_title">xush kelibsiz</div>
        <form
          @submit.prevent="sign_in"
          class="form_login d-flex flex-column align-items-center justify-content-center"
        >
          <div class="form_login_input d-flex align-items-center">
            <div class="form_login_input_icon">
              <svg
                width="25"
                height="25"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="username"
              v-model="data.username"
              autocomplete="off"
              required
              style="text-transform: lowercase;"
            />
          </div>
          <div class="form_login_input d-flex align-items-center">
            <div
              class="form_login_input_icon"
              @click="inputType"
              style="cursor: pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="25"
                width="25"
                viewBox="0 0 640 512"
              >
                <path
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"
                />
              </svg>
            </div>
            <input
              type="password"
              placeholder="password"
              v-model="data.password"
              ref="inputPassword"
              required
              autocomplete="off"
              style="text-transform: lowercase;"
            />
          </div>
          <button type="submit" class="login_btn text-uppercase">kirish</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import api from "../../server/api";
export default {
  data() {
    return {
      data: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    sign_in() {
      api
        .login(this.data)
        .then((res) => {
          this.$router.push("/");
          this.$store.dispatch("setUser", res.data);
        })
        .catch((err) => {
          if (err.response.status == 400) {
            this.$util.toastError(
              "error",
              "Telefon raqam yoki parolda xatolik"
            );
          }
          if (err.response.status == 500) {
            this.$util.toastError("error", "Serverda xatolik!");
          }
        });
    },
    inputType() {
      if (this.$refs.inputPassword.type != "text") {
        this.$refs.inputPassword.type = "text";
      } else {
        this.$refs.inputPassword.type = "password";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>