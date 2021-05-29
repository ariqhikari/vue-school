<template>
  <div class="page-faq">
    <Navbar />
    <!-- Jumbotron -->
    <div class="jumbotron">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-8 text-center">
            <div
              class="logo-faq bg-white rounded-circle p-3 d-flex align-items-center justify-content-center my-2 mx-auto"
              v-lazy-container="{ selector: 'img' }"
            >
              <img
                data-src="/assets/icons/smkn4.png"
                alt="SMK Negeri 4 Bandung"
              />
            </div>
            <h1 class="montserrat font-bold">
              Pertanyaan Yang Sering Ditanyakan
            </h1>
          </div>
          <div class="col-md-12 col-lg-10">
            <form class="mt-5 d-flex justify-content-center">
              <div
                class="form-group d-flex input-search justify-content-center align-items-center shadow-sm"
                :class="{ active: searchActive }"
              >
                <button class="btn" type="button" style="cursor: default">
                  <font-awesome-icon :icon="['fas', 'search']" />
                </button>
                <input
                  id="search"
                  type="text"
                  class="form-control border-0 w-100 bg-transparent"
                  placeholder="Katakan masalahmu.."
                  v-model="search"
                  @input="getSearchFaqs"
                />
              </div>
            </form>
            <div
              class="card card-search mx-auto border-0 shadow-sm"
              style="margin-top: -20px"
              v-if="search.length > 0 && searchFaqs.length > 0"
            >
              <div class="card-body">
                <div
                  class="text-decoration-none my-2 card-faq"
                  style="cursor: pointer"
                  v-for="faq in searchFaqs"
                  :key="faq.id"
                  @click="showModalFaq(faq.id)"
                >
                  <h5 class="montserrat font-semi-bold m-0">
                    {{ faq.question }}
                  </h5>
                  <hr v-if="faq.id != searchFaqs[searchFaqs.length - 1].id" />
                </div>
              </div>
            </div>
            <div
              class="card card-search mx-auto border-0 shadow-sm"
              style="margin-top: -20px"
              v-else-if="search.length > 0 && searchFaqs.length == 0"
            >
              <div class="card-body text-center">
                <h5>Not Found</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Faq -->
    <b-modal
      id="modal-faq"
      ref="modal-faq"
      size="md"
      hide-footer
      scrollable
      centered
    >
      <div v-if="Object.keys(modalFaq).length > 0">
        <h3 class="montserrat font-semi-bold mb-2">{{ modalFaq.question }}</h3>
        <p v-html="modalFaq.answer"></p>
      </div>
      <div v-else>
        <b-skeleton animation="wave" width="55%"></b-skeleton>
        <b-skeleton animation="wave" width="70%"></b-skeleton>
      </div>
    </b-modal>

    <!-- Faq Ask -->
    <div class="container faq-ask" v-if="faqs.status == 1">
      <div class="row justify-content-center">
        <div class="col-md-12 col-lg-10">
          <div class="card mb-3 border-0 shadow bg-transparent">
            <div class="row no-gutters">
              <div
                class="col-md-4 ask-icon d-flex justify-content-center align-items-center text-center"
              >
                <div class="bg-white p-3 rounded-circle">
                  <font-awesome-icon :icon="['fas', 'question']" />
                </div>
              </div>
              <div class="col-md-8 ask-content bg-white">
                <div class="card-body">
                  <h5 class="card-title">Pertanyaan</h5>
                  <p class="card-text mb-4">
                    Masalahmu tidak ditemukan? Silahkan bertanya kepada kami,
                    kami akan menjawab pertanyaan anda segera mungkin!
                  </p>
                  <a
                    v-b-toggle.faq-ask
                    style="cursor: pointer"
                    class="montserrat font-semi-bold btn-outline-yellow"
                  >
                    Buat Pertanyaan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <b-collapse id="faq-ask" class="col-md-12 col-lg-10 mt-2">
          <div class="card card-body border-0 shadow">
            <FaqForm />
          </div>
        </b-collapse>
      </div>
    </div>

    <!-- Faq Content -->
    <section class="faq-content mb-5">
      <div class="container">
        <div class="row justify-content-center" v-if="faqs.data.length > 0">
          <div class="col-md-12 col-lg-10">
            <div class="faq-item mb-4" v-for="faq in faqs.data" :key="faq.id">
              <a
                :aria-controls="`faq-${faq.id}`"
                :class="faq.visible ? null : 'collapsed'"
                :aria-expanded="faq.visible ? 'true' : 'false'"
                @click="faq.visible = !faq.visible"
                style="cursor: pointer"
                class="text-left w-100 d-flex justify-content-between faq-button montserrat font-semi-bold p-4"
              >
                {{ faq.question }}
                <font-awesome-icon
                  :icon="['fas', faq.visible ? 'chevron-up' : 'chevron-down']"
                  :class="faq.visible ? 'text-danger' : 'text-success'"
                  class="mt-2"
                />
              </a>
              <b-collapse
                :id="`faq-${faq.id}`"
                class="faq-collapse"
                v-model="faq.visible"
              >
                <div class="card card-body poppins border-0 p-4">
                  <p v-html="faq.answer"></p>
                </div>
              </b-collapse>
            </div>
          </div>
        </div>
        <div class="row justify-content-center" v-else>
          <div class="col-md-12 col-lg-10">
            <div class="mb-3" v-for="n in 3" :key="n">
              <b-skeleton-img no-aspect="true" height="75px"></b-skeleton-img>
            </div>
          </div>
        </div>
        <div
          class="row justify-content-center"
          v-if="faqs.data.length < faqs.count"
        >
          <button
            v-if="!faqs.moreFaq"
            @click="getFaqs"
            class="col-6 col-md-4 col-lg-2 btn btn-dark rounded-pill py-2 montserrat font-bold"
          >
            View More
          </button>
          <button
            v-else
            type="submit"
            class="col-6 col-md-4 col-lg-2 btn btn-dark rounded-pill py-2 montserrat font-bold"
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
// Layouts
import Navbar from "@/components/layouts/Navbar.vue";
import Footer from "@/components/layouts/Footer.vue";

// Components
import FaqForm from "@/components/components/FaqForm.vue";

export default {
  name: "Faq",
  components: {
    Navbar,
    Footer,
    FaqForm,
  },
  metaInfo: {
    title: "FAQ",
    titleTemplate: "%s | SMK Negeri 4 Bandung",
    htmlAttrs: {
      lang: "id",
    },
  },
  data() {
    return {
      searchActive: false,
      search: "",
      searchFaqs: [],
      modalFaq: {},
      faqs: {
        data: [],
        take: 0,
        count: 0,
        statusQuestion: false,
        moreFaq: false,
      },
    };
  },
  methods: {
    strippedContent(content, length) {
      let regex = /(<([^>]+)>)/gi;
      return content.replace(regex, "").substring(0, length);
    },
    setSearchFaqs(data) {
      this.searchFaqs = data;
    },
    setModalFaq(data) {
      this.modalFaq = data;
    },
    setFaqs(data) {
      this.faqs.data = data.questions;
      this.faqs.count = data.countQuestions;
      this.faqs.status = data.statusQuestion;
    },
    getSearchFaqs() {
      const faqAsk = document.querySelector(".faq-ask");

      if (this.search.length > 0) {
        faqAsk.classList.add("faq-search");
        this.searchActive = true;
        this.$http
          .get(`http://localhost:8000/api/question?q=${this.search}`)
          .then((response) => this.setSearchFaqs(response.data.data))
          .catch((error) => {
            console.error(error);
          });
      } else {
        faqAsk.classList.remove("faq-search");
        this.searchActive = false;
        this.searchFaqs = [];
      }
    },
    showModalFaq(id) {
      this.modalFaq = {};
      this.$refs["modal-faq"].show();
      this.$http
        .get(`http://localhost:8000/api/question/${id}`)
        .then((response) => this.setModalFaq(response.data.data))
        .catch((error) => {
          console.error(error);
        });
    },
    getFaqs() {
      this.faqs.moreFaq = true;
      this.faqs.take += 3;
      this.$http
        .get(`http://localhost:8000/api/question/latest/${this.faqs.take}`)
        .then((response) => {
          this.faqs.moreFaq = false;
          this.setFaqs(response.data.data);
        })
        .catch((error) => {
          this.faqs.moreFaq = false;
          console.error(error);
        });
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    this.getFaqs();
  },
};
</script>

<style>
</style>