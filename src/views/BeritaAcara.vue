<template>
  <div class="page-berita-acara">
    <Navbar />
    <!-- Berita Acara -->
    <section class="berita-acara jurusan-titl">
      <div class="bg-jurusan"></div>
      <div class="container container-jumbotron">
        <div class="row justify-content-end mb-3">
          <div class="col-md text-right">
            <h1 class="montserrat font-bold text-white">
              Berita & Acara terbaru dari <br />
              SMKN 4 Bandung.
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-10" v-lazy-container="{ selector: 'img' }">
            <img
              data-src="/assets/img/berita-event.jpg"
              alt="berita-event"
              class="w-100"
            />
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-12 hero-title mb-4">
            <h1 class="poppins font-semi-bold">
              Berita <br />
              Terknini
            </h1>
          </div>
        </div>
        <VueSlickCarousel
          v-bind="settings"
          v-if="latestArticles.length > 0"
          class="row mt-4 vue-carousel"
        >
          <div
            class="col-md-12 berita-item-carousel d-flex flex-column flex-md-row align-items-md-center"
            v-for="article in latestArticles"
            :key="article.id"
          >
            <router-link
              :to="{ name: 'BeritaContent', params: { slug: article.slug } }"
              class="berita-item-carousel-image"
            >
              <img
                v-lazy="`http://localhost:8000/storage/${article.thumbnail}`"
                :alt="article.title"
              />
            </router-link>
            <div class="mt-3 ml-3">
              <h4 class="poppins font-light">
                {{ setDate(article.updated_at) }}
              </h4>
              <h3
                class="poppins font-semi-bold"
                v-if="article.title.length > 30"
              >
                {{ strippedContent(article.title, 30) }}..
              </h3>
              <h3 class="poppins font-semi-bold" v-else>
                {{ strippedContent(article.title, 30) }}
              </h3>
              <router-link
                :to="{ name: 'BeritaContent', params: { slug: article.slug } }"
                class="poppins font-light btn btn-outline-blue px-4 py-1 mt-2 mt-md-1"
                >Baca</router-link
              >
            </div>
          </div>
          <template #customPaging="">
            <div class="custom-dot"></div>
          </template>
        </VueSlickCarousel>
        <div v-else class="row mt-4 vue-carousel">
          <div
            class="col-md-6 my-2 berita-item-carousel d-flex flex-column flex-md-row align-items-md-center"
            v-for="n in 2"
            :key="n"
          >
            <div class="berita-item-carousel-image">
              <b-skeleton-img></b-skeleton-img>
            </div>
            <div class="mt-3 ml-3">
              <b-skeleton animation="fade" width="55%"></b-skeleton>
              <b-skeleton animation="fade" width="85%"></b-skeleton>
              <b-skeleton type="button" class="mt-2 mt-md-1"></b-skeleton>
            </div>
          </div>
        </div>
      </div>
      <div class="parallax berita-acara-parallax" v-rellax="rellax">
        <h1 class="montserrat font-bold">Berita dan Acara</h1>
      </div>
    </section>

    <!-- Berita -->
    <section class="berita mt-0">
      <div class="container">
        <div class="row">
          <div class="col-md-6 hero-title">
            <h1 class="montserrat font-bold">Berita</h1>
          </div>
        </div>
        <div class="row mt-5 mb-4" v-if="articles.data.length > 0">
          <div
            class="col-md-6 col-lg-4 my-2"
            v-for="article in articles.data"
            :key="article.id"
          >
            <BeritaItem :article="article"></BeritaItem>
          </div>
        </div>
        <div class="row mt-5 mb-4" v-else>
          <div class="col-md-6 col-lg-4 my-2" v-for="n in 3" :key="n">
            <BeritaSkeleton />
          </div>
        </div>
        <div
          class="row justify-content-center"
          v-if="articles.data.length < articles.count"
        >
          <button
            v-if="!articles.moreArticle"
            @click="getArticles"
            class="col-6 col-md-4 col-lg-2 btn btn-green rounded-pill py-2 montserrat font-bold"
          >
            View More
          </button>
          <button
            v-else
            type="submit"
            class="col-6 col-md-4 col-lg-2 btn btn-green rounded-pill py-2 montserrat font-bold"
            disabled
          >
            <b-spinner
              style="width: 1.4rem; height: 1.4rem"
              class="mx-4"
            ></b-spinner>
          </button>
        </div>
      </div>
    </section>

    <!-- Acara Upcoming -->
    <section class="acara-upcoming mb-5">
      <div class="container">
        <div class="row">
          <div class="col hero-title">
            <h1 class="montserrat font-bold">
              Acara Yang <br />
              Akan Datang.
            </h1>
          </div>
        </div>
        <div class="row mt-5 mb-4" v-if="events.data.length > 0">
          <div
            class="col-md-6 col-lg-4 my-2"
            v-for="event in events.data"
            :key="event.id"
          >
            <AcaraItem :event="event"></AcaraItem>
          </div>
        </div>
        <div class="row mt-5 mb-4" v-else>
          <div class="col-md-6 col-lg-4 my-2" v-for="n in 3" :key="n">
            <BeritaSkeleton />
          </div>
        </div>
        <div
          class="row justify-content-center"
          v-if="events.data.length < events.count"
        >
          <button
            v-if="!events.moreEvent"
            @click="getEvents"
            class="col-6 col-md-4 col-lg-2 btn btn-green rounded-pill py-2 montserrat font-bold"
          >
            View More
          </button>
          <button
            v-else
            type="submit"
            class="col-6 col-md-4 col-lg-2 btn btn-green rounded-pill py-2 montserrat font-bold"
            disabled
          >
            <b-spinner
              style="width: 1.4rem; height: 1.4rem"
              class="mx-4"
            ></b-spinner>
          </button>
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

// Components
import BeritaItem from "@/components/components/BeritaItem.vue";
import AcaraItem from "@/components/components/AcaraItem.vue";

// Skeletons
import BeritaSkeleton from "@/components/components/skeletons/BeritaSkeleton.vue";

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "BeritaAcara",
  components: {
    Navbar,
    Footer,
    BeritaItem,
    AcaraItem,
    BeritaSkeleton,
    VueSlickCarousel,
  },
  metaInfo: {
    title: "Berita & Acara",
    titleTemplate: "%s | SMK Negeri 4 Bandung",
    htmlAttrs: {
      lang: "id",
    },
  },
  data() {
    return {
      latestArticles: [],
      articles: {
        data: [],
        take: 0,
        count: 0,
        moreArticle: false,
      },
      events: {
        data: [],
        take: 0,
        count: 0,
        moreEvent: false,
      },
      rellax: {
        horizontal: true,
        horizontalSpeed: -5,
        verticalScrollAxis: "x",
      },
      settings: {
        dots: true,
        infinite: true,
        // autoplay: true,
        centerMode: true,
        centerPadding: "20px",
        slidesToScroll: 1,
        slidesToShow: 2,
        speed: 1000,
        autoplaySpeed: 4000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              centerMode: false,
              slidesToShow: 1,
            },
          },
        ],
      },
    };
  },
  methods: {
    strippedContent(content, length) {
      let regex = /(<([^>]+)>)/gi;
      return content.replace(regex, "").substring(0, length);
    },
    setDate(date) {
      return this.$moment(date).subtract(10, "days").calendar();
    },
    setLatestArticles(data) {
      this.latestArticles = data.articles;
    },
    setArticles(data) {
      this.articles.data = data.articles;
      this.articles.count = data.countArticles;
    },
    setEvents(data) {
      this.events.data = data.events;
      this.events.count = data.countEvents;
    },
    getArticles() {
      this.articles.moreArticle = true;
      this.articles.take += 3;
      this.$http
        .get(`http://localhost:8000/api/article/latest/${this.articles.take}`)
        .then((response) => {
          this.articles.moreArticle = false;
          this.setArticles(response.data.data);
        })
        .catch((error) => {
          this.articles.moreArticle = false;
          console.error(error);
        });
    },
    getEvents() {
      this.events.moreEvent = true;
      this.events.take += 3;
      this.$http
        .get(`http://localhost:8000/api/event/latest/${this.events.take}`)
        .then((response) => {
          this.events.moreEvent = false;
          this.setEvents(response.data.data);
        })
        .catch((error) => {
          this.events.moreEvent = false;
          console.error(error);
        });
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    this.$http
      .get("http://localhost:8000/api/article/latest/4")
      .then((response) => {
        this.setLatestArticles(response.data.data);
        this.getArticles();
        this.getEvents();
      })
      .catch((error) => console.error(error));
  },
};
</script>