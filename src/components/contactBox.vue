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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189.93708993720526!2d71.786022984421!3d40.38683802209946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb836751654afb%3A0x616156310421e28a!2z0JjQvdGC0LXRgNC90LXRgi3QutCw0YTQtSBTYXl0ZXg!5e0!3m2!1sru!2s!4v1699867545553!5m2!1sru!2s"
            width="600"
            height="230"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
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
        id: 12,
      },

      // o'zgaruvchi bo'lim
      connectData: [],
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
    };
  },
  methods: {
    // get api
    getConnection() {
      api.category_one(this.connect_params).then((res) => {
        this.connectData = res.data.category_items;
      });
    },
    // open close function
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
          this.connect.bir = false;
          this.connect.ikki = false;
          this.connect.uch = false;
          this.connect.tort = false;
          this.connect.besh = false;
          this.connect.olti = false;
          this.connect.yetti = false;
        })
        .catch((err) => {});
    },
  },
  created() {
    this.getConnection();
  },
};
</script>
<style></style>
