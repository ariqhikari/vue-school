<template>
  <div class="page-home">
    <Navbar @setMajors="setMajors" />
    <!-- Jumbotron -->
    <div class="jumbotron rounded-0" v-if="slidders.length > 0">
      <div
        class="bg-jumbotron"
        v-if="slidders[0].url_background.includes('slidder')"
        :style="`background: url(http://localhost:8000/storage/${slidders[0].url_background});`"
      >
        ``
      </div>
      <div class="bg-jumbotron" v-else>
        <div class="bg-video">
          <youtube
            id="player"
            :video-id="slidders[0].url_background"
            :player-vars="youtube.playerVars"
            @ready="youtubeReady"
          ></youtube>
        </div>
      </div>
      <b-carousel
        id="carousel-1"
        img-width="1024"
        img-height="480"
        :interval="5000"
        controls
      >
        <b-carousel-slide
          img-blank
          v-for="slidder in slidders"
          :key="slidder.id"
        >
          <div class="container p-0">
            <div class="row justify-content-center text-center">
              <div class="col-md" v-lazy-container="{ selector: 'img' }">
                <img
                  data-src="/assets/icons/smkn4-white.png"
                  alt="SMK Negeri 4 Bandung"
                  class="mb-4 logo-white"
                  style="opacity: 0.95"
                />
                <div v-html="slidder.content"></div>
              </div>
            </div>
          </div>
        </b-carousel-slide>
      </b-carousel>
      <div class="container">
        <div class="row justify-content-center scroll-button-wrap">
          <div class="col-1 d-flex justify-content-center">
            <ScrollButton to="program-studi" />
          </div>
        </div>
      </div>
    </div>
    <div class="jumbotron rounded-0" v-else>
      <div
        class="bg-jumbotron"
        style="background: url(/assets/img/loading-bg.jpg)"
      ></div>
    </div>

    <!-- Program Studi -->
    <section class="program-studi" id="program-studi">
      <div class="container">
        <div class="row">
          <div class="col hero-title">
            <h1 class="montserrat font-bold">
              Program <br />
              Keahlian
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="vertical-bar col-md-1 d-none d-md-block">
            <span class="vertical-line"></span>
            <p class="poppins font-light">Program Studi</p>
          </div>
          <div class="jurusan col-md">
            <div class="row justify-content-around" v-if="majors.length > 0">
              <div
                class="col-10 col-md-4 text-center my-3"
                v-for="major in majors"
                :key="major.id"
              >
                <router-link
                  :to="{
                    name: 'Jurusan',
                    params: { slug: major.slug },
                  }"
                  class="d-flex flex-column mx-auto ml-md-auto jurusan-item"
                >
                  <img
                    v-lazy="`http://localhost:8000/storage/${major.logo}`"
                    :alt="major.name"
                    class="w-100 mb-3"
                  />
                  <div>
                    <h4 class="poppins font-semi-bold text-capitalize">
                      {{ major.name }}
                    </h4>
                  </div>
                </router-link>
              </div>
            </div>
            <div class="row justify-content-around" v-else>
              <div
                class="col-10 col-md-4 col-lg-4 my-3"
                v-for="n in 6"
                :key="n"
              >
                <div
                  class="d-flex flex-column mx-auto ml-md-auto align-items-center jurusan-item"
                >
                  <b-skeleton-img
                    no-aspect="true"
                    height="200px"
                  ></b-skeleton-img>
                  <b-skeleton
                    animation="fade"
                    width="55%"
                    class="mt-3"
                  ></b-skeleton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="parallax jurusan-parallax" v-rellax="rellax">
        <h1 class="montserrat font-bold">Kuat ma'rifat.</h1>
      </div>
    </section>

    <!-- Berita Acara -->
    <section class="berita-acara">
      <div class="container">
        <div class="row">
          <div class="col-md-6 hero-title">
            <h1 class="montserrat font-bold">
              Berita <br />
              Terknini
            </h1>
          </div>
        </div>
        <div class="row mt-5 mb-4" v-if="latestArticles.length > 0">
          <div
            class="col-md-6 col-lg-4 my-2"
            v-for="article in latestArticles"
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
        <div class="row justify-content-center">
          <router-link
            :to="{ name: 'BeritaAcara' }"
            class="col-6 col-md-4 col-lg-2 btn btn-green rounded-pill py-2 montserrat font-bold"
            >View More</router-link
          >
        </div>
      </div>
    </section>

    <!-- Acara Upcoming -->
    <section class="acara-upcoming">
      <div class="container">
        <div class="row">
          <div class="col hero-title">
            <h1 class="montserrat font-bold">
              Acara Yang <br />
              Akan Datang.
            </h1>
          </div>
        </div>
        <div class="row mt-5 mb-4" v-if="latestEvents.length > 0">
          <div
            class="col-md-6 col-lg-4 my-2"
            v-for="event in latestEvents"
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
        <div class="row justify-content-center">
          <router-link
            :to="{ name: 'BeritaAcara' }"
            class="col-6 col-md-4 col-lg-2 btn btn-yellow rounded-pill py-2 montserrat font-bold text-white"
            >View More</router-link
          >
        </div>
      </div>
    </section>

    <!-- Informasi -->
    <section class="informasi">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-md-6 hero-title">
            <h1 class="montserrat font-bold">
              Sistem Informasi <br />
              dan Pembelajaran.
            </h1>
          </div>
          <div class="col-md-4 d-flex justify-content-around">
            <a
              href="https://eschool.smkn4bdg.sch.id/login"
              rel="noopener"
              target="_blank"
              class="poppins font-light btn btn-outline-light-blue px-4 py-1 mt-2 mt-md-1"
            >
              Eschool
            </a>
            <a
              href="https://belajar.smkn4bdg.sch.id/"
              rel="noopener"
              target="_blank"
              class="poppins font-light btn btn-outline-light-blue px-4 py-1 mt-2 mt-md-1"
            >
              Belajar
            </a>
          </div>
        </div>
      </div>
      <div class="parallax informasi-parallax" v-rellax="rellax">
        <h1 class="montserrat font-bold">Informasi</h1>
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
import ScrollButton from "@/components/components/ScrollButton.vue";
import BeritaItem from "@/components/components/BeritaItem.vue";
import AcaraItem from "@/components/components/AcaraItem.vue";

// Skeletons
import BeritaSkeleton from "@/components/components/skeletons/BeritaSkeleton.vue";

export default {
  name: "Beranda",
  components: {
    Navbar,
    Footer,
    ScrollButton,
    BeritaItem,
    AcaraItem,
    BeritaSkeleton,
  },
  metaInfo: {
    title: "SMK Negeri 4 Bandung",
    htmlAttrs: {
      lang: "id",
    },
    description:
      "SMKN 4 BANDUNG adalah Sekolah Menengah Kejuruan yang memiliki kelompok bidang keahlian Ketenaga Listrikan, Audio Video, dan Teknik Komputer dan Informatika. Keberadaannya didukung oleh dunia usaha dan dunia industri, baik dalam pembelajaran maupun penyerapan lulusannya.",
  },
  data() {
    return {
      slidders: [],
      majors: [],
      latestArticles: [],
      latestEvents: [],
      rellax: {
        horizontal: true,
        horizontalSpeed: -5,
        verticalScrollAxis: "x",
      },
      youtube: {
        playerVars: {
          playlist: null,
          playsinline: 1,
          autoplay: 1,
          loop: 1,
          mute: 1,
          modestbranding: 1,
          showinfo: 0,
          controls: 0,
          rel: 0,
        },
      },
    };
  },
  created() {
    window.addEventListener("resize", this.checkJumbotron);
  },
  methods: {
    youtubeReady(event) {
      this.player = event.target;
      this.player.mute();
      this.player.playVideo();
    },
    checkJumbotron() {
      const images = document.querySelectorAll(".carousel-item img");
      const tablet = window.matchMedia("(min-width: 768px)");

      images.forEach((image) => {
        if (image.getAttribute("width") == 1024) {
          if (tablet.matches) {
            image.setAttribute("height", 320);
          } else {
            image.setAttribute("height", 380);
          }

          image.removeAttribute("class");
        }
      });
    },
    setSlidders(data) {
      this.slidders = data.slidders;

      if (!this.slidders[0].url_background.includes("slidder")) {
        this.youtube.playerVars.playlist = this.slidders[0].url_background;
      }

      setTimeout(() => {
        this.checkJumbotron();
      }, 5);
    },
    setMajors(data) {
      this.majors = data;
    },
    setLatestArticles(data) {
      this.latestArticles = data.articles;
    },
    setLatestEvents(data) {
      this.latestEvents = data.events;
    },
    getArticles(take = 3) {
      this.$http
        .get(`http://localhost:8000/api/article/latest/${take}`)
        .then((response) => this.setLatestArticles(response.data.data))
        .catch((error) => console.error(error));
    },
    getEvents(take = 3) {
      this.$http
        .get(`http://localhost:8000/api/event/latest/${take}`)
        .then((response) => this.setLatestEvents(response.data.data))
        .catch((error) => console.error(error));
    },
    getApi() {
      this.$http
        .get("http://localhost:8000/api/slidder")
        .then((response) => {
          this.setSlidders(response.data.data);
          this.getArticles();
          this.getEvents();
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