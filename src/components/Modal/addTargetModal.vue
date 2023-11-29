<script>
import api from "../../server/api";
export default {
  name: "addTarget",
  emits: {
    end: null,
  },
  data() {
    return {
      status: "target_add",
      target: {
        target_id: 0,
        name: "",
        comment: "",
      },
    };
  },
  computed: {},
  methods: {
    open(target) {
      if (this.status == "target_edit") {
        this.target = {
          target_id: target.id,
          name: target.name,
          comment: target.comment,
        };
        this.$refs.addTargetModal.openModal();
      } else {
        this.target = {
          target_id: 0,
          name: "",
          comment: "",
        };
        this.$refs.addTargetModal.openModal();
      }
    },
    postTarget() {
      if (this.status == "target_add") {
        api.target_add(this.target).then(() => {
          this.$util.toast().then(() => {
            this.$emit("end");
          });
          this.$refs.addTargetModal.closeModal();
        });
      } else {
        api.target_update(this.target).then(() => {
          this.$util.toast().then(() => {
            this.$emit("end");
          });
          this.$refs.addTargetModal.closeModal();
        });
      }
    },
  },
};
</script>

<template>
  <Modal ref="addTargetModal" size="md">
    <template #header>
      <div class="tahrirlash">
        <div class="title text-uppercase text-success">
          {{ status == "target_edit" ? "tahrirlash" : "target qo'shish" }}
        </div>
        <form
          id="submit"
          @submit.prevent="postTarget"
          class="form_submit d-flex flex-column"
        >
          <label class="col-12">
            nomi
            <div class="input-group d-flex align-items-center">
              <input
                type="text"
                class="form-control"
                required
                autocomplete="on"
                v-model="target.name"
              />
            </div>
          </label>

          <label class="col-12">
            toifa haqida
            <div class="input-group d-flex align-items-center">
              <textarea
                cols="30"
                rows="10"
                v-model="target.comment"
              ></textarea>
            </div>
          </label>
        </form>
      </div>
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
