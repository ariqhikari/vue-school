<template>
  <div class="page-my-profile">
    <Navbar />
    <div class="jumbotron-profile"></div>

    <div
      class="container mt-4"
      style="clear: both"
      v-if="Object.keys(user).length > 0"
    >
      <div class="row justify-content-center" style="margin-top: -100px">
        <div class="col-md-12">
          <div class="card box-profile border-0 shadow-sm">
            <div class="card-body">
              <div class="row text-center">
                <div class="col">
                  <img
                    v-lazy="`http://localhost:8000/storage/${user.avatar}`"
                    :alt="user.username"
                    width="150px"
                    height="150px"
                    style="border-radius: 50%; margin-top: -100px"
                    class="rounded-circle"
                  />
                  <br /><br />
                  <h2 style="text-transform: capitalize; font-weight: 600">
                    {{ user.username }}
                  </h2>
                  <p>Bergabung Pada {{ user.created_at | moment("LL") }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-md-12">
          <b-tabs
            active-nav-item-class="tab-active"
            active-tab-class="tab-active"
            content-class="mt-3"
            fill
            lazy
          >
            <b-tab title="Berita" active v-if="articles.data.length > 0">
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
            </b-tab>
            <b-tab title="Acara" v-if="events.data.length > 0">
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
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </div>

    <div class="container mt-4" style="clear: both" v-else>
      <div class="row justify-content-center" style="margin-top: -100px">
        <div class="col-md-12">
          <div class="card box-profile border-0 shadow-sm">
            <div class="card-body">
              <div class="row text-center">
                <div class="col d-flex flex-column align-items-center">
                  <b-skeleton
                    type="avatar"
                    width="150px"
                    height="150px"
                    style="margin-top: -100px"
                  ></b-skeleton>
                  <br /><br />
                  <b-skeleton animation="wave" width="20%"></b-skeleton>
                  <b-skeleton animation="wave" width="30%"></b-skeleton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-md-12 d-flex justify-content-between">
          <b-skeleton animation="wave" width="40%"></b-skeleton>
          <b-skeleton animation="wave" width="40%"></b-skeleton>
        </div>
      </div>
    </div>
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
import BeritaItem from "@/components/components/BeritaItem.vue";
import AcaraItem from "@/components/components/AcaraItem.vue";

// Skeletons
import BeritaSkeleton from "@/components/components/skeletons/BeritaSkeleton.vue";

export default {
  name: "MyProfile",
  components: {
    Navbar,
    Footer,
    BeritaItem,
    AcaraItem,
    BeritaSkeleton,
  },
  metaInfo() {
    return {
      title: `${this.user.username ? this.user.username : "User"}`,
      titleTemplate: "%s | SMK Negeri 4 Bandung",
      htmlAttrs: {
        lang: "id",
      },
    };
  },
  data() {
    return {
      user: {},
      articles: {
        data: [],
        take: 2,
        count: 0,
        moreArticle: false,
      },
      events: {
        data: [],
        take: 2,
        count: 0,
        moreEvent: false,
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
    setUser(data) {
      this.user = data;
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
      this.articles.take += 1;
      this.$http
        .get(
          `http://localhost:8000/api/profile/${this.$route.params.slug}/article/${this.articles.take}`
        )
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
      this.events.take += 1;
      this.$http
        .get(
          `http://localhost:8000/api/profile/${this.$route.params.slug}/event/${this.events.take}`
        )
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
      .get(`http://localhost:8000/api/profile/${this.$route.params.slug}`)
      .then((response) => {
        this.setUser(response.data.data);
        this.getArticles();
        this.getEvents();
      })
      .catch((error) => console.error(error));
  },
};
</script>

<style>
</style>