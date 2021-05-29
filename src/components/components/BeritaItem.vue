<template>
  <div class="card d-flex align-items-center border-0 berita-item">
    <img
      v-lazy="`http://localhost:8000/storage/${article.thumbnail}`"
      :alt="article.title"
      class="card-img-top img-fluid"
    />
    <div class="card-body d-flex flex-column justify-content-between">
      <div class="d-flex flex-column justify-content-between">
        <div class="berita-wrap-title">
          <h5 class="montserrat font-bold berita-date">
            {{ setDate(article.updated_at) }}
          </h5>
          <span class="berita-top-line my-2 ml-2"></span>
          <h6
            class="montserrat font-bold berita-title"
            v-if="article.title.length > 30"
          >
            <router-link
              @click.native="changeApi(article.slug)"
              :to="{
                name: 'BeritaContent',
                params: { slug: article.slug },
              }"
            >
              {{ strippedContent(article.title, 30) }}..
            </router-link>
          </h6>
          <h6 class="montserrat font-bold berita-title" v-else>
            <router-link
              @click.native="changeApi(article.slug)"
              :to="{
                name: 'BeritaContent',
                params: { slug: article.slug },
              }"
            >
              {{ strippedContent(article.title, 30) }}
            </router-link>
          </h6>
        </div>
        <p class="poppins font-light" v-if="article.content.length > 50">
          {{ strippedContent(article.content, 50) }}..
        </p>
        <p class="poppins font-light" v-else>
          {{ strippedContent(article.content, 50) }}
        </p>
      </div>
      <span class="berita-bottom-line"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BeritaItem",
  props: ["article"],
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