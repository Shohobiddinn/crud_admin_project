<script>
import api from "../../server/api";
export default {
  name: "Addcategory",
  emits: {
    end: null,
  },
  data() {
    return {
      status: "",
      sourceNumber: Number,
      fileData: {
        source_id: Number,
        comment: "",
        source: "",
        files: [],
      },
      files: null,
    };
  },
  computed: {},
  methods: {
    open() {
      this.$refs.addFileModal.openModal();
    },
    postCategory() {
      this.fileData.source_id = this.sourceNumber;
      api.file_add(this.fileData).then(() => {
        this.$util
          .toast()
          .then(() => {
            this.$emit("end");
          })
          .catch((err) => {
            this.$util.toastError("error", err.message);
          });
        this.$refs.addFileModal.closeModal();
      });
    },
  },
};
</script>

<template>
  <Modal ref="addFileModal" size="lg">
    <template #header>
      <div class="tahrirlash">
        <div class="title text-uppercase text-success">file Qo'shish {{ sourceNumber }}</div>
        <form
          id="submit"
          @submit.prevent="postCategory"
          class="form_submit d-flex flex-column"
        >
          <div class="d-flex justify-content-between">
            <label class="col-5 d-none" v-if="this.status == 'file_add'">
              source_id
              <div class="input-group d-flex align-items-center">
                <input
                  type="number"
                  class="form-control"
                  required
                  inputmode="numeric"
                  pattern="\d*"
                  v-model="fileData.source_id"
                />
              </div>
            </label>

            <label class="col-5">
              source
              <div class="input-group d-flex align-items-center">
                <input
                  type="text"
                  class="form-control"
                  required
                  autocomplete="on"
                  v-model="fileData.source"
                />
              </div>
            </label>
          </div>

          <label class="col-12">
            file haqida
            <div class="input-group d-flex align-items-center">
              <textarea
                cols="30"
                rows="10"
                required
                v-model="fileData.comment"
              ></textarea>
            </div>
          </label>
          <label class="col-12">
            file
            <div class="input-group d-flex align-items-center col-12">
              <input
                required
                type="file"
                :accept="`${status}/*`"
                @change="fileData.files.push($event.target.files[0])"
                class="col-12"
              />
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
<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: unset;
  margin: 0;
}
</style>
