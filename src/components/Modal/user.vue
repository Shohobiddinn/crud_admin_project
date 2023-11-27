<template>
  <Modal ref="addUser">
    <template #header>
      <div class="title text-uppercase text-success">{{ status == 'user_add' ? "Hodim qo'shish" : "Hodimni tahrirlash"}}</div>
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
  </Modal>
</template>

<script>
import Modal from "./Modal.vue";
export default {
  components: { Modal },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>