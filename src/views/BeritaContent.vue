<template>
  <div class="page-berita-detail">
    <Navbar />
    <!-- Berita Content -->
    <section
      class="detail-post jurusan-titl"
      v-if="Object.keys(article).length > 0"
    >
      <div class="bg-jurusan"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="detail-post-thumbnail">
              <img
                v-lazy="`http://localhost:8000/storage/${article.thumbnail}`"
                :alt="article.title"
                class="w-100"
              />
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md heading-post row m-0 p-0">
            <div class="col-md-12">
              <h2 style="font-weight: 600" class="text-capitalize">
                {{ article.title }}
              </h2>
              <div class="mt-3">
                <router-link
                  :to="{
                    name: 'MyProfile',
                    params: { slug: article.user.slug },
                  }"
                >
                  <img
                    v-lazy="
                      `http://localhost:8000/storage/${article.user.avatar}`
                    "
                    :alt="article.user.username"
                    width="48px"
                    height="48px"
                    style="object-fit: cover"
                    class="rounded-circle float-left mt-2"
                  />
                </router-link>

                <div class="float-left ml-3">
                  <p>
                    <router-link
                      :to="{
                        name: 'MyProfile',
                        params: { slug: article.user.slug },
                      }"
                      class="poppins font-semi-bold"
                      style="
                        font-size: 16px;
                        color: rgb(56, 56, 56);
                        margin-top: 3px;
                        text-transform: capitalize;
                      "
                    >
                      {{ article.user.username }}
                    </router-link>
                  </p>
                  <p style="margin-top: -19px; font-size: 14px">
                    {{ setDate(article.created_at) }} •
                    {{ article.views }}
                    views
                  </p>
                </div>
              </div>
            </div>
            <div
              class="col-md-12 detail-post-content mt-2 text-left"
              v-html="article.content"
            ></div>
            <div class="col-md-12 mt-2" v-if="article.pdf">
              <iframe
                :src="`http://localhost:8000/storage/${article.pdf}`"
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

    <BeritaTerkini
      :latestArticles="latestArticles"
      @changeApi="getApi"
    ></BeritaTerkini>
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
  name: "BeritaContent",
  components: {
    Navbar,
    Footer,
    BeritaTerkini,
  },
  metaInfo() {
    return {
      title: `${this.article.title ? this.article.title : "Article"}`,
      titleTemplate: "%s | SMK Negeri 4 Bandung",
      htmlAttrs: {
        lang: "id",
      },
    };
  },
  data() {
    return {
      article: {},
      latestArticles: [],
    };
  },
  methods: {
    setDate(date) {
      return this.$moment(date).subtract(10, "days").calendar();
    },
    setArticle(data) {
      this.article = data;
    },
    setLatestArticles(data) {
      this.latestArticles = data;
    },
    getApi(value) {
      const slug = value ?? this.$route.params.slug;
      window.scrollTo(0, 0);

      this.$http
        .get(`http://localhost:8000/api/article/${slug}`)
        .then((response) => {
          this.setArticle(response.data.data.article);
          this.setLatestArticles(response.data.data.latestArticles);
        })
        .catch((error) => console.error(error));
    },
  },
  mounted() {
    this.getApi();
  },
};
</script>

<style>
</style>