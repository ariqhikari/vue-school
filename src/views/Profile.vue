<template>
  <div class="page-profile">
    <Navbar />
    <!-- Jumbotron -->
    <div class="jumbotron-profile jumbotron rounded-0 mb-0">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-md-8">
            <h1 class="montserrat font-semi-bold">
              <span class="font-bold">Profil</span> <br />
              SMKN 4 Bandung
            </h1>
          </div>
        </div>
        <div class="row justify-content-center scroll-button-wrap">
          <div class="col-1 d-flex justify-content-center">
            <ScrollButton to="kepala-sekolah" />
          </div>
        </div>
      </div>
    </div>

    <!-- Kepala Sekolah -->
    <section id="kepala-sekolah" class="kepala-sekolah py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div
            class="col-md-9 col-lg-8 row justify-content-center align-items-center"
          >
            <div
              class="col-8 col-md-6 col-lg-4 d-flex justify-content-center"
              v-lazy-container="{ selector: 'img' }"
            >
              <img
                data-src="/assets/img/kepala-sekolah.png"
                alt="Drs. Agung Indaryatno, M. Pd"
                class="rounded-circle"
              />
            </div>
            <div class="col-md mt-3 mt-md-0 kepala-sekolah-name">
              <h4 class="montserrat font-bold mt-5">
                Drs. Agung Indaryatno, M. Pd
              </h4>
              <h5 class="montserrat font-semi-bold">Kepala Sekolah</h5>
            </div>
          </div>
        </div>
        <div class="row justify-content-center text-center mt-5">
          <div class="col-12 mb-3">
            <h5 class="montserrat font-semi-bold">Sambutan Kepala Sekolah</h5>
            <span class="kepala-sekolah-line"></span>
          </div>
          <div class="col-12">
            <p class="text-left">
              Sampurasun, SMKN 4 BANDUNG adalah Sekolah Menengah Kejuruan yang
              memiliki kelompok bidang keahlian Ketenaga Listrikan, Audio Video,
              dan Teknik Komputer dan Informatika. Keberadaannya didukung oleh
              dunia usaha dan dunia industri, baik dalam pembelajaran maupun
              penyerapan lulusannya. Pembelajaran teori dan praktek tidak hanya
              dilakukan di dalam kelas tetapi dilakukan di dunia industri
              melalui praktek kerja industri di perusahaan-perusahaan yang
              relevan.
            </p>
            <p class="text-left">
              Lulusannya telah tersebar di berbagai perguruan tinggi dan Dunia
              Usaha/Dunia Industri. Kesempatan untuk melanjutkan studi dan
              bekerja sangat terbuka luas bagi lulusannya. Jalur PMDK tersedia
              bagi lulusan yang berprestasi baik PN maupun Swasta. Bagi siswa
              yang ingin bekerja, penempatannya didukung oleh Disnaker melalui
              Bursa Kerja Khusus (BKK) sesuai dengan kualifikasi yang di
              persyaratkan oleh perusahaan, serta siswa dapat berwirausaha
              sesuai dengan kompetensi keahlian masing-masing.
            </p>
          </div>
        </div>
      </div>
      <div class="parallax kepala-sekolah-parallax" v-rellax="rellax">
        <h1 class="montserrat font-bold">Sambutan.</h1>
      </div>
    </section>

    <!-- Tentang -->
    <section class="tentang" id="tentang">
      <div class="container">
        <div class="row">
          <div class="col hero-title">
            <h1 class="montserrat font-bold">
              SMK Negeri <br />
              4 Bandung
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="vertical-bar col-md-1 d-none d-md-block">
            <span class="vertical-line"></span>
            <p class="poppins font-light">Tentang</p>
          </div>
          <div class="tentang-content col-md row">
            <div class="col-md">
              <div class="tentang-gambar"></div>
              <div class="card border-0 shadow ml-2 ml-md-5 mt-5 p-4">
                <p class="text-left">
                  SMKN 4 BANDUNG adalah Sekolah Menengah Kejuruan yang memiliki
                  enam program keahlian Teknik Instalasi Listrik, Teknik Otomasi
                  Industri, Teknik Electronika, Teknik Komputer dan Jaringan,
                  Rekayasa Perangkat Lunak dan Multimedia. Keberadaannya
                  didukung oleh EDUKA (dunia usaha dan dunia kerja)baik dalam
                  pembelajaran maupun penyerapan lulusannya. Pembelajaran teori
                  dan praktek tidak hanya dilakukan di dalam kelas tetapi
                  dilakukan di dunia industri melalui praktek kerja industri di
                  perusahaan-perusahaan yang relevan.
                </p>
                <p class="text-left">
                  Lulusannya telah tersebar di berbagai perguruan tinggi dan
                  Dunia Usaha/Dunia Industri. Kesempatan untuk melanjutkan studi
                  dan bekerja sangat terbuka luas bagi lulusannya. Jalur PMDK
                  tersedia bagi lulusan yang berprestasi baik PN maupun Swasta.
                  Bagi siswa yang ingin bekerja, penempatannya didukung oleh
                  Disnaker melalui Bursa Kerja Khusus (BKK) sesuai dengan
                  kualifikasi yang di persyaratkan oleh perusahaa, serta siswa
                  dapat berwirausaha sesuai dengan kompetensi keahlian
                  masing-masing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sejarah -->
    <div class="sejarah jumbotron rounded-0">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-10" v-lazy-container="{ selector: 'img' }">
            <img
              data-src="/assets/icons/smkn4-white.png"
              width="150px"
              alt="SMK Negeri 4 Bandung"
              class="mb-3"
            />
            <h1 class="montserrat font-semi-bold mb-3">
              Sejarah SMK Negeri 4 Bandung
            </h1>
            <p class="text-left">
              Sesuai tuntutan pasar kerja pada tahun pelajaran SMK Negeri 4
              Bandung bermula dari STM Negeri 2 yang berdiri pada tahun 1962,
              dengan jurusan Mesin, Bangunan, Listrik dan Kimia dengan lokasi di
              Jl. Ciliwung Bandung.
            </p>
            <p class="text-left">
              Pada tahun 1965 sekolah berpindah ke Jl. Kelenteng dan selanjutnya
              pada tahun 1969 sekolah berpindah ke Jl. Kliningan No. 6 Buahbatu
              Bandung sampai sekarang. Jurusan menjadi Listrik Instalasi,
              Listrik Pemakaian dan Elektronika Komunikasi.
            </p>
            <p class="text-left">
              Pada tahun pelajaran 1999/2000 STM Negeri 2 Bandung berubah nama
              menjadi SMK Negeri 4 Bandung dan menjadi salah satu sekolah
              kejuruan kelompok teknologi dan industri.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Moto -->
    <section class="moto">
      <div class="container">
        <div class="row">
          <div class="col-md-6 hero-title">
            <h1 class="montserrat font-bold">Moto</h1>
          </div>
        </div>
        <div class="row">
          <div class="moto-content col-md-11">
            <h2 class="montserrat font-bold mb-3">“KUAT MA'RIFAT”</h2>
            <p>
              <span class="montserrat font-semi-bold">KONSISTEN</span> dalam
              menuntut, mencari, mengembangkan, dan mengaplikasikan Ilmu
              Pengetahuan
            </p>
            <p>
              <span class="montserrat font-semi-bold">ULET,</span> tidak
              mengenal (pantang) menyerah, putus asa, putus semangat pada setiap
              kegiatan
            </p>
            <p>
              <span class="montserrat font-semi-bold">AGAMIS,</span> semua staf
              Pengajar, karyawan, dan siswa dapat menjalakan agamanya secara
              benar
            </p>
            <p>
              <span class="montserrat font-semi-bold">TERAMPIL,</span> salah
              satu tujuan SMK Negeri 4 Bandung adalah mendidik siswa dan atau
              lulusannya agar menjadi terampil dalam pekerjaan sesuai dengan
              Program keahliannya.
            </p>
            <p>
              <span class="montserrat font-semi-bold">MA'RIFAT,</span> maju
              memberi manfaat
            </p>
          </div>
          <div class="vertical-bar col-md-1 d-none d-md-block">
            <span class="vertical-line"></span>
            <p class="poppins font-light">Moto</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section class="gallery">
      <div class="container">
        <div class="row">
          <div class="col-md-6 hero-title">
            <h1 class="montserrat font-bold">Gallery</h1>
          </div>
        </div>
        <div class="row mt-5">
          <div
            class="gallery-content col-md-11 row m-0 p-0"
            v-if="galleries.length > 0"
          >
            <VueSlickCarousel
              class="col-md-12 row vue-carousel m-0 p-0"
              v-bind="settings"
            >
              <div
                class="col-md-12 my-2 gallery-item"
                v-for="gallery in galleries"
                :key="gallery.id"
              >
                <img
                  v-lazy="`http://localhost:8000/storage/${gallery.photo}`"
                  alt="Photo"
                  class="w-100"
                  @click="changeGallery"
                />
              </div>
              <template #prevArrow="arrowOption">
                <div class="custom-arrow prevArrow d-none d-md-block">
                  {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
                </div>
              </template>
              <template #nextArrow="arrowOption">
                <div class="custom-arrow nextArrow d-none d-md-block">
                  {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
                </div>
              </template>
            </VueSlickCarousel>
            <div class="col-md-12 mt-3 gallery-main">
              <img
                v-lazy="`http://localhost:8000/storage/${galleries[0].photo}`"
                alt="Photo"
                class="w-100"
              />
            </div>
          </div>
          <div class="gallery-content col-md-11 row m-0 p-0" v-else>
            <div class="col-md-12 row vue-carousel m-0 p-0">
              <div class="col-md-6 my-2 gallery-item" v-for="n in 2" :key="n">
                <b-skeleton-img></b-skeleton-img>
              </div>
            </div>
            <div class="col-md-12 mt-3 gallery-main">
              <b-skeleton-img></b-skeleton-img>
            </div>
          </div>
          <div class="vertical-bar col-md-1 d-none d-md-block">
            <span class="vertical-line"></span>
            <p class="poppins font-light">Gallery</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Media Partner -->
    <section class="media-partner py-5">
      <div class="container">
        <div class="row justify-content-center hero-title">
          <div class="col text-center">
            <h1 class="montserrat font-bold">Media Partner</h1>
          </div>
        </div>
        <div
          class="row justify-content-center align-items-center mt-5"
          v-lazy-container="{ selector: 'img' }"
        >
          <div
            class="col-md-3 mb-3 d-flex justify-content-center align-items-center"
          >
            <img
              data-src="/assets/icons/dikbud.png"
              alt="Dinas Pendidikan"
              width="203px"
              height="203px"
            />
          </div>
          <div
            class="col-md-3 mb-3 d-flex justify-content-center align-items-center"
          >
            <img
              data-src="/assets/icons/disdik-jabar.png"
              alt="Dinas Pendidikan Jawa Barat"
              width="270px"
              height="193.94px"
            />
          </div>
          <div
            class="col-md-3 mb-3 d-flex justify-content-center align-items-center"
          >
            <img
              data-src="/assets/icons/cisco.png"
              alt="Cisco"
              width="171px"
              height="171px"
            />
          </div>
          <div
            class="col-md-3 mb-3 d-flex justify-content-center align-items-center"
          >
            <img
              data-src="/assets/icons/oracle-academy.png"
              alt="Oracle Academy"
              width="173.84px"
              height="74.47px"
            />
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

// Components
import ScrollButton from "@/components/components/ScrollButton.vue";

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "Profil",
  components: {
    Navbar,
    Footer,
    ScrollButton,
    VueSlickCarousel,
  },
  metaInfo: {
    title: "Profil",
    titleTemplate: "%s | SMK Negeri 4 Bandung",
    htmlAttrs: {
      lang: "id",
    },
  },
  data() {
    return {
      galleries: [],
      rellax: {
        horizontal: true,
        horizontalSpeed: -5,
        verticalScrollAxis: "x",
      },
      settings: {
        arrows: true,
        infinite: true,
        autoplay: true,
        slidesToScroll: 1,
        slidesToShow: 2,
        speed: 1000,
        autoplaySpeed: 4000,
        centerMode: true,
        centerPadding: "20px",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      },
    };
  },
  methods: {
    changeGallery(img) {
      var galleryMain = document.querySelector(".gallery-main img");

      galleryMain.style.opacity = 0;
      galleryMain.src = img.path[0].src;
      galleryMain.parentElement.style.display = "block";
      setTimeout(() => {
        galleryMain.style.opacity = 1;
      }, 300);
    },
    setGalleries(data) {
      this.galleries = data.galleries;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    this.$http
      .get("http://localhost:8000/api/gallery-category/profile")
      .then((response) => {
        this.setGalleries(response.data.data);
      })
      .catch((error) => console.error(error));
  },
};
</script>