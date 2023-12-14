<template>
  <div class="background">
    <div class="faq">
      <div class="container-c">
        <sidebar />
        <div class="title-box">
          <img src="/src/assets/images/slash.svg" alt="" />
          <h3 @click="faq1()" v-if="!faq.bir" class="contact_title">{{ faqData[0]?.text }}</h3>
          <input v-else type="text" style="width: 250px;  " :value="faqData[0]?.text" @change="putCategory($event,faqData[0])">
        </div>
        <div class="faq_box">
          <div class="faq_item item1">
            <p class="faq_question">
              Dastur bitsayu uni qanday ishga tushirman ?
            </p>
            <div class="textarea d-flex">
              <textarea
                ref="faqTextarea1"
                class="content_title text-black"
                type="text"
                rows="10"
                cols="50"
                :value="faqData[12]?.text"
                onchange="alert('You just changed the textarea.')"
              >
              </textarea>
              <div class="textarea_icon">
                <button
                  class="btn btn-success align-self-end"
                  @click="textareaUpdate(homeResoult[3])"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="14"
                    fill="#fff"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <p class="faq_answer">
              Dasturni ishga tushirish uchun maxsus hodim biriktiriladi
            </p>
            <div class="textarea d-flex">
              <textarea
                ref="resultTextarea"
                class="content_title text-black"
                type="text"
                rows="10"
                cols="50"
                :value="faqData[11]?.text"
                onchange="alert('You just changed the textarea.')"
              >
              </textarea>
              <div class="textarea_icon">
                <button
                  class="btn btn-success align-self-end"
                  @click="textareaUpdate(homeResoult[3])"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="14"
                    fill="#fff"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="faq_item item2">
            <p class="faq_question">
              Dastur ishga tushdi, qabul qilib oldik malum vaqtdan keyin
              ishlamay qoldi! Endi nima bo'ladi ?
            </p>
                  <div class="textarea d-flex">
              <textarea
                ref="resultTextarea"
                class="content_title text-black"
                type="text"
                rows="10"
                cols="50"
                :value="faqData[12]?.text"
                onchange="alert('You just changed the textarea.')"
              >
              </textarea>
              <div class="textarea_icon">
                <button
                  class="btn btn-success align-self-end"
                  @click="textareaUpdate(homeResoult[3])"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="14"
                    fill="#fff"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <p class="faq_answer">
              Dastur ichida ,,foydalanish video instruksiyasi'' mavjud bo'lib u
              yerda video qo'llanma orqali boshlang'ich ko'nikmalarni olishi
              mumkin. Telegramdagi yopiq guruh orqali tushunmagan narsalarini
              so'rashlari mumkin!
            </p>
                  <div class="textarea d-flex">
              <textarea
                ref="resultTextarea"
                class="content_title text-black"
                type="text"
                rows="10"
                cols="50"
                :value="faqData[12]?.text"
                onchange="alert('You just changed the textarea.')"
              >
              </textarea>
              <div class="textarea_icon">
                <button
                  class="btn btn-success align-self-end"
                  @click="textareaUpdate(homeResoult[3])"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="14"
                    fill="#fff"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="faq_item item3">
            <p class="faq_question">
              Dastur ishga tushdi, xodimlarimda o'zgarish bo'ldi, boshqa
              bo'limga o'tdi, ishdan ketdi va h.k O'rniga boshqa xodim keldi, u
              hali dasturdan foydalanishni bilmaydi! Endi nima bo'ladi?
            </p>
                  <div class="textarea d-flex">
              <textarea
                ref="resultTextarea"
                class="content_title text-black"
                type="text"
                rows="10"
                cols="50"
                :value="faqData[12]?.text"
                onchange="alert('You just changed the textarea.')"
              >
              </textarea>
              <div class="textarea_icon">
                <button
                  class="btn btn-success align-self-end"
                  @click="textareaUpdate(homeResoult[3])"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="14"
                    fill="#fff"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <p class="faq_answer">
              Dastur ichida ,,foydalanish video instruksiyasi'' mavjud bo'lib u
              yerda video qo'llanma orqali boshlang'ich ko'nikmalarni olishi
              mumkin. Telegramdagi yopiq guruh orqali tushunmagan narsalarini
              so'rashlari mumkin!
            </p>
                  <div class="textarea d-flex">
              <textarea
                ref="resultTextarea"
                class="content_title text-black"
                type="text"
                rows="10"
                cols="50"
                :value="faqData[12]?.text"
                onchange="alert('You just changed the textarea.')"
              >
              </textarea>
              <div class="textarea_icon">
                <button
                  class="btn btn-success align-self-end"
                  @click="textareaUpdate(homeResoult[3])"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="14"
                    fill="#fff"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="faq_item item4">
            <p class="faq_question">
              Agar to'lov qilsam dastur ishlamasa nima bo'ladi?
            </p>
                  <div class="textarea d-flex">
              <textarea
                ref="resultTextarea"
                class="content_title text-black"
                type="text"
                rows="10"
                cols="50"
                :value="faqData[12]?.text"
                onchange="alert('You just changed the textarea.')"
              >
              </textarea>
              <div class="textarea_icon">
                <button
                  class="btn btn-success align-self-end"
                  @click="textareaUpdate(homeResoult[3])"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="14"
                    fill="#fff"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <p class="faq_answer">Olingan to'lovni 100% qaytarib beramiz</p>
                  <div class="textarea d-flex">
              <textarea
                ref="resultTextarea"
                class="content_title text-black"
                type="text"
                rows="10"
                cols="50"
                :value="faqData[12]?.text"
                onchange="alert('You just changed the textarea.')"
              >
              </textarea>
              <div class="textarea_icon">
                <button
                  class="btn btn-success align-self-end"
                  @click="textareaUpdate(homeResoult[3])"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="14"
                    fill="#fff"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="faq_item item5">
            <p class="faq_question">
              Dastur ishga tushdi, qabul qilib oldik malum vaqtdan keyin
              ishlamay qoldi! Endi nima bo'ladi ?
            </p>
                  <div class="textarea d-flex">
              <textarea
                ref="resultTextarea"
                class="content_title text-black"
                type="text"
                rows="10"
                cols="50"
                :value="faqData[12]?.text"
                onchange="alert('You just changed the textarea.')"
              >
              </textarea>
              <div class="textarea_icon">
                <button
                  class="btn btn-success align-self-end"
                  @click="textareaUpdate(homeResoult[3])"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="14"
                    fill="#fff"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <p class="faq_answer">
              Dastur ichida ,,foydalanish video instruksiyasi'' mavjud bo'lib u
              yerda video qo'llanma orqali boshlang'ich ko'nikmalarni olishi
              mumkin. Telegramdagi yopiq guruh orqali tushunmagan narsalarini
              so'rashlari mumkin!
            </p>
                  <div class="textarea d-flex">
              <textarea
                ref="resultTextarea"
                class="content_title text-black"
                type="text"
                rows="10"
                cols="50"
                :value="faqData[12]?.text"
                onchange="alert('You just changed the textarea.')"
              >
              </textarea>
              <div class="textarea_icon">
                <button
                  class="btn btn-success align-self-end"
                  @click="textareaUpdate(homeResoult[3])"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="14"
                    fill="#fff"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="faq_item item6">
            <p class="faq_question">
              Bularning barchasini menga kim kafolatlaydi?
            </p>
                  <div class="textarea d-flex">
              <textarea
                ref="resultTextarea"
                class="content_title text-black"
                type="text"
                rows="10"
                cols="50"
                :value="faqData[12]?.text"
                onchange="alert('You just changed the textarea.')"
              >
              </textarea>
              <div class="textarea_icon">
                <button
                  class="btn btn-success align-self-end"
                  @click="textareaUpdate(homeResoult[3])"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="14"
                    fill="#fff"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <p class="faq_answer">
              Korxonangiz va bizning ,,CRUD Developer 'MChJ lar tuzgan
              shartnomaga asosan O'zbekiston Respublikasi qonunchiligi !'
            </p>
                  <div class="textarea d-flex">
              <textarea
                ref="resultTextarea"
                class="content_title text-black"
                type="text"
                rows="10"
                cols="50"
                :value="faqData[12]?.text"
                onchange="alert('You just changed the textarea.')"
              >
              </textarea>
              <div class="textarea_icon">
                <button
                  class="btn btn-success align-self-end"
                  @click="textareaUpdate(homeResoult[3])"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="14"
                    fill="#fff"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <ContactBox />
      </div>
    </div>
  </div>
</template>
<script>
import sidebar from "/src/components/sidebar.vue";
import ContactBox from "../../components/contactBox.vue";
import api from "../../server/api";
export default {
  data() {
    return {
      // get function uchun params
      faq_params: {
        id: 14,
      },
      // o'zgaruvchi uchun
      faqData: [],
      // open close uchun
      faq: {
        bir: false,
        ikki: false,
        uch: false,
        tort: false,
        besh: false,
        olti: false,
        yetti: false,
        sakkiz: false,
        toqqiz: false,
        on: false,
        onbir: false,
        onikki: false,
        onuch: false,
      },

      // put update datas
      item_data: {
        category_item_id: 0,
        text: "",
      },
    };
  },
  components: {
    sidebar,
    ContactBox,
  },
  methods: {
    // get api
    getFaq() {
      api
        .category_one(this.faq_params)
        .then((res) => {
          this.faqData = res.data.category_items;
          console.log(res.data);
        })
        .catch((err) => {});
    },
    // input open close funtction
    faq1() {
      setTimeout(() => {
        this.faq.bir = true;
        this.faq.ikki = false;
        this.faq.uch = false;
        this.faq.tort = false;
        this.faq.besh = false;
        this.faq.olti = false;
        this.faq.yetti = false;
        this.faq.sakkiz = false;
        this.faq.toqqiz = false;
        this.faq.on = false;
        this.faq.onbir = false;
        this.faq.onikki = false;
        this.faq.onuch = false;
      }, 1000);
    },
    faq2() {
      setTimeout(() => {
        this.faq.bir = false;
        this.faq.ikki = true;
        this.faq.uch = false;
        this.faq.tort = false;
        this.faq.besh = false;
        this.faq.olti = false;
        this.faq.yetti = false;
        this.faq.sakkiz = false;
        this.faq.toqqiz = false;
        this.faq.on = false;
        this.faq.onbir = false;
        this.faq.onikki = false;
        this.faq.onuch = false;
      }, 1000);
    },
    faq3() {
      setTimeout(() => {
        this.faq.bir = false;
        this.faq.ikki = false;
        this.faq.uch = true;
        this.faq.tort = false;
        this.faq.besh = false;
        this.faq.olti = false;
        this.faq.yetti = false;
        this.faq.sakkiz = false;
        this.faq.toqqiz = false;
        this.faq.on = false;
        this.faq.onbir = false;
        this.faq.onikki = false;
        this.faq.onuch = false;
      }, 1000);
    },
    faq4() {
      setTimeout(() => {
        this.faq.bir = false;
        this.faq.ikki = false;
        this.faq.uch = false;
        this.faq.tort = true;
        this.faq.besh = false;
        this.faq.olti = false;
        this.faq.yetti = false;
        this.faq.sakkiz = false;
        this.faq.toqqiz = false;
        this.faq.on = false;
        this.faq.onbir = false;
        this.faq.onikki = false;
        this.faq.onuch = false;
      }, 1000);
    },
    faq5() {
      setTimeout(() => {
        this.faq.bir = false;
        this.faq.ikki = false;
        this.faq.uch = false;
        this.faq.tort = false;
        this.faq.besh = true;
        this.faq.olti = false;
        this.faq.yetti = false;
        this.faq.sakkiz = false;
        this.faq.toqqiz = false;
        this.faq.on = false;
        this.faq.onbir = false;
        this.faq.onikki = false;
        this.faq.onuch = false;
      }, 1000);
    },
    faq6() {
      setTimeout(() => {
        this.faq.bir = false;
        this.faq.ikki = false;
        this.faq.uch = false;
        this.faq.tort = false;
        this.faq.besh = false;
        this.faq.olti = true;
        this.faq.yetti = false;
        this.faq.sakkiz = false;
        this.faq.toqqiz = false;
        this.faq.on = false;
        this.faq.onbir = false;
        this.faq.onikki = false;
        this.faq.onuch = false;
      }, 1000);
    },
    faq7() {
      setTimeout(() => {
        this.faq.bir = false;
        this.faq.ikki = false;
        this.faq.uch = false;
        this.faq.tort = false;
        this.faq.besh = false;
        this.faq.olti = false;
        this.faq.yetti = true;
        this.faq.sakkiz = false;
        this.faq.toqqiz = false;
        this.faq.on = false;
        this.faq.onbir = false;
        this.faq.onikki = false;
        this.faq.onuch = false;
      }, 1000);
    },
    faq8() {
      setTimeout(() => {
        this.faq.bir = false;
        this.faq.ikki = false;
        this.faq.uch = false;
        this.faq.tort = false;
        this.faq.besh = false;
        this.faq.olti = false;
        this.faq.yetti = false;
        this.faq.sakkiz = true;
        this.faq.toqqiz = false;
        this.faq.on = false;
        this.faq.onbir = false;
        this.faq.onikki = false;
        this.faq.onuch = false;
      }, 1000);
    },
    faq9() {
      setTimeout(() => {
        this.faq.bir = false;
        this.faq.ikki = false;
        this.faq.uch = false;
        this.faq.tort = false;
        this.faq.besh = false;
        this.faq.olti = false;
        this.faq.yetti = false;
        this.faq.sakkiz = false;
        this.faq.toqqiz = true;
        this.faq.on = false;
        this.faq.onbir = false;
        this.faq.onikki = false;
        this.faq.onuch = false;
      }, 1000);
    },
    faq10() {
      setTimeout(() => {
        this.faq.bir = false;
        this.faq.ikki = false;
        this.faq.uch = false;
        this.faq.tort = false;
        this.faq.besh = false;
        this.faq.olti = false;
        this.faq.yetti = false;
        this.faq.sakkiz = false;
        this.faq.toqqiz = false;
        this.faq.on = true;
        this.faq.onbir = false;
        this.faq.onikki = false;
        this.faq.onuch = false;
      }, 1000);
    },
    faq11() {
      setTimeout(() => {
        this.faq.bir = false;
        this.faq.ikki = false;
        this.faq.uch = false;
        this.faq.tort = false;
        this.faq.besh = false;
        this.faq.olti = false;
        this.faq.yetti = false;
        this.faq.sakkiz = false;
        this.faq.toqqiz = false;
        this.faq.on = false;
        this.faq.onbir = true;
        this.faq.onikki = false;
        this.faq.onuch = false;
      }, 1000);
    },
    faq12() {
      setTimeout(() => {
        this.faq.bir = false;
        this.faq.ikki = false;
        this.faq.uch = false;
        this.faq.tort = false;
        this.faq.besh = false;
        this.faq.olti = false;
        this.faq.yetti = false;
        this.faq.sakkiz = false;
        this.faq.toqqiz = false;
        this.faq.on = false;
        this.faq.onbir = false;
        this.faq.onikki = true;
        this.faq.onuch = false;
      }, 1000);
    },
    faq13() {
      setTimeout(() => {
        this.faq.bir = false;
        this.faq.ikki = false;
        this.faq.uch = false;
        this.faq.tort = false;
        this.faq.besh = false;
        this.faq.olti = false;
        this.faq.yetti = false;
        this.faq.sakkiz = false;
        this.faq.toqqiz = false;
        this.faq.on = false;
        this.faq.onbir = false;
        this.faq.onikki = false;
        this.faq.onuch = true;
      }, 1000);
    },
    // put update function
    putCategory(event, item) {
      (this.item_data.category_item_id = item.id),
        (this.item_data.text = event.target.value);
      api
        .category_item_update(this.item_data)
        .then((res) => {
          this.$util.toastError("success", "Amaliyot bajarildi");
          
        })
        .catch((err) => {
          this.$util.toastError("error", "Ma'lumotni yuklab bo'lmadi");
        });
    },
  },
  created() {
    this.getFaq();
  },
};
</script>
<style></style>
