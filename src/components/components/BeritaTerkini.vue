<template>
  <!-- Berita Terkini -->
  <section class="berita-terkini">
    <div class="container">
      <div class="row">
        <div class="col-md-6 hero-title">
          <h1 class="montserrat font-bold">Berita Terkini</h1>
          <span class="title-line"></span>
        </div>
      </div>
      <div class="row mt-5 mb-4" v-if="latestArticles.length > 0">
        <div
          class="col-md-6 col-lg-4 my-2"
          v-for="article in latestArticles"
          :key="article.id"
        >
          <BeritaItem :article="article" @changeApi="changeApi"></BeritaItem>
        </div>
      </div>
      <div class="row mt-5 mb-4" v-else>
        <div class="col-md-6 col-lg-4 my-2" v-for="n in 3" :key="n">
          <BeritaSkeleton />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Components
import BeritaItem from "@/components/components/BeritaItem.vue";

// Skeletons
import BeritaSkeleton from "@/components/components/skeletons/BeritaSkeleton.vue";

export default {
  name: "BeritaTerkini",
  props: ["latestArticles"],
  components: {
    BeritaItem,
    BeritaSkeleton,
  },
  methods: {
    strippedContent(content, length) {
      let regex = /(<([^>]+)>)/gi;
      return content.replace(regex, "").substring(0, length);
    },
    setDate(date) {
      return this.$moment(date).subtract(10, "days").calendar();
    },
    changeApi(slug) {
      if (this.$route.name == "BeritaContent") {
        this.$emit("changeApi", slug);
      }
    },
  },
};
</script>

<style>
</style>