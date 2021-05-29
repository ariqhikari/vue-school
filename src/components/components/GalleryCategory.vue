<template>
  <section class="gallery-category" :class="template == 0 ? '' : 'template2'">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-6 mb-3"
          v-for="(galleryCategory, index) in galleryCategories"
          :key="galleryCategory.id"
        >
          <div class="row">
            <div class="col-md-6 col-lg-5">
              <div class="gallery-item">
                <img
                  v-lazy="galleryCategory.galleries[0]"
                  @click="galleryCategory.indexGallery = 0"
                  class="gallery-image gallery-first"
                />
                <VueGallerySlideshow
                  :id="galleryCategory.name"
                  :images="galleryCategory.galleries"
                  :index="galleryCategory.indexGallery"
                  @close="galleryCategory.indexGallery = null"
                  class="vue-gallery"
                ></VueGallerySlideshow>
              </div>
            </div>

            <div class="col-md-6 col-lg-5 row p-0 m-0 mt-2 mt-md-0">
              <div class="col-6 col-md-12 mb-md-2 p-md-0">
                <div class="gallery-item">
                  <img
                    v-if="galleryCategory.galleries[1]"
                    v-lazy="galleryCategory.galleries[1]"
                    @click="galleryCategory.indexGallery = 1"
                    class="gallery-image"
                  />
                  <img
                    v-else
                    v-lazy="galleryCategory.galleries[0]"
                    @click="galleryCategory.indexGallery = 0"
                    class="gallery-image"
                  />
                </div>
              </div>

              <div class="col-6 col-md-12 p-md-0">
                <div class="gallery-item">
                  <div
                    v-if="galleryCategory.galleries.length > 2"
                    @click="galleryCategory.indexGallery = 2"
                    class="more-image"
                  >
                    <img
                      v-lazy="galleryCategory.galleries[2]"
                      class="gallery-image"
                    />
                    <div
                      class="more-number d-flex justify-content-center align-items-center text-center text-white"
                    >
                      <h4 class="montserrat font-semi-bold">
                        {{ galleryCategory.galleries.length }}+
                      </h4>
                    </div>
                  </div>
                  <img
                    v-else-if="galleryCategory.galleries[2]"
                    v-lazy="galleryCategory.galleries[2]"
                    @click="galleryCategory.indexGallery = 2"
                    class="gallery-image"
                  />
                  <img
                    v-else-if="galleryCategory.galleries[1]"
                    v-lazy="galleryCategory.galleries[1]"
                    @click="galleryCategory.indexGallery = 1"
                    class="gallery-image"
                  />
                  <img
                    v-else
                    v-lazy="galleryCategory.galleries[0]"
                    @click="galleryCategory.indexGallery = 0"
                    class="gallery-image"
                  />
                </div>
              </div>
            </div>

            <div class="col-md-12">
              <h3 class="montserrat font-semi-bold mt-3">
                {{ index + 1 }}. {{ galleryCategory.name }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueGallerySlideshow from "vue-gallery-slideshow";

export default {
  name: "GalleryCategory",
  props: ["galleryCategories", "template"],
  components: {
    VueGallerySlideshow,
  },
};
</script>

<style>
</style>