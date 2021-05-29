<template>
  <!-- Footer -->
  <footer class="py-5">
    <div class="container">
      <div class="row">
        <div class="col">
          <div
            class="d-flex align-items-center"
            v-lazy-container="{ selector: 'img' }"
          >
            <img
              data-src="/assets/icons/smkn4.png"
              width="80px"
              alt="SMK Negeri 4 Bandung"
            />
            <h5 class="montserrat font-semi-bold m-2" style="line-height: 20px">
              SMK Negeri 4
              <br />
              Bandung
            </h5>
          </div>
        </div>
      </div>
      <div class="row mt-3 mt-md-5">
        <div class="col-md-6 col-lg-4 my-2 my-md-0 p-0">
          <div class="col-md-12">
            <h3 class="montserrat font-semi-bold">Informasi</h3>
          </div>
          <div class="col-md-12">
            <p>
              SMK NEGERI 4 BANDUNG <br />
              Jalan Kliningan Nomor 6 Buah Batu <br />
              Telp/Fax : (022) - 7303736 <br />
              Kode Pos : 40264 Kota Bandung <br />
              Provinsi Jawa Barat <br />
              Indonesia <br />
            </p>
          </div>
          <div class="col-md-12 row">
            <div class="col-2 col-md-2">
              <a
                href="https://www.facebook.com/smkn4bandung/"
                rel="noopener"
                target="_blank"
                class="footer-social-media"
              >
                <font-awesome-icon :icon="['fab', 'facebook']" />
              </a>
            </div>
            <div class="col-2 col-md-2">
              <a
                href="https://www.instagram.com/smknegeri4bandung/"
                rel="noopener"
                target="_blank"
                class="footer-social-media"
              >
                <font-awesome-icon :icon="['fab', 'instagram']" />
              </a>
            </div>
            <div class="col-2 col-md-2">
              <a
                href="https://twitter.com/smkn4bdg"
                rel="noopener"
                target="_blank"
                class="footer-social-media"
              >
                <font-awesome-icon :icon="['fab', 'twitter']" />
              </a>
            </div>
            <div class="col-2 col-md-2">
              <a
                href="https://www.youtube.com/channel/UCRPYUQB7BG56w00AcgF6dPQ"
                rel="noopener"
                target="_blank"
                class="footer-social-media"
              >
                <font-awesome-icon :icon="['fab', 'youtube']" />
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 my-2 my-md-0">
          <div class="row">
            <div class="col-md-12">
              <h3 class="montserrat font-semi-bold">Page</h3>
            </div>
            <div class="col-md-12 my-2">
            <router-link :to="{ name: 'Beranda' }"> Beranda </router-link>
            </div>
            <div class="col-md-12 my-2">
              <router-link :to="{ name: 'Profil' }"> Profil </router-link>
            </div>
            <div class="col-md-12 my-2">
              <router-link :to="{ name: 'BeritaAcara' }">
                Berita & Acara
              </router-link>
            </div>
            <div class="col-md-12 my-2">
              <router-link :to="{ name: 'Ekstrakurikuler' }">
                Ekstrakurikuler
              </router-link>
            </div>
            <div class="col-md-12 my-2">
              <a
                href="http://disdik.jabarprov.go.id/"
                rel="noopener"
                target="_blank"
              >
                Dinas Pendidikan Jawa Barat
              </a>
            </div>
            <div class="col-md-12 my-2">
              <a
                href="https://www.kemdikbud.go.id/main/"
                rel="noopener"
                target="_blank"
              >
                Kementerian Pendidikan Dan Kebudayaan
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 my-2 my-md-0 d-md-none d-lg-block ml-auto">
          <div class="row">
            <div class="col-md-12">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  class="embed-responsive-item"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.569602867084!2d107.6265137153756!3d-6.941928769887181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e86413eb50ad%3A0xf9930b5268e3fee1!2sVocational%20High%20School%204%20Bandung!5e0!3m2!1sen!2sid!4v1607496113287!5m2!1sen!2sid"
                  allowfullscreen
                  frameborder="0"
                  style="border: 0"
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-between align-items-center mt-5">
        <div class="col-md-6 my-2 my-md-0">
          <p>
            © {{ new Date().getFullYear() }} SMK Negeri 4 Bandung. <br />
            All rights reserved.
          </p>
        </div>
        <div class="col-md-4 d-flex justify-content-md-end my-2 my-md-0">
          <div
            class="rev-block d-flex align-items-center justify-content-end"
            @mouseenter="forwardAnimation"
            @mouseleave="reverseAnimation"
          >
            <a
              href="https://auroraweb.id/"
              rel="noopener"
              target="_blank"
              class="text-decoration-none text-white"
            >
              <span> Code Design Credit </span>
              <img src="/assets/icons/aurora.png" alt="Aurora" class="d-none" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    forwardAnimation() {
      const revBlock = document.querySelector(".rev-block");
      const span = document.querySelector(".rev-block span");
      const img = document.querySelector(".rev-block img");

      revBlock.classList.remove("reverse");

      setTimeout(() => {
        revBlock.classList.add("forwards");
        span.classList.add("d-none");
        img.classList.remove("d-none");
      }, 50);
    },
    reverseAnimation() {
      const revBlock = document.querySelector(".rev-block");
      const span = document.querySelector(".rev-block span");
      const img = document.querySelector(".rev-block img");

      revBlock.classList.remove("forwards");

      setTimeout(() => {
        revBlock.classList.add("reverse");
      }, 50);

      setTimeout(() => {
        img.classList.add("d-none");
        span.classList.remove("d-none");
      }, 650);
    },
  },
};
</script>

<style>
</style>