<template>
  <div>
    <div class="background" style="padding-bottom: 20px;">
      <div class="nav">
        <div class="item">
          <input type="text" value="Biz haqimizda" />
          <div class="text">
            Biz haqimizda
          </div>
          <input
            type="text"
            value="Aloqa uchun"
          />
          <div class="text">
            Aloqa uchun
          </div>
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
          <input type="text" value="FAQ" />
          <div class="text">Faq</div>
          <input
            type="text"
            value="Video qo'llanma"
          />
          <div class="text">
            Video qo'llanma
          </div>
        </div>
        <div class="title">
          <input
            type="text"
            value="Biznesingizga oson yechim topamiz Biznesingizga oson"
          />
        </div>
        <div class="category col-10">
          <div
            class="category_top d-flex align-items-center justify-content-between"
          >
            <div class="content_top_title">
              <input type="text" value="bizning dasturlarimiz:" />
            </div>
            <div class="content_top_title d-flex">
              <input type="text" value="bOSHQA DASTURLARIMIZ haqida batafsil" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                width="30"
                fill="#fff"
                viewBox="0 0 320 512"
              >
                <path
                  d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                />
              </svg>
            </div>
          </div>
          <div class="category_bottom d-flex justify-content-between">
            <div class="item d-flex flex-column align-items-start">
              <div class="item_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="90"
                  height="90"
                  viewBox="0 0 124 124"
                  fill="none"
                >
                  <g filter="url(#filter0_f_849_526)">
                    <path
                      d="M80 62C80 71.9411 71.9411 80 62 80C52.0589 80 44 71.9411 44 62C44 52.0589 52.0589 44 62 44C71.9411 44 80 52.0589 80 62ZM51.6316 62C51.6316 67.7263 56.2737 72.3684 62 72.3684C67.7263 72.3684 72.3684 67.7263 72.3684 62C72.3684 56.2737 67.7263 51.6316 62 51.6316C56.2737 51.6316 51.6316 56.2737 51.6316 62Z"
                      fill="#0085FF"
                    />
                  </g>
                  <path
                    d="M80 62C80 71.9411 71.9411 80 62 80C52.0589 80 44 71.9411 44 62C44 52.0589 52.0589 44 62 44C71.9411 44 80 52.0589 80 62ZM51.6316 62C51.6316 67.7263 56.2737 72.3684 62 72.3684C67.7263 72.3684 72.3684 67.7263 72.3684 62C72.3684 56.2737 67.7263 51.6316 62 51.6316C56.2737 51.6316 51.6316 56.2737 51.6316 62Z"
                    fill="#0085FF"
                  />
                  <defs>
                    <filter
                      id="filter0_f_849_526"
                      x="0"
                      y="0"
                      width="124"
                      height="124"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="22"
                        result="effect1_foregroundBlur_849_526"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <input type="text" value="Savdo hozmaglar uchun" />
            </div>
            <div class="item d-flex flex-column align-items-start">
              <div class="item_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="90"
                  height="90"
                  viewBox="0 0 124 124"
                  fill="none"
                >
                  <g filter="url(#filter0_f_849_526)">
                    <path
                      d="M80 62C80 71.9411 71.9411 80 62 80C52.0589 80 44 71.9411 44 62C44 52.0589 52.0589 44 62 44C71.9411 44 80 52.0589 80 62ZM51.6316 62C51.6316 67.7263 56.2737 72.3684 62 72.3684C67.7263 72.3684 72.3684 67.7263 72.3684 62C72.3684 56.2737 67.7263 51.6316 62 51.6316C56.2737 51.6316 51.6316 56.2737 51.6316 62Z"
                      fill="#FFB800"
                    />
                  </g>
                  <path
                    d="M80 62C80 71.9411 71.9411 80 62 80C52.0589 80 44 71.9411 44 62C44 52.0589 52.0589 44 62 44C71.9411 44 80 52.0589 80 62ZM51.6316 62C51.6316 67.7263 56.2737 72.3684 62 72.3684C67.7263 72.3684 72.3684 67.7263 72.3684 62C72.3684 56.2737 67.7263 51.6316 62 51.6316C56.2737 51.6316 51.6316 56.2737 51.6316 62Z"
                    fill="#FFB800"
                  />
                  <defs>
                    <filter
                      id="filter0_f_849_526"
                      x="0"
                      y="0"
                      width="124"
                      height="124"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="22"
                        result="effect1_foregroundBlur_849_526"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <input type="text" value="Qurilish davlat obyektlari uchun" />
            </div>
            <div class="item d-flex flex-column align-items-start">
              <div class="item_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="90"
                  height="90"
                  viewBox="0 0 124 124"
                  fill="none"
                >
                  <g filter="url(#filter0_f_849_526)">
                    <path
                      d="M80 62C80 71.9411 71.9411 80 62 80C52.0589 80 44 71.9411 44 62C44 52.0589 52.0589 44 62 44C71.9411 44 80 52.0589 80 62ZM51.6316 62C51.6316 67.7263 56.2737 72.3684 62 72.3684C67.7263 72.3684 72.3684 67.7263 72.3684 62C72.3684 56.2737 67.7263 51.6316 62 51.6316C56.2737 51.6316 51.6316 56.2737 51.6316 62Z"
                      fill="#00FF47"
                    />
                  </g>
                  <path
                    d="M80 62C80 71.9411 71.9411 80 62 80C52.0589 80 44 71.9411 44 62C44 52.0589 52.0589 44 62 44C71.9411 44 80 52.0589 80 62ZM51.6316 62C51.6316 67.7263 56.2737 72.3684 62 72.3684C67.7263 72.3684 72.3684 67.7263 72.3684 62C72.3684 56.2737 67.7263 51.6316 62 51.6316C56.2737 51.6316 51.6316 56.2737 51.6316 62Z"
                    fill="#00FF47"
                  />
                  <defs>
                    <filter
                      id="filter0_f_849_526"
                      x="0"
                      y="0"
                      width="124"
                      height="124"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="22"
                        result="effect1_foregroundBlur_849_526"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <input
                type="text"
                value="Ishlab chiqarish
  "
              />
            </div>
            <div class="item d-flex flex-column align-items-start">
              <div class="item_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="90"
                  height="90"
                  viewBox="0 0 124 124"
                  fill="none"
                >
                  <g filter="url(#filter0_f_849_526)">
                    <path
                      d="M80 62C80 71.9411 71.9411 80 62 80C52.0589 80 44 71.9411 44 62C44 52.0589 52.0589 44 62 44C71.9411 44 80 52.0589 80 62ZM51.6316 62C51.6316 67.7263 56.2737 72.3684 62 72.3684C67.7263 72.3684 72.3684 67.7263 72.3684 62C72.3684 56.2737 67.7263 51.6316 62 51.6316C56.2737 51.6316 51.6316 56.2737 51.6316 62Z"
                      fill="#AD00FF"
                    />
                  </g>
                  <path
                    d="M80 62C80 71.9411 71.9411 80 62 80C52.0589 80 44 71.9411 44 62C44 52.0589 52.0589 44 62 44C71.9411 44 80 52.0589 80 62ZM51.6316 62C51.6316 67.7263 56.2737 72.3684 62 72.3684C67.7263 72.3684 72.3684 67.7263 72.3684 62C72.3684 56.2737 67.7263 51.6316 62 51.6316C56.2737 51.6316 51.6316 56.2737 51.6316 62Z"
                    fill="#AD00FF"
                  />
                  <defs>
                    <filter
                      id="filter0_f_849_526"
                      x="0"
                      y="0"
                      width="124"
                      height="124"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="22"
                        result="effect1_foregroundBlur_849_526"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <input
                type="text"
                value="Qurilish mahsulotlarini ishlab chiqarish"
              />
            </div>
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
      inputType: false,
    };
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
    tekshiruv() {
      setTimeout(() => {
        this.inputType = true;
      }, 1500);
    },
    rout() {
      this.$router.push("/users");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>