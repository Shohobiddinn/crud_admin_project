<template>
  <div>
    <addUserModalVue @end="get()" ref="user" />

    <!-- <tahrirlash size="md" ref="tahrirlash" class="tahrirlash">
      <template #header>
        <div class="title text-uppercase text-success">tahrirlash</div>
        <form
          id="submit"
          @submit.prevent="tekshiruv"
          class="form_submit d-flex flex-column"
        >
          <label class="col-12">
            F.I.O
            <div class="input-group d-flex align-items-center">
              <input
                type="text"
                class="form-control"
                required
                v-model="FullName"
                autocomplete="on"
              />
            </div>
          </label>
          <label class="col-12">
            Telfon raqam
            <div
              class="input-group d-flex align-items-center"
              style="height: 50px"
              :tel="$util.tel(phone)"
            >
              <div class="input-group-text" style="height: 100%">+998</div>
              <input
                type="tel"
                class="form-control"
                minlength="9"
                maxlength="9"
                required
                v-model="phone"
                autocomplete="on"
              />
            </div>
          </label>
        </form>
      </template>
      <template #footer>
        <div class="d-flex justify-content-center">
          <button
            class="btn btn-success text-capitalize tahrirlash_btn"
            form="submit"
          >
            tasdiqlash
          </button>
        </div>
      </template>
    </tahrirlash>
    <tahrirlash size="md" ref="userAdd" class="tahrirlash">
      <template #header>
        <div class="title text-uppercase text-success">Hodim qo'shish</div>
        <form
          id="submit"
          @submit.prevent="tekshiruv"
          class="form_submit d-flex flex-column"
        >
          <label class="col-12">
            F.I.O
            <div class="input-group d-flex align-items-center">
              <input
                type="text"
                class="form-control"
                required
                v-model="FullName"
                autocomplete="on"
              />
            </div>
          </label>
          <label class="col-12">
            Telfon raqam
            <div
              class="input-group d-flex align-items-center"
              style="height: 50px"
              :tel="$util.tel(phone)"
            >
              <div class="input-group-text" style="height: 100%">+998</div>
              <input
                type="tel"
                class="form-control"
                minlength="9"
                maxlength="9"
                required
                v-model="phone"
                autocomplete="on"
              />
            </div>
          </label>
        </form>
      </template>
      <template #footer>
        <div class="d-flex justify-content-center">
          <button
            class="btn btn-success text-capitalize tahrirlash_btn"
            form="submit"
          >
            tasdiqlash
          </button>
        </div>
      </template>
    </tahrirlash> -->
    <ModalVue size="md" ref="warningModal">
      <template #header>
        <div class="warning_title text-uppercase text-success">
          hodimni o'chirmoqchimisiz
        </div>
        <div class="btns d-flex align-items-center col-10">
          <button
            @click="$refs.warningModal.toggleModal()"
            class="btn text-bg-success text-capitalize"
          >
            ha
          </button>
          <button
            @click="$refs.warningModal.toggleModal()"
            class="btn text-bg-danger text-capitalize"
          >
            yo'q
          </button>
        </div>
      </template>
    </ModalVue>
    <div class="hodimlar">
      <div class="hodimlar_content">
        <div
          class="hodimlar_content_top d-flex align-items-center justify-content-between"
        >
          <div class="hodimlar_content_top_title text-uppercase">hodimlar</div>
          <!-- <pre>{{ users }}</pre> -->
          <div
            class="hodimlar_content_top_add text-bg-success"
            @click="($refs.user.status = 'user_add'), $refs.user.open()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="25"
              width="25"
              viewBox="0 0 448 512"
            >
              <path
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
              />
            </svg>
          </div>
        </div>
        <div class="items">
          <div
            class="hodim_content card"
            v-for="item in users?.data"
            :key="item?.id"
          >
            <div class="card-body">
              <h5
                class="content_item item_2 card-title text-capitalize d-flex justify-content-between align-items-center"
              >
                {{ item?.name }}
              </h5>
              <h5
                class="content_item card-title text-capitalize d-flex justify-content-between align-items-center"
              >
                <span>foydalanuvchi: </span>{{ item?.username }}
              </h5>

              <h5
                class="content_item card-title text-capitalize d-flex justify-content-between align-items-center"
              >
                <span>tel: </span>{{ item?.number }}
              </h5>

              <div
                class="btns d-flex align-items-center justify-content-between col-10"
              >
                <div
                  @click="
                    ($refs.user.status = 'user_edit'), $refs.user.open(item)
                  "
                  class="card_content_btn text-bg-success text-uppercase btn"
                >
                  tahrirlash
                </div>
                <div
                  class="card_content_btn btn text-bg-danger"
                  @click="$refs.warningModal.toggleModal()"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="25"
                    width="25"
                    viewBox="0 0 448 512"
                    fill="#fff"
                  >
                    <path
                      d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <paginationVue style="margin-top: 50px" v-model="users" @get="get()" />
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../server/api";
import ModalVue from "../../components/Modal/Modal.vue";
import addUserModalVue from "../../components/Modal/addUserModal.vue";
import paginationVue from "../../components/Pagination/pagination.vue";
export default {
  data() {
    return {
      phone: "",
      search: "",
      users: {
        current_page: 1,
        pages: 1,
        limit: 5,
        data: [],
      },
      roll: "",
    };
  },
  components: {
    ModalVue,
    addUserModalVue,
    paginationVue,
  },
  methods: {
    tekshiruv() {
      this.$util.toast("success", "Amaliyot bajarildi");
      this.$refs.tahrirlash.toggleModal();
    },
    get() {
      const params = {
        id: 0,
        page: this.users.current_page,
        limit: this.users.limit,
        roll: "",
        search: this.search,
        status: true,
      };
      api
        .user_all(params)
        .then((res) => {
          this.users = res?.data;
        })
        .catch((err) => {});
    },
  },
  created() {
    this.get();
  },
};
</script>
  
  <style lang="scss" scopd>
</style>