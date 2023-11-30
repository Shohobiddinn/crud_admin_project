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
        status: true,
        comment: "",
        project_id: 0,
      },
      projects: {},
    };
  },
  computed: {},
  methods: {
    open(target) {
      if (this.status == "target_edit") {
        this.target = {
          target_id: target.id,
          status: target.status,
          comment: target.comment,
          project_id: target.project_id,
        };
        this.$refs.addTargetModal.openModal();
      } else {
        this.target = {
          target_id: 0,
          status: true,
          comment: "",
          project_id: 0,
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
    get_products() {
      api.project_all();
      api
        .project_all()
        .then((res) => {
          this.projects = res?.data;
        })
        .catch((err) => {});
    },
  },
  created() {
    this.get_products();
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
            loyiha
            <div class="input-group d-flex align-items-center">
              <select v-model="target.project_id" required>
                <option
                  v-for="project in projects"
                  :key="project.id"
                  :value="project?.id"
                >
                  {{ project?.name }}
                </option>
              </select>
            </div>
          </label>
          <label class="col-12">
            toifa haqida
            <div class="input-group d-flex align-items-center">
              <textarea cols="30" rows="10" v-model="target.comment"></textarea>
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
