<template>
  <div class="page-berita-acara">
    <section class="berita-acara jurusan-titl">
      <div class="bg-jurusan"></div>
      <div class="container container-jumbotron">
        <div class="row justify-content-end mb-3">
          <div class="col-md text-right">
            <h1
              class="montserrat font-bold text-white"
              v-html="page.title_header"
            ></h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-10">
            <img
              v-lazy="`http://localhost:8000/storage/${page.thumbnail}`"
              alt="berita-event"
              class="w-100"
            />
          </div>
        </div>
        <!-- Content -->
        <div class="row mt-5">
          <div class="col-md-12 hero-title mb-4">
            <h1 class="poppins font-semi-bold" v-html="page.title_header"></h1>
          </div>
          <div class="col-md-12">
            <div class="row m-0 template-content" v-html="page.content"></div>
            <div class="row mt-4 p-0" v-if="page.pdf">
              <div class="col-md-12">
                <iframe
                  :src="`http://localhost:8000/storage/${page.pdf}`"
                  width="100%"
                  height="500px"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Template2",
  props: ["page"],
};
</script>

<style scoped>
h1.poppins::after {
  width: 200px !important;
}
</style>