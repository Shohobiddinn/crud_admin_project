<template>
  <div>
    <img class="bg_img" src="../../assets/images/back-img.png" alt="bg_img" />
    <div class="nav">
      <div class="item">
        <input type="text" value="Biz haqimizda" /><input
          type="text"
          value="Aloqa uchun"
        />
        <div class="item_image">
          <input id="img" type="file" @change="imgFunc($event)" />
          <label class="imglabel" for="img">
            <img
              id="uploadedImage"
              src="../../assets/images/Logo.png"
              alt=""
            />
          </label>
        </div>
        <input type="text" value="FAQ" /><input
          type="text"
          value="Video qo'llanma"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    imgFunc(e) {
      if (e.target.files[0]) {
        var picture = new FileReader();
        picture.readAsDataURL(e.target.files[0]);
        picture.addEventListener("load", function (event) {
          document
            .getElementById("uploadedImage")
            .setAttribute("src", event.target.result);
            console.log(event.target.result);
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>