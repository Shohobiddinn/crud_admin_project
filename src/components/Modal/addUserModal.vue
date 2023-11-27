<script>
import api from "../../server/api";
export default {
  name: "AddUser",
  emits: {
    end: null,
  },
  data() {
    return {
      status: "user_add",
      user: {
        id: 0,
        name: "",
        username: "",
        role: "admin",
        status: true,
        password: "",
        number: "",
      },
    };
  },
  computed: {},
  methods: {
    open(user) {
      if (this.status == "user_edit") {
        this.user = {
          id: user.id,
          name: user.name,
          username: user.username,
          role: user.role,
          status: user.status,
          password: "",
          number: user.number,
        };
        this.$refs.addUserModal.openModal();
      } else {
        this.user = {
          id: 0,
          name: "",
          username: "",
          role: "",
          status: true,
          password: "",
          number: "",
        };
        this.$refs.addUserModal.openModal();
      }
    },
    postUser() {
      if (this.status == "user_add") {
        api.user_add(this.user).then(() => {
          this.$util.toast().then(() => {
            this.$emit("end");
          });
          this.$refs.addUserModal.closeModal();
        });
      }else{
        api.user_update(this.user).then(() => {
          this.$util.toast().then(() => {
            this.$emit("end");
          });
          this.$refs.addUserModal.closeModal();
        });

      }
    },
  },
};
</script>

<template>
  <Modal ref="addUserModal" size="md">
    <template #header>
      <div class="tahrirlash">
        <div class="title text-uppercase text-success">
          {{ status == "user_edit" ? "tahrirlash" : "hodim qo'shish" }}
        </div>
        <form
          id="submit"
          @submit.prevent="postUser"
          class="form_submit d-flex flex-column"
        >
          <label class="col-12">
            F.I.O
            <div class="input-group d-flex align-items-center">
              <input
                type="text"
                class="form-control"
                required
                autocomplete="on"
                v-model="user.name"
              />
            </div>
          </label>
          <label class="col-12">
            Login
            <div class="input-group d-flex align-items-center">
              <input
                type="text"
                class="form-control"
                required
                autocomplete="on"
                v-model="user.username"
              />
            </div>
          </label>
          <label class="col-12">
            parol
            <div class="input-group d-flex align-items-center">
              <input
                type="password"
                class="form-control"
                required
                autocomplete="on"
                v-model="user.password"
              />
            </div>
          </label>
          <label class="col-12">
            Telfon raqam
            <div
              class="input-group d-flex align-items-center"
              style="height: 50px"
              :tel="$util.tel(user.number)"
            >
              <div class="input-group-text" style="height: 100%">+998</div>
              <input
                type="tel"
                class="form-control"
                minlength="9"
                maxlength="9"
                required
                v-model="user.number"
                autocomplete="on"
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
