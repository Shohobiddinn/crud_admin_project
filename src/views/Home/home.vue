<template>
  <div>
    <tahrirlash size="md" ref="tahrirlash" class="tahrirlash">
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
    </tahrirlash>
    <ModalVue size="md" ref="warningModal">
      <template #header>
        <div class="warning_title text-uppercase text-success">
          hodimni o'chirmoqchimisiz
        </div>
        <div class="btns d-flex align-items-center col-10">
          <button
            @click="$refs.warningModal.closeModal()"
            class="btn text-bg-success text-capitalize"
          >
            ha
          </button>
          <button
            @click="$refs.warningModal.closeModal()"
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
          <div
            class="hodimlar_content_top_add text-bg-success"
            @click="$refs.userAdd.closeModal()"
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
          <div class="hodim_content card" v-for="item in 8" :key="item">
            <div class="card-body">
              <h5
                class="content_item item_2 card-title text-capitalize d-flex justify-content-between align-items-center"
              >
                valiyev valijon
              </h5>

              <h5
                class="content_item card-title text-capitalize d-flex justify-content-between align-items-center"
              >
                <span>tel: </span>+998-94-283-60-06
              </h5>

              <div
                class="btns d-flex align-items-center justify-content-between col-10"
              >
                <div
                  @click="$refs.tahrirlash.closeModal()"
                  class="card_content_btn text-bg-success text-uppercase btn"
                >
                  tahrirlash
                </div>
                <div
                  class="card_content_btn btn text-bg-danger"
                  @click="$refs.warningModal.closeModal()"
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
        <div class="paginations d-flex justify-content-center">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item" aria-current="page">
                <span class="page-link">2</span>
              </li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
          <select class="form-select" aria-label="Default select example">
            <option selected>10</option>
            <option value="1">20</option>
            <option value="2">50</option>
            <option value="3">100</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tahrirlash from "../../components/tahrirlash.vue";
import ModalVue from "../../components/Modal/Modal.vue";
export default {
  data() {
    return {
      phone: "",
    };
  },
  components: {
    tahrirlash,
    ModalVue,
  },
  methods: {
    tekshiruv() {
      this.$util.toast("success", "Amaliyot bajarildi");
      this.$refs.tahrirlash.closeModal()
    },
  },
};
</script>
  
  <style lang="scss" scopd>
</style>