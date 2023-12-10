<template>
  <div>
    <addCategoryItem @end="get()" ref="categoryItem" />
    <Delete @end="end" ref="delete" />
    <div class="hodimlar">
      <div class="hodimlar_content">
        <div
          class="hodimlar_content_top d-flex align-items-center justify-content-between"
        >
          <div class="hodimlar_content_top_title text-uppercase">toifa</div>
          <div class="search d-flex align-items-center">
            <div
              class="hodimlar_content_top_add text-bg-success"
              @click="
                ($refs.categoryItem.status = 'category_item_add'),
                  ($refs.categoryItem.item.category_id = params.id),
                  $refs.categoryItem.open()
              "
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
        </div>
        <div class="items">
          <div class="hodim_content card">
            <div class="card-body">
              <h5
                class="content_item item_2 card-title text-capitalize d-flex justify-content-between align-items-center"
              >
                {{ item?.name }}
              </h5>
              <h5
                class="content_item card-title text-capitalize d-flex justify-content-between align-items-center"
              >
                <span>toifa: </span>{{ item?.name }}
              </h5>

              <h5
                class="content_item card-title text-capitalize d-flex justify-content-between align-items-center"
              >
                {{ item?.comment }}
              </h5>

              <div
                class="btns d-flex align-items-center justify-content-end col-10"
              >
                <div
                  @click="
                    ($refs.category.status = 'category_item_edit'),
                      $refs.category.open(item)
                  "
                  class="card_content_btn text-bg-warning text-uppercase btn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="25"
                    width="25"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
                    />
                  </svg>
                </div>
                <div
                  class="card_content_btn btn text-bg-danger"
                  @click="$refs.delete.open()"
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
        <DataNotFound v-if="!category.length" />
      </div>
    </div>
  </div>
</template>
    
    <script>
import api from "../../server/api";
import Delete from "@/components/Modal/Delete.vue";
import addCategoryItem from "../../components/Modal/addCategoryItem.vue";
import DataNotFound from "../../components/DataNotFound/DataNotFound.vue";
export default {
  data() {
    return {
      category: {},
      params: {
        id: this.$route.params.id,
      },
    };
  },
  components: {
    Delete,
    addCategoryItem,
    DataNotFound,
  },
  methods: {
    tekshiruv() {
      this.$util.toast("success", "Amaliyot bajarildi");
      this.$refs.tahrirlash.toggleModal();
    },
    get() {
      api
        .category_one(this.params)
        .then((res) => {
          this.category = res?.data;
        })
        .catch((err) => {});
    },
    end() {
      console.log("delete");
    },
  },
  created() {
    this.get();
  },
};
</script>
      
      <style lang="scss" scopd>
</style>