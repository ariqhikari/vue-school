<template>
  <div class="page-jurusan2">
    <Navbar />
    <!-- Jurusan Content -->
    <section
      class="jurusan-content berita-acara-content"
      v-if="Object.keys(major).length > 0"
    >
      <div
        class="bg-jurusan"
        :style="`background: ${major.color.bg_color}`"
      ></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10">
            <img
              v-lazy="`http://localhost:8000/storage/${major.thumbnail}`"
              :alt="major.name"
              class="w-100"
            />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-12 mb-4 hero-title mt-3">
                <h1
                  class="poppins font-semi-bold"
                  :style="`color: ${major.color.font_color}`"
                >
                  {{ major.name }}
                </h1>
              </div>
              <div class="col-md-12">
                <div class="jurusan-desc">
                  <div v-html="major.desc" class="mb-4"></div>
                  <iframe
                    :src="`http://localhost:8000/storage/${major.pdf}`"
                    width="100%"
                    height="500px"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="jurusan-content berita-acara-content jurusan-titl" v-else>
      <div class="bg-jurusan"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10">
            <b-skeleton-img></b-skeleton-img>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-12">
                <b-skeleton animation="fade" width="55%"></b-skeleton>
                <b-skeleton animation="fade" width="30%"></b-skeleton>
              </div>
              <div class="col-md-12">
                <b-skeleton animation="fade"></b-skeleton>
                <b-skeleton animation="fade"></b-skeleton>
                <b-skeleton animation="fade" class="mb-4"></b-skeleton>
                <b-skeleton-img></b-skeleton-img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Jurusan Lainnya -->
    <section class="berita-terkini">
      <div class="container">
        <div class="row">
          <div class="col-md-6 hero-title">
            <h1 class="montserrat font-bold">Jurusan Lainnya</h1>
            <span class="title-line"></span>
          </div>
        </div>
        <div class="row mt-5 mb-4" v-if="latestMajors.length > 0">
          <div
            class="col-md-6 col-lg-4 mb-5"
            v-for="major in latestMajors"
            :key="major.id"
          >
            <div class="jurusan-item hero-title">
              <div
                class="thumbnail-jurusan w-100 d-flex align-items-end p-3"
                :style="`background: url(http://localhost:8000/storage/${major.thumbnail}); background-size: cover;
                background-position: center;`"
              >
                <h3 class="montserrat font-bold">{{ major.name }}</h3>
              </div>
              <div
                class="mt-3 mb-4"
                v-html="`${strippedContent(major.desc, 50)}..`"
              ></div>
              <router-link
                class="montserrat font-semi-bold btn-outline-yellow"
                @click.native="changeApi(major.slug)"
                :to="{
                  name: 'Jurusan2',
                  params: { slug: major.slug },
                }"
                >Lihat Jurusan</router-link
              >
            </div>
          </div>
        </div>
        <div class="row mt-5 mb-4" v-else>
          <div class="col-md-6 col-lg-4 mb-5" v-for="n in 3" :key="n">
            <div class="jurusan-item hero-title">
              <b-skeleton-img></b-skeleton-img>
              <div class="mt-3 mb-4">
                <b-skeleton animation="fade" width="85%"></b-skeleton>
                <b-skeleton animation="fade" width="55%"></b-skeleton>
              </div>
              <b-skeleton type="button"></b-skeleton>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// Layouts
import Navbar from "@/components/layouts/Navbar.vue";
import Footer from "@/components/layouts/Footer.vue";

export default {
  name: "Jurusan2",
  components: {
    Navbar,
    Footer,
  },
  metaInfo() {
    return {
      title: `${this.major.name ? this.major.name : "Jurusan"}`,
      titleTemplate: "%s | SMK Negeri 4 Bandung",
      htmlAttrs: {
        lang: "id",
      },
    };
  },
  data() {
    return {
      major: {},
      latestMajors: [],
    };
  },
  methods: {
    strippedContent(content, length) {
      let regex = /(<([^>]+)>)/gi;
      return content.replace(regex, "").substring(0, length);
    },
    setMajor(data) {
      this.major = data;
    },
    setLatestMajors(data) {
      this.latestMajors = data;
    },
    changeApi(slug) {
      this.$route.params.slug = slug;
      window.scrollTo(0, 0);
      this.getApi();
    },
    getApi() {
      this.$http
        .get(`http://localhost:8000/api/major/${this.$route.params.slug}`)
        .then((response) => {
          this.setMajor(response.data.data.major);
          this.setLatestMajors(response.data.data.latestMajors);
        })
        .catch((error) => console.error(error));
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    this.getApi();
  },
};
</script>

<style>
</style>