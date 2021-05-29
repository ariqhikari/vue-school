<template>
  <div class="eskul-umum-item hero-title">
    <h4 class="montserrat font-semi-bold mb-2">
      {{ eskul.ketua }}
    </h4>
    <h3 class="montserrat font-bold">{{ eskul.name }}</h3>
    <p class="mb-4">
      {{ strippedContent(eskul.content, 100) }}
    </p>
    <router-link
      :to="{
        name: 'EkstrakurikulerContent',
        params: { slug: eskul.slug },
      }"
      class="montserrat font-semi-bold text-decoration-none btn-outline-yellow"
      >Lihat Ekstrakurikuler</router-link
    >
  </div>
</template>

<script>
export default {
  name: "EkstrakurikulerItem",
  props: ["eskul"],
  methods: {
    strippedContent(content, length) {
      let regex = /(<([^>]+)>)/gi;
      return content.replace(regex, "").substring(0, length);
    },
  },
};
</script>

<style>
</style>