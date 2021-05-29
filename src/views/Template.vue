<template>
  <div class="page-template">
    <Navbar @changeApi="getApi" />
    <div v-if="Object.keys(page).length > 0">
      <Template1 v-if="page.template == 0" :page="page" />
      <Template2 v-else :page="page" />

      <GalleryCategory
        v-if="galleryCategories.length > 0"
        :galleryCategories="galleryCategories"
        :template="page.template"
      />
    </div>

    <div v-else>
      <!-- Jumbotron -->
      <div
        class="jumbotron rounded-0"
        style="background: url(/assets/img/loading-bg.jpg)"
      >
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-md-8">
              <b-skeleton
                width="50%"
                height="25px"
                class="mx-auto"
              ></b-skeleton>
              <b-skeleton width="80%" class="mx-auto mt-4"></b-skeleton>
              <b-skeleton width="70%" class="mx-auto mt-2"></b-skeleton>
            </div>
          </div>
        </div>
      </div>
      <!-- Content -->
      <section class="mb-5">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <b-skeleton width="100%" height="50px"></b-skeleton>
              <b-skeleton width="55%" height="50px"></b-skeleton>
              <b-skeleton width="70%" height="50px"></b-skeleton>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Berita -->
    <section
      class="mb-5"
      v-if="articles.data.length > 0"
      :class="page.template == 0 ? 'berita' : 'berita-terkini'"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-6 hero-title">
            <h1 class="montserrat font-bold">Berita</h1>
          </div>
        </div>
        <div class="row mt-5 mb-4">
          <div
            class="col-md-6 col-lg-4 my-2"
            v-for="article in articles.data"
            :key="article.id"
          >
            <BeritaItem :article="article"></BeritaItem>
          </div>
        </div>
        <div
          class="row justify-content-center"
          v-if="articles.data.length < articles.count"
        >
          <button
            v-if="!articles.moreArticle"
            @click="getArticles(page.category_id)"
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
import GalleryCategory from "@/components/components/GalleryCategory.vue";

// Pages
import Template1 from "@/components/pages/Template1.vue";
import Template2 from "@/components/pages/Template2.vue";

export default {
  name: "Template",
  components: {
    Navbar,
    Footer,
    BeritaItem,
    GalleryCategory,
    Template1,
    Template2,
  },
  metaInfo() {
    return {
      title: `${this.page.title_page ? this.page.title_page : "Page"}`,
      titleTemplate: "%s | SMK Negeri 4 Bandung",
      htmlAttrs: {
        lang: "id",
      },
    };
  },
  data() {
    return {
      page: {},
      galleryCategories: [],
      articles: {
        data: [],
        take: 2,
        count: 0,
        moreArticle: false,
      },
    };
  },
  methods: {
    setPage(data) {
      this.page = data;
      if (this.page.category_id > 0) {
        this.getArticles(this.page.category_id);
      }
    },
    setGalleryCategories(data) {
      data = data.map((galleryCategory) => {
        galleryCategory.galleries = galleryCategory.galleries.map((gallery) => {
          return `http://localhost:8000/storage/${gallery.photo}`;
        });
        return galleryCategory;
      });

      this.galleryCategories = data;
    },
    setArticles(data) {
      this.articles.data = data.articles;
      this.articles.count = data.countArticles;
    },
    getArticles(id) {
      this.articles.moreArticle = true;
      this.articles.take += 1;
      this.$http
        .get(`http://localhost:8000/api/category/${id}/${this.articles.take}`)
        .then((response) => {
          this.articles.moreArticle = false;
          this.setArticles(response.data.data);
        })
        .catch((error) => {
          this.articles.moreArticle = false;
          console.error(error);
        });
    },
    getApi(value) {
      window.scrollTo(0, 0);

      const slug = value ?? this.$route.params.slug;
      this.galleryCategories = [];
      this.articles = {
        data: [],
        take: 2,
        count: 0,
        moreArticle: false,
      };

      this.$http
        .get(`http://localhost:8000/api/page/${slug}`)
        .then((response) => {
          this.setPage(response.data.data.page);

          if (slug.includes("sarana")) {
            this.setGalleryCategories(response.data.data.galleryCategories);
          }
        })
        .catch((error) => console.error(error));
    },
  },
  mounted() {
    this.getApi();
  },
};
</script>