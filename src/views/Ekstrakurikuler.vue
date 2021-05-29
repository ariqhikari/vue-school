<template>
  <div class="page-ekstrakurikuler page-berita-acara">
    <Navbar />
    <!-- Jumbotr -->
    <section class="berita-acara jurusan-titl">
      <div class="bg-jurusan"></div>
      <div class="container container-jumbotron">
        <div class="row justify-content-end mb-3">
          <div class="col-md text-right">
            <h1 class="montserrat font-bold text-white">
              Ekstrakurikuler <br />
              SMKN 4 Bandung
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
      </div>
    </section>

    <!-- Pendahuluan -->
    <section class="pendahuluan">
      <div class="container">
        <div class="row">
          <div class="col hero-title">
            <h1 class="montserrat font-bold">Ekstrakurikuler</h1>
          </div>
        </div>
        <div class="row">
          <div class="vertical-bar col-md-1 d-none d-md-block">
            <span class="vertical-line"></span>
            <p class="poppins font-light">Ekstrakurikuler</p>
          </div>
          <div class="pendahuluan-content col-md">
            <p>
              Ekstrakurikuler adalah kegiatan non-pelajaran formal yang
              dilakukan peserta didik sekolah atau universitas, umumnya di luar
              jam belajar kurikulum standar. Kegiatan-kegiatan ini ada pada
              setiap jenjang pendidikan dari sekolah dasar sampai universitas.
              Kegiatan ekstrakurikuler ditujukan agar siswa dapat mengembangkan
              kepribadian, bakat, dan kemampuannya di berbagai bidang di luar
              bidang akademik. Kegiatan ini diadakan secara swadaya dari pihak
              sekolah maupun siswa-siswi itu sendiri untuk merintis kegiatan di
              luar jam pelajaran sekolah.
            </p>
            <p>
              Kegiatan dari ekstrakurikuler ini sendiri dapat berbentuk kegiatan
              pada seni, olahraga, pengembangan kepribadian, dan kegiatan lain
              yang bertujuan positif untuk kemajuan dari siswa-siswi itu
              sendiri.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Eskul Wajib -->
    <section class="eskul-umum mb-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 hero-title">
            <h1 class="montserrat font-bold">Ekstrakurikuler Wajib</h1>
          </div>
        </div>
        <div
          class="row justify-content-center mt-5"
          v-if="eskulWajib.length > 0"
        >
          <div class="col-md-10 row">
            <div class="vertical-bar col-md-1 d-none d-md-block">
              <span class="vertical-line"></span>
              <p class="poppins font-light">Wajib</p>
            </div>
            <div class="col-md row">
              <div class="col-md-6" v-for="eskul in eskulWajib" :key="eskul.id">
                <EkstrakurikulerItem :eskul="eskul" />
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-5" v-else>
          <div class="col-md-10 row">
            <div class="vertical-bar col-md-1 d-none d-md-block">
              <b-skeleton-img
                no-aspect="true"
                width="20%"
                height="70%"
              ></b-skeleton-img>
            </div>
            <div class="col-md-11 row">
              <div class="col-md-6" v-for="n in 2" :key="n">
                <EkstrakurikulerSkeleton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Eskul Jurusan -->
    <section class="eskul-umum mb-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 hero-title">
            <h1 class="montserrat font-bold">Ekstrakurikuler Jurusan</h1>
          </div>
        </div>
        <div
          class="row justify-content-center mt-5"
          v-if="eskulJurusan.length > 0"
        >
          <div class="col-md-10 row">
            <div class="vertical-bar col-md-1 d-none d-md-block">
              <span class="vertical-line"></span>
              <p class="poppins font-light">Jurusan</p>
            </div>
            <div class="col-md row">
              <div
                class="col-md-6"
                v-for="eskul in eskulJurusan"
                :key="eskul.id"
              >
                <EkstrakurikulerItem :eskul="eskul" />
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-5" v-else>
          <div class="col-md-10 row">
            <div class="vertical-bar col-md-1 d-none d-md-block">
              <b-skeleton-img
                no-aspect="true"
                width="20%"
                height="70%"
              ></b-skeleton-img>
            </div>
            <div class="col-md-11 row">
              <div class="col-md-6" v-for="n in 2" :key="n">
                <EkstrakurikulerSkeleton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Eskul Umum -->
    <section class="eskul-umum">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 hero-title">
            <h1 class="montserrat font-bold">Ekstrakurikuler Umum</h1>
          </div>
        </div>
        <div
          class="row justify-content-center mt-5"
          v-if="eskulUmum.length > 0"
        >
          <div class="col-md-10 row">
            <div class="vertical-bar col-md-1 d-none d-md-block">
              <span class="vertical-line"></span>
              <p class="poppins font-light">Umum</p>
            </div>
            <div class="col-md-11 row">
              <div class="col-md-6" v-for="eskul in eskulUmum" :key="eskul.id">
                <EkstrakurikulerItem :eskul="eskul" />
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-5" v-else>
          <div class="col-md-10 row">
            <div class="vertical-bar col-md-1 d-none d-md-block">
              <b-skeleton-img
                no-aspect="true"
                width="20%"
                height="70%"
              ></b-skeleton-img>
            </div>
            <div class="col-md-11 row">
              <div class="col-md-6" v-for="n in 2" :key="n">
                <EkstrakurikulerSkeleton />
              </div>
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

// Components
import EkstrakurikulerItem from "@/components/components/EkstrakurikulerItem.vue";

// Skeletons
import EkstrakurikulerSkeleton from "@/components/components/skeletons/EkstrakurikulerSkeleton.vue";

export default {
  name: "Ekstrakurikuler",
  components: {
    Navbar,
    Footer,
    EkstrakurikulerItem,
    EkstrakurikulerSkeleton,
  },
  metaInfo: {
    title: "Ekstrakurikuler",
    titleTemplate: "%s | SMK Negeri 4 Bandung",
    htmlAttrs: {
      lang: "id",
    },
  },
  data() {
    return {
      eskulWajib: [],
      eskulJurusan: [],
      eskulUmum: [],
    };
  },
  methods: {
    setEskulWajib(data) {
      this.eskulWajib = data;
    },
    setEskulJurusan(data) {
      this.eskulJurusan = data;
    },
    setEskulUmum(data) {
      this.eskulUmum = data;
    },
    getApi() {
      this.$http
        .get(`http://localhost:8000/api/extracurricular`)
        .then((response) => {
          this.setEskulWajib(response.data.data.extracurricularsWajib);
          this.setEskulJurusan(response.data.data.extracurricularsJurusan);
          this.setEskulUmum(response.data.data.extracurricularsUmum);
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