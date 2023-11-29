<script>
import api from "../../server/api";
export default {
  name: "Delete",
  emits: {
    end: null,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    open() {
      this.$refs.deleteModal.openModal();
    },
    yes() {
      this.$emit("end");
      this.$refs.deleteModal.toggleModal();
    },
  },
};
</script>
<template>
  <Modal ref="deleteModal" size="md">
    <template #header>
      <div class="warning_title text-uppercase text-success">
        malumotni o'chirmoqchimisiz
      </div>
      <div class="btns d-flex align-items-center col-10">
        <button @click="yes()" class="btn text-bg-success text-capitalize">
          ha
        </button>
        <button
          @click="$refs.deleteModal.toggleModal()"
          class="btn text-bg-danger text-capitalize"
        >
          yo'q
        </button>
      </div>
    </template>
  </Modal>
</template>
