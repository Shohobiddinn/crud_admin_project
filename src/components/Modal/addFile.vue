<script>
import api from "../../server/api";
export default {
  name: "Addcategory",
  emits: {
    end: null,
  },
  data() {
    return {
      status: "file_add",
      fileData: {
        file_id: 0,
        source_id: "",
        comment: "",
        source: "",
        file: [],
      },
      files: null,
    };
  },
  computed: {},
  methods: {
    open(file) {
      if (this.status == "file_edit") {
        this.fileData = {
          file_id: file.id,
          source_id: file.source_id,
          comment: file.comment,
          source: file.source,
          file: file.file,
        };
        this.files = file;
        this.$refs.addFileModal.openModal();
      } else {
        this.fileData = {
          file_id: 0,
          source_id: "",
          source: "",
          comment: "",
          file: [],
        };
        this.$refs.addFileModal.openModal();
      }
    },

    inputData(event) {
      this.fileData.file = event.target.files[0];
    },
    postCategory() {
      if (this.status == "file_add") {
        api.file_add(this.fileData).then(() => {
          this.$util.toast().then(() => {
            this.$emit("end");
          });
          this.$refs.addFileModal.closeModal();
        });
      } else {
        api.file_update_id(this.fileData).then(() => {
          this.$util.toast().then(() => {
            this.$emit("end");
          });
          this.$refs.addFileModal.closeModal();
        });
      }
    },
  },
};
</script>

<template>
  <Modal ref="addFileModal" size="md">
    <template #header>
      <div class="tahrirlash">
        <div class="title text-uppercase text-success">
          {{ status == "file_edit" ? "tahrirlash" : "file qo'shish" }}
        </div>
        <form
          id="submit"
          @submit.prevent="postCategory"
          class="form_submit d-flex flex-column"
        >
          <label class="col-12">
            source_id
            <div class="input-group d-flex align-items-center">
              <input
                type="text"
                class="form-control"
                required
                autocomplete="on"
                v-model="fileData.source_id"
              />
            </div>
          </label>

          <label class="col-12">
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

          <label class="col-12">
            file haqida
            <div class="input-group d-flex align-items-center">
              <textarea
                cols="30"
                rows="10"
                v-model="fileData.comment"
              ></textarea>
            </div>
          </label>
          <label class="col-12">
            file
            <div class="input-group d-flex align-items-center">
              <input
                required
                type="file"
                @change="fileData.file = $event.target.files[0]"
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
