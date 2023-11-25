<template>
  <div>
    <Transition>
      <div class="v-backdrop" v-if="open">
        <div class="v-modal"   :class="modal_size">
          <button class="v-close" @click="closeModal()">&#10006;</button>
          <div class="v-modal-header">
            <slot name="header"></slot>
          </div>
          <div class="v-modal-body">
            <slot name="body"></slot>
          </div>
          <div class="v-model-footer">
            <slot name="footer"> </slot>
          </div>
        </div>

      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  props: {
    size: String,
  },
  data() {
    return {
      modal_size: String,
      open: false,
    };
  },
  created() {
    this.modal_size = this.size;
  },
  methods: {
    closeModal() {
      this.open = !this.open;
    },
  },
  mounted() {
    window.addEventListener("click", (event) => {
      const element = event.target;
      if (element.className == "v-backdrop") {
        this.open = false;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.v-backdrop {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 2rem 0;
  display: flex;
  place-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1px);
  overflow: auto;
  z-index: 3;
}

.v-modal {
  position: fixed;
  height: max-content;
  background-color: white;
  border-radius: 10px;
  transition: all 0.3s;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.v-modal.sm {
  width: 320px;
}

.v-modal.md {
  width: 425px;
}

.v-modal.lg {
  width: 768px;
}

.v-close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0;
  color: black;
  border-color: transparent;
  background-color: transparent;
  font-size: large;
}

.v-modal-header {
  padding: 1rem 1rem 0 1rem;
  margin-top: 50px;
}

.v-modal-body {
  padding: 1rem 1rem 1rem 1rem;
}

.v-modal-footer {
  padding: 0 1rem 1rem 1rem;
  text-align: end;
}

.v-toggle-modal-enter-active {
  animation: toggleBackdrop 0.3s;
  transition: all .5s;
}
.v-toggle-modal-leave-active {
  animation: toggleBackdrop 0.3s reverse;
}

.v-toggle-modal-enter-active .v-modal {
  animation: toggleModal 0.3s;
}
.v-toggle-modal-leave-active .v-modal {
  animation: toggleModal 0.3s reverse;
}

@keyframes toggleBackdrop {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes toggleModal {
  from {
    opacity: 0;
    translate: 0 -30px;
  }
  to {
    opacity: 1;
    translate: 0 0;
  }
}

@media (max-width: 320px) {
  .v-modal.sm,
  .v-modal.md,
  .v-modal.lg {
    width: 90%;
  }
}

@media (max-width: 425px) {
  .v-modal.md,
  .v-modal.lg {
    width: 90%;
  }
}

@media (max-width: 768px) {
  .v-modal.lg {
    width: 90%;
  }
}
</style>