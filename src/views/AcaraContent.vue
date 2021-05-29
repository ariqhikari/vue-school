<template>
  <div class="page-berita-detail">
    <Navbar />
    <!-- Acara Content -->
    <section
      class="detail-post jurusan-titl"
      v-if="Object.keys(event).length > 0"
    >
      <div class="bg-jurusan"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="detail-post-thumbnail">
              <img
                v-lazy="`http://localhost:8000/storage/${event.thumbnail}`"
                :alt="event.name"
                class="w-100"
              />
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md heading-post row m-0 p-0">
            <div class="col-md-12">
              <h2 style="font-weight: 600" class="text-capitalize">
                {{ event.name }}
              </h2>
              <div class="mt-3">
                <p
                  class="poppins font-semi-bold"
                  style="
                    font-size: 16px;
                    color: rgb(56, 56, 56);
                    margin-top: 3px;
                    text-transform: capitalize;
                  "
                >
                  Waktu Acara
                </p>
                <p style="margin-top: -19px; font-size: 14px">
                  {{ setDate(event.start_time) }} -
                  {{ setDate(event.end_time) }}
                </p>
              </div>
            </div>
            <div
              class="col-md-12 detail-post-content mt-2 text-left"
              v-html="event.desc"
            ></div>
            <div class="col-md-12 mt-2" v-if="event.pdf">
              <iframe
                :src="`http://localhost:8000/storage/${event.pdf}`"
                width="100%"
                height="500px"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="detail-post jurusan-titl" v-else>
      <div class="bg-jurusan"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <b-skeleton-img></b-skeleton-img>
          </div>
        </div>
        <div class="row mt-4 justify-content-center">
          <div class="col-md-12 mb-4">
            <b-skeleton animation="fade" width="55%"></b-skeleton>
            <b-skeleton animation="fade" width="30%"></b-skeleton>
          </div>
          <div class="col-md-12">
            <b-skeleton animation="fade"></b-skeleton>
            <b-skeleton animation="fade"></b-skeleton>
            <b-skeleton animation="fade"></b-skeleton>
          </div>
        </div>
      </div>
    </section>

    <BeritaTerkini :latestArticles="latestArticles"></BeritaTerkini>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// Layouts
import Navbar from "@/components/layouts/Navbar.vue";
import Footer from "@/components/layouts/Footer.vue";

// Components
import BeritaTerkini from "@/components/components/BeritaTerkini.vue";

export default {
  name: "AcaraContent",
  components: {
    Navbar,
    Footer,
    BeritaTerkini,
  },
  metaInfo() {
    return {
      title: `${this.event.name ? this.event.name : "Event"}`,
      titleTemplate: "%s | SMK Negeri 4 Bandung",
      htmlAttrs: {
        lang: "id",
      },
    };
  },
  data() {
    return {
      event: {},
      latestArticles: [],
    };
  },
  methods: {
    setDate(date) {
      return this.$moment(date).subtract(10, "days").calendar();
    },
    setEvent(data) {
      this.event = data;
    },
    setLatestArticles(data) {
      this.latestArticles = data;
    },
    getApi() {
      this.$http
        .get(`http://localhost:8000/api/event/${this.$route.params.slug}`)
        .then((response) => {
          this.setEvent(response.data.data.event);
          this.setLatestArticles(response.data.data.latestArticles);
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