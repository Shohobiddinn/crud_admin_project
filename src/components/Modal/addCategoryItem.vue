<script>
import api from "../../server/api";
export default {
  name: "addCategoryItem",
  emits: {
    end: null,
  },
  data() {
    return {
      status: "category_item_add",
      category_id: 0,
      item: [
        {
          category_item_id: 0,
          ordinal_number: 0,
          text: "",
        },
      ],
    };
  },
  computed: {},
  methods: {
    open(item) {
      if (this.status == "category_item_edit") {
        this.item = {
          category_item_id: item.id,
          ordinal_number: 0,
          text: item.text,
        };
        this.$refs.addCategoryItemModal.openModal();
      } else {
        this.item[0] = {
          category_id: this.category_id,
          ordinal_number: '',
          text: "",
        };
        this.$refs.addCategoryItemModal.openModal();
      }
    },
    postCategoryItem() {
      if (this.status == "category_item_add") {
        api.category_items_add(this.item).then(() => {
          this.$util.toast().then(() => {
            this.$emit("end");
          });
          this.$refs.addCategoryItemModal.closeModal();
        });
      } else {
        api.category_item_update(this.item).then(() => {
          this.$util.toast().then(() => {
            this.$emit("end");
          });
          this.$refs.addCategoryItemModal.closeModal();
        });
      }
    },
  },
};
</script>

<template>
  <Modal ref="addCategoryItemModal" size="md">
    <template #header>
      <div class="tahrirlash">
        <div class="title text-uppercase text-success">
          {{ status == "category_item_edit" ? "tahrirlash" : "item qo'shish" }}
        </div>
        <form
          id="submit"
          @submit.prevent="postCategoryItem"
          class="form_submit d-flex flex-column"
        >
          <label class="col-12">
            ordinal
            <div class="input-group d-flex align-items-center">
              <input class="col-12" type="number" v-model="item[0].ordinal_number" />
            </div>
          </label>
          <label class="col-12">
            toifa haqida
            <div class="input-group d-flex align-items-center">
              <textarea cols="30" rows="10" v-model="item[0].text"></textarea>
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
