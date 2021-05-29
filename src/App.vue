<template>
  <div id="app">
    <LoadingScreen :isLoading="isLoading" />
    <vue-page-transition name="overlay-right" v-if="!isLoading">
      <router-view />
    </vue-page-transition>
  </div>
</template>

<script>
import { mapActions } from "vuex";

// Components
import LoadingScreen from "@/components/components/LoadingScreen";

export default {
  name: "App",
  components: {
    LoadingScreen,
  },
  data() {
    return { isLoading: true };
  },
  created() {
    this.$store.dispatch("navbar/getPagesData").then(
      () => {
        this.isLoading = false;
      },
      (error) => console.error(error)
    );
  },
  methods: {
    ...mapActions("navbar", ["getPagesData"]),
  },
  mounted() {
    window.localStorage.clear();
    window.localStorage.setItem("modal", "true");
  },
};
</script>

<style>
:root {
  --overlay-bg: #007ea7 !important;
  --transition-duration: 0.35s;
}
</style>
