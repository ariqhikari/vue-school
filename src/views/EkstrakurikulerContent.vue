<template>
  <div class="page-ekstrakurikuler nav-bg">
    <Navbar />
    <!-- Ekstrakurikuler Content -->
    <section
      class="ekstrakurikuler-content"
      v-if="Object.keys(eskul).length > 0"
    >
      <div class="container">
        <div class="row">
          <div class="col hero-title">
            <h1 class="montserrat font-bold">
              {{ eskul.name }}
            </h1>
          </div>
        </div>
        <div class="row eskul-detail">
          <div class="vertical-bar col-md-1 d-none d-md-block">
            <span class="vertical-line"></span>
            <p class="poppins font-light">{{ eskul.name }}</p>
          </div>
          <div
            class="col-md-11 row justify-content-center eskul-umum-item m-0 p-0"
          >
            <div class="col-md-6 col-lg-4">
              <div class="eskul-logo rounded-circle mb-4 mx-auto">
                <img
                  v-lazy="`http://localhost:8000/storage/${eskul.logo}`"
                  :alt="eskul.name"
                />
              </div>
            </div>
            <div class="col-md-12 col-lg-8 hero-title mt-3 mt-lg-0">
              <h4 class="montserrat font-semi-bold mb-2">{{ eskul.ketua }}</h4>
              <h3 class="montserrat font-bold">{{ eskul.name }}</h3>
              <p v-html="eskul.content"></p>
              <div class="mt-2" v-if="eskul.pdf">
                <iframe
                  :src="`http://localhost:8000/storage/${eskul.pdf}`"
                  width="100%"
                  height="500px"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ekstrakurikuler-content" v-else>
      <div class="container">
        <div class="row">
          <div class="col hero-title">
            <b-skeleton animation="wave" width="33%"></b-skeleton>
          </div>
        </div>
        <div class="row eskul-detail">
          <div class="vertical-bar col-md-1 d-none d-md-block">
            <b-skeleton-img
              no-aspect="true"
              width="20%"
              height="70%"
            ></b-skeleton-img>
          </div>
          <div
            class="col-md-11 row justify-content-center eskul-umum-item m-0 p-0"
          >
            <div class="col-md-6 col-lg-4">
              <div class="eskul-logo rounded-circle mb-4 mx-auto">
                <b-skeleton-img
                  no-aspect="true"
                  width="100%"
                  height="100%"
                ></b-skeleton-img>
              </div>
            </div>
            <div class="col-md-12 col-lg-8 mt-3 mt-lg-0">
              <b-skeleton
                animation="wave"
                width="33%"
                class="mb-2"
              ></b-skeleton>
              <b-skeleton animation="wave" width="55%"></b-skeleton>
              <div class="mt-3">
                <b-skeleton animation="wave" width="85%"></b-skeleton>
                <b-skeleton animation="wave" width="70%"></b-skeleton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Prev Nest Eskul -->
    <section class="ekstrakurikuler-prev-next">
      <div class="container">
        <div class="row justify-content-end">
          <div
            class="col-md-4 eskul-detail mx-md-5"
            v-if="Object.keys(paginateEskul.prev).length > 0"
          >
            <div class="horizontal-bar">
              <span class="horizontal-line"></span>
              <p class="poppins font-light">Sebelumnya</p>
            </div>
            <div class="eskul-umum-item hero-title">
              <h4 class="montserrat font-semi-bold mb-2">
                {{ paginateEskul.prev.ketua }}
              </h4>
              <h3 class="montserrat font-bold">
                {{ paginateEskul.prev.name }}
              </h3>
              <p>{{ strippedContent(paginateEskul.prev.content, 50) }}</p>
              <router-link
                class="montserrat font-semi-bold btn-outline-yellow"
                @click.native="changeApi(paginateEskul.prev.slug)"
                :to="{
                  name: 'EkstrakurikulerContent',
                  params: { slug: paginateEskul.prev.slug },
                }"
                >Lihat Ekstrakurikuler</router-link
              >
            </div>
          </div>
          <div
            class="col-md-4 eskul-detail mx-md-5"
            v-if="Object.keys(paginateEskul.next).length > 0"
          >
            <div class="horizontal-bar">
              <span class="horizontal-line"></span>
              <p class="poppins font-light">Selanjutnya</p>
            </div>
            <div class="eskul-umum-item hero-title">
              <h4 class="montserrat font-semi-bold mb-2">
                {{ paginateEskul.next.ketua }}
              </h4>
              <h3 class="montserrat font-bold">
                {{ paginateEskul.next.name }}
              </h3>
              <p>{{ strippedContent(paginateEskul.next.content, 50) }}</p>
              <router-link
                class="montserrat font-semi-bold btn-outline-yellow"
                @click.native="changeApi(paginateEskul.next.slug)"
                :to="{
                  name: 'EkstrakurikulerContent',
                  params: { slug: paginateEskul.next.slug },
                }"
                >Lihat Ekstrakurikuler</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <section></section>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// Layouts
import Navbar from "@/components/layouts/Navbar.vue";
import Footer from "@/components/layouts/Footer.vue";

export default {
  name: "EkstrakurikulerContent",
  components: {
    Navbar,
    Footer,
  },
  metaInfo() {
    return {
      title: `${this.eskul.name ? this.eskul.name : "Ekstrakurikuler"}`,
      titleTemplate: "%s | SMK Negeri 4 Bandung",
      htmlAttrs: {
        lang: "id",
      },
    };
  },
  data() {
    return {
      eskul: {},
      paginateEskul: {
        prev: {},
        next: {},
      },
    };
  },
  methods: {
    strippedContent(content, length) {
      let regex = /(<([^>]+)>)/gi;
      return content.replace(regex, "").substring(0, length);
    },
    setEskul(data) {
      this.eskul = data;
    },
    setPaginateEskul(data) {
      if (data.prev == null) {
        data.prev = {};
      }
      if (data.next == null) {
        data.next = {};
      }

      this.paginateEskul = data;
    },
    changeApi(slug) {
      this.$route.params.slug = slug;
      window.scrollTo(0, 0);
      this.getApi();
    },
    getApi() {
      this.$http
        .get(
          `http://localhost:8000/api/extracurricular/${this.$route.params.slug}`
        )
        .then((response) => {
          this.setEskul(response.data.data.extracurricular);
          this.setPaginateEskul(response.data.data.paginateExtracurricular);
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