<script>
import api from "../../server/api";
export default {
  name: "AddProject",
  emits: {
    end: null,
  },
  data() {
    return {
      status: "project_add",
      project: {
        id: 0,
        name: "",
        comment: "",
        status: true,
        url: "",
        source_id: 0,
      },
    };
  },
  computed: {},
  methods: {
    open(project) {
      if (this.status == "project_edit") {
        this.project = {
          id: project.id,
          name: project.name,
          comment: project.comment,
          status: project.status,
          url: project.url,
          source_id: project.source_id,
        };
        this.$refs.addProjectModal.openModal();
      } else {
        this.project = {
          id: 0,
          name: "",
          comment: "",
          status: true,
          url: "",
          source_id: 0,
        };
        this.$refs.addProjectModal.openModal();
      }
    },
    postProject() {
      if (this.status == "project_add") {
        api.project_add(this.project).then(() => {
          this.$util.toast().then(() => {
            this.$emit("end");
          });
          this.$refs.addProjectModal.closeModal();
        });
      } else {
        api.project_update(this.project).then(() => {
          this.$util.toast().then(() => {
            this.$emit("end");
          });
          this.$refs.addProjectModal.closeModal();
        });
      }
    },
  },
};
</script>

<template>
  <Modal ref="addProjectModal" size="lg">
    <template #header>
      <div class="tahrirlash">
        <div class="title text-uppercase text-success">
          {{ status == "user_edit" ? "tahrirlash" : "loyiha qo'shish" }}
        </div>
        <form
          id="submit"
          @submit.prevent="postProject"
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
                v-model="project.name"
              />
            </div>
          </label>
          <label class="col-12">
            URL manzil
            <div class="input-group d-flex align-items-center">
              <input
                type="text"
                class="form-control"
                required
                autocomplete="on"
                v-model="project.url"
              />
            </div>
          </label>
          <label class="col-12">
            loyiha raqami
            <div class="input-group d-flex align-items-center">
              <input
                type="text"
                class="form-control"
                required
                autocomplete="on"
                v-model="project.source_id"
              />
            </div>
          </label>
          <label class="col-12">
            loyiha haqida
            <div class="input-group d-flex align-items-center">
              <textarea cols="30" rows="10" v-model="project.comment"></textarea>
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
