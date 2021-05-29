<template>
  <div>
    <!-- Navbar -->
    <b-navbar toggleable="lg" type="dark" fixed="top" class="py-1">
      <div class="container container-nav">
        <b-navbar-brand>
          <router-link class="navbar-brand" :to="{ name: 'Beranda' }">
            <div
              class="d-flex align-items-center"
              v-lazy-container="{ selector: 'img' }"
            >
              <img
                data-src="/assets/icons/smkn4.png"
                width="60px"
                alt="SMK Negeri 4 Bandung"
              />
              <h5 class="montserrat font-semi-bold m-2 d-none d-md-block">
                SMK Negeri 4
                <br />
                Bandung
              </h5>
            </div>
          </router-link>
        </b-navbar-brand>

        <b-navbar-toggle target="sidebar-nav"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav
            class="ml-auto d-flex align-items-center"
            v-if="navbarReady"
          >
            <!-- Beranda -->
            <li class="nav-item mx-2">
              <router-link
                :to="{ name: 'Beranda' }"
                class="nav-link montserrat font-semi-bold p-0"
                >Beranda</router-link
              >
            </li>
            <!-- Jurusan -->
            <li class="nav-item dropdown mx-2">
              <a
                class="nav-link montserrat font-semi-bold p-0"
                style="cursor: pointer"
              >
                Program Keahlian
                <font-awesome-icon :icon="['fas', 'chevron-down']" />
              </a>
              <div
                class="dropdown-menu dropdown-menu-right border-0 shadow px-3 pb-3"
              >
                <!-- Nav Child -->
                <li
                  class="nav-item dropright mt-2"
                  v-for="(pageCategory, index) in pageCategoryMajors"
                  :key="`pageCategoryMajor-${index}`"
                >
                  <a
                    class="nav-link montserrat font-semi-bold p-0"
                    style="cursor: pointer"
                  >
                    {{ pageCategory.name }}
                    <font-awesome-icon :icon="['fas', 'chevron-down']" />
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-right border-0 shadow px-3"
                  >
                    <!-- Nav Child -->
                    <div
                      v-for="(major, index) in pageCategory.majors"
                      :key="`pageMajor-${index}`"
                    >
                      <router-link
                        class="nav-link p-0 my-2"
                        @click.native="changeMajor(major.slug)"
                        :to="{
                          name: 'Jurusan',
                          params: { slug: major.slug },
                        }"
                      >
                        {{ major.name }}
                      </router-link>
                    </div>
                    <div v-if="pageCategory.pages.length > 0">
                      <div
                        v-for="(pageChild, index) in pageCategory.pages"
                        :key="`pageChild-${index}`"
                      >
                        <router-link
                          class="nav-link p-0 my-2"
                          @click.native="changeApi(pageChild.slug)"
                          :to="pageChild.link"
                        >
                          {{ pageChild.title_page }}
                        </router-link>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
            </li>
            <!-- Nav Template Dropdown -->
            <li
              class="nav-item dropdown mx-2"
              v-for="(pageCategory, index) in pageCategories"
              :key="`pageCategory-${index}`"
            >
              <a
                class="nav-link montserrat font-semi-bold p-0"
                style="cursor: pointer"
              >
                {{ pageCategory.name }}
                <font-awesome-icon :icon="['fas', 'chevron-down']" />
              </a>
              <div
                class="dropdown-menu dropdown-menu-right border-0 shadow px-3"
              >
                <!-- Nav Child -->
                <div v-if="pageCategory.isHaveStaticPage">
                  <router-link
                    class="nav-link p-0 my-2"
                    :to="{ name: pageCategory.name }"
                  >
                    {{ pageCategory.name }}
                  </router-link>
                </div>
                <div
                  v-for="(pageChild, index) in pageCategory.pages"
                  :key="`pageChild-${index}`"
                >
                  <router-link
                    class="nav-link p-0 my-2"
                    @click.native="changeApi(pageChild.slug)"
                    :to="pageChild.link"
                  >
                    {{ pageChild.title_page }}
                  </router-link>
                </div>
              </div>
            </li>
            <!-- Berita & Acara -->
            <li class="nav-item mx-2">
              <router-link
                :to="{ name: 'BeritaAcara' }"
                class="nav-link montserrat font-semi-bold p-0"
                >Berita & Acara</router-link
              >
            </li>
            <!-- Ekstrakurikuler -->
            <li class="nav-item mx-2">
              <router-link
                :to="{ name: 'Ekstrakurikuler' }"
                class="nav-link montserrat font-semi-bold p-0"
                >Ekstrakurikuler</router-link
              >
            </li>
            <!-- FAQ -->
            <li class="nav-item mx-2">
              <router-link
                :to="{ name: 'Faq' }"
                class="nav-link montserrat font-semi-bold p-0"
                >FAQ</router-link
              >
            </li>
            <!-- Nav Template -->
            <li
              class="nav-item mx-2"
              v-for="(page, index) in pages"
              :key="`page-${index}`"
            >
              <router-link
                class="nav-link montserrat font-semi-bold p-0"
                @click.native="changeApi(page.slug)"
                :to="{
                  name: 'Template',
                  params: { slug: page.slug },
                }"
              >
                {{ page.title_page }}
              </router-link>
            </li>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto d-flex align-items-center" v-else>
            <b-skeleton
              width="100px"
              class="nav-item mx-2"
              v-for="n in 4"
              :key="n"
            ></b-skeleton>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>

    <!-- Sidebar -->
    <b-sidebar
      id="sidebar-nav"
      title="Menu"
      text-variant="light"
      backdrop-variant="dark"
      backdrop
      shadow
    >
      <div class="px-3 py-2">
        <b-navbar-nav v-if="navbarReady">
          <!-- Beranda -->
          <li class="nav-item my-2">
            <router-link :to="{ name: 'Beranda' }" class="nav-link p-0"
              >Beranda</router-link
            >
          </li>
          <!-- Jurusan -->
          <li class="nav-item my-2">
            <a
              class="nav-link p-0"
              style="cursor: pointer"
              :class="majorVisible ? null : 'collapsed'"
              :aria-expanded="majorVisible ? 'true' : 'false'"
              @click="majorVisible = !majorVisible"
            >
              Program Keahlian
              <font-awesome-icon
                :icon="['fas', majorVisible ? 'chevron-up' : 'chevron-down']"
              />
            </a>
            <b-collapse v-model="majorVisible">
              <div class="dropdown-menu border-0 mt-3 pl-3 d-flex flex-column">
                <!-- Nav Child -->
                <li
                  class="nav-item my-2"
                  v-for="(pageCategory, index) in pageCategoryMajors"
                  :key="`pageCategoryMajors-${index}`"
                >
                  <a
                    class="nav-link p-0"
                    style="cursor: pointer"
                    :class="pageCategory.visible ? null : 'collapsed'"
                    :aria-expanded="pageCategory.visible ? 'true' : 'false'"
                    @click="pageCategory.visible = !pageCategory.visible"
                  >
                    {{ pageCategory.name }}
                    <font-awesome-icon
                      :icon="[
                        'fas',
                        pageCategory.visible ? 'chevron-up' : 'chevron-down',
                      ]"
                    />
                  </a>
                  <b-collapse v-model="pageCategory.visible">
                    <div class="dropdown-menu border-0 pl-1 d-flex flex-column">
                      <!-- Nav Child -->
                      <div
                        v-for="(major, index) in pageCategory.majors"
                        :key="`pageMajor-${index}`"
                      >
                        <router-link
                          class="nav-link p-0 my-2"
                          @click.native="changeMajor(major.slug)"
                          :to="{
                            name: 'Jurusan',
                            params: { slug: major.slug },
                          }"
                        >
                          {{ major.name }}
                        </router-link>
                      </div>
                      <div v-if="pageCategory.pages.length > 0">
                        <div
                          v-for="(pageChild, index) in pageCategory.pages"
                          :key="`pageChild-${index}`"
                        >
                          <router-link
                            class="nav-link p-0 my-2"
                            @click.native="changeApi(pageChild.slug)"
                            :to="pageChild.link"
                          >
                            {{ pageChild.title_page }}
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </b-collapse>
                </li>
              </div>
            </b-collapse>
          </li>
          <!-- Nav Template Dropdown -->
          <li
            class="nav-item my-2"
            v-for="(pageCategory, index) in pageCategories"
            :key="`pageCategory-${index}`"
          >
            <a
              class="nav-link p-0"
              style="cursor: pointer"
              :aria-controls="`page-${pageCategory.id}`"
              :class="pageCategory.visible ? null : 'collapsed'"
              :aria-expanded="pageCategory.visible ? 'true' : 'false'"
              @click="pageCategory.visible = !pageCategory.visible"
            >
              {{ pageCategory.name }}
              <font-awesome-icon
                :icon="[
                  'fas',
                  pageCategory.visible ? 'chevron-up' : 'chevron-down',
                ]"
              />
            </a>
            <b-collapse
              :id="`page-${pageCategory.id}`"
              v-model="pageCategory.visible"
            >
              <div class="dropdown-menu border-0 mt-3 pl-3 d-flex flex-column">
                <!-- Nav Child -->
                <div v-if="pageCategory.isHaveStaticPage">
                  <router-link
                    class="nav-link p-0 my-2"
                    :to="{ name: pageCategory.name }"
                  >
                    {{ pageCategory.name }}
                  </router-link>
                </div>
                <div
                  v-for="(pageChild, index) in pageCategory.pages"
                  :key="`pageChild-${index}`"
                >
                  <router-link
                    class="nav-link p-0 my-2"
                    @click.native="changeApi(pageChild.slug)"
                    :to="pageChild.link"
                  >
                    {{ pageChild.title_page }}
                  </router-link>
                </div>
              </div>
            </b-collapse>
          </li>
          <!-- Berita & Acara -->
          <li class="nav-item my-2">
            <router-link :to="{ name: 'BeritaAcara' }" class="nav-link p-0"
              >Berita & Acara</router-link
            >
          </li>
          <!-- Ekstrakurikuler -->
          <li class="nav-item my-2">
            <router-link :to="{ name: 'Ekstrakurikuler' }" class="nav-link p-0"
              >Ekstrakurikuler</router-link
            >
          </li>
          <!-- FAQ -->
          <li class="nav-item my-2">
            <router-link :to="{ name: 'Faq' }" class="nav-link p-0"
              >FAQ</router-link
            >
          </li>
          <!-- Nav Template -->
          <li
            class="nav-item my-2"
            v-for="(page, index) in pages"
            :key="`page-${index}`"
          >
            <router-link
              class="nav-link p-0"
              @click.native="changeApi(page.slug)"
              :to="{
                name: 'Template',
                params: { slug: page.slug },
              }"
            >
              {{ page.title_page }}
            </router-link>
          </li>
        </b-navbar-nav>
        <b-navbar-nav v-else>
          <b-skeleton
            width="100px"
            class="nav-item my-2"
            v-for="n in 4"
            :key="n"
          ></b-skeleton>
        </b-navbar-nav>
      </div>
    </b-sidebar>

    <!-- Modal Feature -->
    <b-modal
      id="modal-feature"
      ref="modal-feature"
      size="md"
      hide-footer
      scrollable
      centered
    >
      <div v-if="Object.keys(modal).length > 0">
        <div v-html="modal.content"></div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Navbar",
  data() {
    return {
      navbarReady: false,
      majorVisible: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.scrollNavbar);
  },
  computed: {
    ...mapState("navbar", {
      pageCategories: (state) => state.pageCategories,
      pageCategoryMajors: (state) => state.pageCategoryMajors,
      pages: (state) => state.pages,
      modal: (state) => state.modal,
    }),
  },
  methods: {
    checkRoute(pageCategory) {
      let link = this.$router.resolve({ name: pageCategory.name });

      pageCategory.pages.forEach((page) => {
        if (link && link.href !== "/") {
          pageCategory.isHaveStaticPage = true;

          page.link = this.$router.resolve({
            name: `${pageCategory.name}Template`,
            params: { slug: page.slug },
          }).resolved;
        } else {
          pageCategory.isHaveStaticPage = false;

          page.link = this.$router.resolve({
            name: `Template`,
            params: { slug: page.slug },
          }).resolved;
        }
      });
    },
    scrollNavbar() {
      const navbar = document.querySelector("nav");
      if (window.scrollY > 0) {
        navbar.classList.add("nav-bg");
      } else {
        navbar.classList.remove("nav-bg");
      }
    },
    setPages() {
      if (this.pageCategories.length > 0) {
        this.pageCategories.forEach((pageCategory) =>
          this.checkRoute(pageCategory)
        );
      }

      this.navbarReady = true;
      const majors = [];

      this.pageCategoryMajors.forEach((pageCategory) => {
        pageCategory.majors.map((major) => {
          majors.push(major);
        });
      });

      this.$emit("setMajors", majors);
    },
    setModal() {
      if (Object.keys(this.modal).length > 0) {
        if (window.localStorage.getItem("modal") == "true") {
          setTimeout(() => {
            this.$refs["modal-feature"].show();
            window.localStorage.setItem("modal", "false");
          }, 400);
        }
      }
    },
    changeApi(slug) {
      if (this.$route.name.includes("Template")) {
        this.$emit("changeApi", slug);
      }
    },
    changeMajor(slug) {
      if (this.$route.name.includes("Jurusan")) {
        this.$emit("changeMajor", slug);
      }
    },
  },
  mounted() {
    this.setPages();
    this.setModal();
  },
};
</script>

<style>
</style>