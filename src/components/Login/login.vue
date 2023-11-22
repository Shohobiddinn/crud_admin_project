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
          <img src="../../assets/images/insell.png" alt="logo" />
        </div>
        <div class="login_title">
            xush kelibsiz
        </div>
        <form action="login" class="form_login d-flex flex-column align-items-center justify-content-center">
          <div class="form_login_input d-flex align-items-center">
            <div class="form_login_input_icon ">
                <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
            </div>
            <input type="text" placeholder="username" />
          </div>
          <div class="form_login_input d-flex align-items-center">
            <div class="form_login_input_icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
            </div>
            <input  type="password" placeholder="password" />
          </div>
          <button type="submit" class="login_btn  text-uppercase"> kirish</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>