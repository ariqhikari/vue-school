<template>
  <div class="card d-flex align-items-center border-0 berita-item">
    <img
      v-lazy="`http://localhost:8000/storage/${event.thumbnail}`"
      :alt="event.name"
      class="card-img-top img-fluid"
    />
    <div class="card-body d-flex flex-column justify-content-between">
      <div class="d-flex flex-column justify-content-between">
        <div class="berita-wrap-title">
          <h5 class="montserrat font-bold berita-date">
            {{ setDate(event.start_time) }}
          </h5>
          <span class="berita-top-line my-2 ml-2"></span>
          <h6
            class="montserrat font-bold berita-title"
            v-if="event.name.length > 30"
          >
            <router-link
              :to="{
                name: 'AcaraContent',
                params: { slug: event.slug },
              }"
            >
              {{ strippedContent(event.name, 30) }}..
            </router-link>
          </h6>
          <h6 class="montserrat font-bold berita-title" v-else>
            <router-link
              :to="{
                name: 'AcaraContent',
                params: { slug: event.slug },
              }"
            >
              {{ strippedContent(event.name, 30) }}
            </router-link>
          </h6>
        </div>
        <p class="poppins font-light" v-if="event.desc.length > 50">
          {{ strippedContent(event.desc, 50) }}..
        </p>
        <p class="poppins font-light" v-else>
          {{ strippedContent(event.desc, 50) }}
        </p>
      </div>
      <span class="berita-bottom-line"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AcaraItem",
  props: ["event"],
  methods: {
    strippedContent(content, length) {
      let regex = /(<([^>]+)>)/gi;
      return content.replace(regex, "").substring(0, length);
    },
    setDate(date) {
      return this.$moment(date).subtract(10, "days").calendar();
    },
  },
};
</script>

<style>
</style>