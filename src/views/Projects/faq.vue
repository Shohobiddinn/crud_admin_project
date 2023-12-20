<template>
  <div class="background">
    <div class="faq">
      <div class="container-c">
        <sidebar />
        <div class="title-box">
          <img src="/src/assets/images/slash.svg" alt="" />
          <h3 @click="faq13()" v-if="!faq.onuch" class="contact_title">
            {{ faqData[0]?.text }}
          </h3>
          <input
            v-else
            type="text"
            style="width: 250px"
            :value="faqData[0]?.text"
            @change="putCategory($event, faqData[0])"
          />
        </div>
        <div class="faq_box">
          <div class="faq_item item1">
            <p @click="faq1()" class="faq_question" v-if="!faq.bir">
              {{ faqData[12]?.text }}
            </p>
            <div v-else class="textarea d-flex">
              <textarea
                ref="faqTextarea1"
                class="content_title text-black"
                type="text"
                rows="10"
                cols="50"
                :value="faqData[12]?.text"
              >
              </textarea>
              <div class="textarea_icon">
                <button
                  class="btn btn-success align-self-end"
                  @click="putTextarea($refs.faqTextarea1, faqData[12])"
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
            <p @click="faq2()" v-if="!faq.ikki" class="faq_answer">
              {{ faqData[11]?.text }}
            </p>
            <div v-else class="textarea d-flex">
              <textarea
                ref="resultTextarea2"
                class="content_title text-black"
                type="text"
                rows="10"
                cols="50"
                :value="faqData[11]?.text"
              >
              </textarea>
              <div class="textarea_icon">
                <button
                  class="btn btn-success align-self-end"
                  @click="putTextarea($refs.resultTextarea2, faqData[11])"
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
            <p @click="faq3()" v-if="!faq.uch" class="faq_question">
              {{ faqData[10]?.text }}
            </p>
            <div v-else class="textarea d-flex">
              <textarea
                ref="resultTextarea3"
                class="content_title text-black"
                type="text"
                rows="10"
                cols="50"
                :value="faqData[10]?.text"
              >
              </textarea>
              <div class="textarea_icon">
                <button
                  class="btn btn-success align-self-end"
                  @click="putTextarea($refs.resultTextarea3, faqData[10])"
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
            <p @click="faq4()" v-if="!faq.tort" class="faq_answer">
              {{ faqData[9]?.text }}
            </p>
            <div v-else class="textarea d-flex">
              <textarea
                ref="resultTextarea4"
                class="content_title text-black"
                type="text"
                rows="10"
                cols="50"
                :value="faqData[9]?.text"
              >
              </textarea>
              <div class="textarea_icon">
                <button
                  class="btn btn-success align-self-end"
                  @click="putTextarea($refs.resultTextarea4, faqData[9])"
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
            <p @click="faq5()" v-if="!faq.besh" class="faq_question">
              {{ faqData[8]?.text }}
            </p>
            <div v-else class="textarea d-flex">
              <textarea
                ref="resultTextarea5"
                class="content_title text-black"
                type="text"
                rows="10"
                cols="50"
                :value="faqData[8]?.text"
              >
              </textarea>
              <div class="textarea_icon">
                <button
                  class="btn btn-success align-self-end"
                  @click="putTextarea($refs.resultTextarea5, faqData[8])"
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
            <p @click="faq6()" v-if="!faq.olti" class="faq_answer">
              {{ faqData[7]?.text }}
            </p>
            <div v-else class="textarea d-flex">
              <textarea
                ref="resultTextarea6"
                class="content_title text-black"
                type="text"
                rows="10"
                cols="50"
                :value="faqData[7]?.text"
              >
              </textarea>
              <div class="textarea_icon">
                <button
                  class="btn btn-success align-self-end"
                  @click="putTextarea($refs.resultTextarea6, faqData[7])"
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
            <p @click="faq7()" v-if="!faq.yetti" class="faq_question">
              {{ faqData[6]?.text }}
            </p>
            <div v-else class="textarea d-flex">
              <textarea
                ref="resultTextarea7"
                class="content_title text-black"
                type="text"
                rows="10"
                cols="50"
                :value="faqData[6]?.text"
              >
              </textarea>
              <div class="textarea_icon">
                <button
                  class="btn btn-success align-self-end"
                  @click="putCategory($refs.resultTextarea7, faqData[6])"
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
            <p @click="faq8()" v-if="!faq.sakkiz" class="faq_answer">
              {{ faqData[5]?.text }}
            </p>
            <div v-else class="textarea d-flex">
              <textarea
                ref="resultTextarea8"
                class="content_title text-black"
                type="text"
                rows="10"
                cols="50"
                :value="faqData[5]?.text"
              >
              </textarea>
              <div class="textarea_icon">
                <button
                  class="btn btn-success align-self-end"
                  @click="putTextarea($refs.resultTextarea8, faqData[5])"
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
            <p @click="faq9()" v-if="!faq.toqqiz" class="faq_question">
              {{ faqData[4]?.text }}
            </p>
            <div v-else class="textarea d-flex">
              <textarea
                ref="resultTextarea9"
                class="content_title text-black"
                type="text"
                rows="10"
                cols="50"
                :value="faqData[4]?.text"
              >
              </textarea>
              <div class="textarea_icon">
                <button
                  class="btn btn-success align-self-end"
                  @click="putTextarea($refs.resultTextarea9, faqData[3])"
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
            <p @click="faq10()" v-if="!faq.on" class="faq_answer">
              {{ faqData[3]?.text }}
            </p>
            <div v-else class="textarea d-flex">
              <textarea
                ref="resultTextarea10"
                class="content_title text-black"
                type="text"
                rows="10"
                cols="50"
                :value="faqData[3]?.text"
              >
              </textarea>
              <div class="textarea_icon">
                <button
                  class="btn btn-success align-self-end"
                  @click="textareaUpdate($refs.resultTextarea10, faqData[3])"
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
            <p @click="faq11()" v-if="!faq.onbir" class="faq_question">
            {{faqData[2]?.text}}
            </p>
            <div v-else class="textarea d-flex">
              <textarea
                ref="resultTextarea11"
                class="content_title text-black"
                type="text"
                rows="10"
                cols="50"
                :value="faqData[2]?.text"
              >
              </textarea>
              <div class="textarea_icon">
                <button
                  class="btn btn-success align-self-end"
                  @click="putTextarea($refs.resultTextarea11,faqData[2])"
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
            <p @click="faq12()" v-if="!faq.onikki" class="faq_answer">
             {{ faqData[1]?.text}}
            </p>
            <div v-else class="textarea d-flex">
              <textarea
                ref="resultTextarea12"
                class="content_title text-black"
                type="text"
                rows="10"
                cols="50"
                :value="faqData[1]?.text"
              >
              </textarea>
              <div class="textarea_icon">
                <button
                  class="btn btn-success align-self-end"
                  @click="textareaUpdate($refs.resultTextarea12,faqData[3])"
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
        id: 8,
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
          this.getFaq();
          this.$util.toastError("success", "Amaliyot bajarildi");
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
          this.faq.onuch = false;
        })
        .catch((err) => {
          this.$util.toastError("error", "Ma'lumotni yuklab bo'lmadi");
        });
    },
    putTextarea(event, item) {
      (this.item_data.category_item_id = item.id),
        (this.item_data.text = event.value);
      api
        .category_item_update(this.item_data)
        .then((res) => {
          this.getFaq();
          this.$util.toastError("success", "Amaliyot bajarildi");
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
          this.faq.onuch = false;
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
