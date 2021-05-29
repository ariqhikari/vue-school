<template>
  <div :class="{ loader: true, fadeout: !isLoading }">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-6 col-md-4 col-lg-2">
          <Lottie
            :options="defaultOptions"
            v-on:animCreated="handleAnimation"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Plugins
import Lottie from "@/components/plugins/Lottie.vue";
import * as loading from "@/assets/animations/loading.json";

export default {
  name: "LoadingScreen",
  props: ["isLoading"],
  components: {
    Lottie,
  },
  data() {
    return {
      defaultOptions: {
        animationData: loading.default,
        loop: true, // Optional
        autoplay: true, // Optional
      },
    };
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },
  },
};
</script>

<style>
.loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 2000;
}

.fadeout {
  animation: fadeout 2s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
