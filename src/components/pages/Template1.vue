<template>
  <div>
    <!-- Jumbotron -->
    <div
      class="jumbotron rounded-0"
      :style="`background: url(http://localhost:8000/storage/${page.thumbnail});`"
    >
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-md-8">
            <h1 class="montserrat font-semi-bold">
              <span class="font-bold" v-html="page.title_header"></span> <br />
              SMKN 4 Bandung
            </h1>
          </div>
        </div>
        <div class="row justify-content-center scroll-button-wrap">
          <div class="col-1 d-flex justify-content-center">
            <ScrollButton to="content" />
          </div>
        </div>
      </div>
    </div>
    <!-- Content -->
    <section id="content" class="mb-5" style="margin-top: 50px">
      <div class="container template-content" v-html="page.content"></div>
      <div class="container mt-4" v-if="page.pdf">
        <div class="row">
          <div class="col-md-12">
            <iframe
              :src="`http://localhost:8000/storage/${page.pdf}`"
              width="100%"
              height="500px"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// Components
import ScrollButton from "@/components/components/ScrollButton.vue";

export default {
  name: "Template1",
  props: ["page"],
  components: {
    ScrollButton,
  },
};
</script>

<style>
</style>