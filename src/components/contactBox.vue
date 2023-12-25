<template>
  <div class="contact">
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
      <h3 @click="connect1()" v-if="!connect.bir" class="contact_title">
        {{ connectData[6]?.text }}
      </h3>
      <input
        v-else
        type="text"
        :value="connectData[6]?.text"
        @change="putCategory($event, connectData[6])"
      />
    </div>
    <div class="">
      <div class="contact_box mx-auto d-flex col-12">
        <div
          class="contact_social-networks social col-md-6 col-xl-3 text-center align-items-center"
        >
          <div class="social_box mx-md-auto">
            <p @click="connect2()" v-if="!connect.ikki" class="social_title">
              {{ connectData[5]?.text }}
            </p>
            <input
              v-else
              type="text"
              :value="connectData[5]?.text"
              @change="putCategory($event, connectData[5])"
            />

            <i class="fa-solid fa-house"></i>
          </div>
          <div class="social_box">
            <p @click="connect3()" v-if="!connect.uch" class="social_title">
              {{ connectData[4]?.text }}
            </p>
            <input
              v-else
              type="text"
              :value="connectData[4]?.text"
              @change="putCategory($event, connectData[4])"
            />

            <div @click="connect4()" class="social_phone" v-if="!connect.tort">
              {{ connectData[3]?.text }}
            </div>
            <input
              v-else
              type="text"
              :value="connectData[3]?.text"
              @change="putCategory($event, connectData[3])"
            />
          </div>
          <div class="social_box">
            <p @click="connect5()" v-if="!connect.besh" class="social_title">
              {{ connectData[2]?.text }}
            </p>
            <input
              v-else
              type="text"
              :value="connectData[2]?.text"
              @change="putCategory($event, connectData[2])"
            />

            <div @click="connect6()" v-if="!connect.olti" class="social_phone">
              {{ connectData[1]?.text }}
            </div>
            <input
              v-else
              type="text"
              :value="connectData[1]?.text"
              @change="putCategory($event, connectData[1])"
            />
          </div>
        </div>
        <div class="contact_location">
          <p v-if="!connect.yetti" @click="connect7()" class="social_title">
            {{ connectData[0]?.text }}
          </p>
          <input
            v-else
            type="text"
            :value="connectData[0]?.text"
            @change="putCategory($event, connectData[0])"
          />
          <iframe
            v-if="!iframeBoalen"
            :src="iframeData[0]?.text"
            width="600"
            height="230"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <input
            v-else
            type="text"
            :value="iframeData[0]?.text"
            class="iframe_edit_input"
            @change="putCategory($event, iframeData[0])"
          />
          <label
            v-if="!iframeBoalen"
            for="ifreme"
            @click="iframe1()"
            class="iframe_edit"
          >
            <div class="card_content_btn text-bg-warning text-uppercase btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                width="18"
                viewBox="0 0 512 512"
              >
                <path
                  d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
                />
              </svg>
            </div>
          </label>
        </div>
        <div class="contact_wrap">
          <form class="contact_form">
            <input
              type="text"
              class="name_input form_input w-100"
              placeholder="Ism familiyangiz"
              v-model="body.name"
              required
            />
            <input
              type="text"
              class="phone_input form_input w-100"
              placeholder="Telefon raqamingiz"
              v-model="body.phone"
              required
            />
            <button class="form_btn" type="submit">Yuborish</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "../server/api";
export default {
  data() {
    return {
      body: {
        name: "",
        phone: "",
      },
      //   put update uchun data
      item_data: {
        category_item_id: 0,
        text: "",
      },
      // get params lar
      connect_params: {
        id: 5,
      },
      iframe_params: {
        id: 11,
      },
      // response data
      connectData: [],
      iframeData: [],
      //   input open close
      connect: {
        bir: false,
        ikki: false,
        uch: false,
        tort: false,
        besh: false,
        olti: false,
        yetti: false,
      },
      iframeBoalen: false,
    };
  },
  methods: {
    // get api
    getConnection() {
      api.category_one(this.connect_params).then((res) => {
        this.connectData = res.data.category_items;
      });
    },
    getIframe() {
      api.category_one(this.iframe_params).then((res) => {
        this.iframeData = res.data?.category_items;
      });
    },
    // open close function
    iframe1() {
      setTimeout(() => {
        this.iframeBoalen = true;
      }, 500);
    },
    connect1() {
      this.connect.bir = true;
      this.connect.ikki = false;
      this.connect.uch = false;
      this.connect.tort = false;
      this.connect.besh = false;
      this.connect.olti = false;
      this.connect.yetti = false;
    },
    connect2() {
      this.connect.bir = false;
      this.connect.ikki = true;
      this.connect.uch = false;
      this.connect.tort = false;
      this.connect.besh = false;
      this.connect.olti = false;
      this.connect.yetti = false;
    },
    connect3() {
      this.connect.bir = false;
      this.connect.ikki = false;
      this.connect.uch = true;
      this.connect.tort = false;
      this.connect.besh = false;
      this.connect.olti = false;
      this.connect.yetti = false;
    },
    connect4() {
      this.connect.bir = false;
      this.connect.ikki = false;
      this.connect.uch = false;
      this.connect.tort = true;
      this.connect.besh = false;
      this.connect.olti = false;
      this.connect.yetti = false;
    },
    connect5() {
      this.connect.bir = false;
      this.connect.ikki = false;
      this.connect.uch = false;
      this.connect.tort = false;
      this.connect.besh = true;
      this.connect.olti = false;
      this.connect.yetti = false;
    },
    connect6() {
      this.connect.bir = false;
      this.connect.ikki = false;
      this.connect.uch = false;
      this.connect.tort = false;
      this.connect.besh = false;
      this.connect.olti = true;
      this.connect.yetti = false;
    },
    connect7() {
      this.connect.bir = false;
      this.connect.ikki = false;
      this.connect.uch = false;
      this.connect.tort = false;
      this.connect.besh = false;
      this.connect.olti = false;
      this.connect.yetti = true;
    },
    // update function
    putCategory(event, item) {
      (this.item_data.category_item_id = item.id),
        (this.item_data.text = event.target.value);
      api
        .category_item_update(this.item_data)
        .then((res) => {
          this.getConnection();
          this.getIframe();
          this.connect.bir = false;
          this.connect.ikki = false;
          this.connect.uch = false;
          this.connect.tort = false;
          this.connect.besh = false;
          this.connect.olti = false;
          this.connect.yetti = false;
          this.iframeBoalen = false;
        })
        .catch((err) => {});
    },
  },
  created() {
    this.getConnection();
    this.getIframe();
  },
};
</script>
<style></style>
