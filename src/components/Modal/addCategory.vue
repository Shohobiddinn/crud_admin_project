<script>
import api from "../../server/api";
export default {
  name: "Addcategory",
  emits: {
    end: null,
  },
  data() {
    return {
      status: "category_add",
      category: {
        category_id: 0,
        name: "",
        comment: "",
      },
    };
  },
  computed: {},
  methods: {
    open(category) {
      if (this.status == "category_edit") {
        this.category = {
          category_id: category.id,
          name: category.name,
          comment: category.comment,
        };
        this.$refs.addCategoryModal.openModal();
      } else {
        this.category = {
          category_id: 0,
          name: "",
          comment: "",
        };
        this.$refs.addCategoryModal.openModal();
      }
    },
    postCategory() {
      if (this.status == "category_add") {
        api.category_add(this.category).then(() => {
          this.$util.toast().then(() => {
            this.$emit("end");
          });
          this.$refs.addCategoryModal.closeModal();
        });
      } else {
        api.category_update(this.category).then(() => {
          this.$util.toast().then(() => {
            this.$emit("end");
          });
          this.$refs.addCategoryModal.closeModal();
        });
      }
    },
  },
};
</script>

<template>
  <Modal ref="addCategoryModal" size="md">
    <template #header>
      <div class="tahrirlash">
        <div class="title text-uppercase text-success">
          {{ status == "user_edit" ? "tahrirlash" : "toifa qo'shish" }}
        </div>
        <form
          id="submit"
          @submit.prevent="postCategory"
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
                v-model="category.name"
              />
            </div>
          </label>

          <label class="col-12">
            toifa haqida
            <div class="input-group d-flex align-items-center">
              <textarea
                cols="30"
                rows="10"
                v-model="category.comment"
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
