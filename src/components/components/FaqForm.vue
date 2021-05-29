<template>
  <div class="faq-form">
    <form @submit.prevent="submit">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <textarea
              name="question"
              id="question"
              class="form-control"
              placeholder="Question"
              style="height: 275px"
              v-model="faq.question"
            ></textarea>
            <span
              class="invalid-feedback d-block"
              role="alert"
              v-if="errors.question"
            >
              <strong>{{ errors.question[0] }}</strong>
            </span>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              name="email"
              placeholder="Email Address"
              v-model="faq.email"
            />
            <span
              class="invalid-feedback d-block"
              role="alert"
              v-if="errors.email"
            >
              <strong>{{ errors.email[0] }}</strong>
            </span>
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              name="first_name"
              placeholder="First Name"
              v-model="faq.first_name"
            />
            <span
              class="invalid-feedback d-block"
              role="alert"
              v-if="errors.first_name"
            >
              <strong>{{ errors.first_name[0] }}</strong>
            </span>
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              name="last_name"
              placeholder="Last Name"
              v-model="faq.last_name"
            />
            <span
              class="invalid-feedback d-block"
              role="alert"
              v-if="errors.last_name"
            >
              <strong>{{ errors.last_name[0] }}</strong>
            </span>
          </div>
          <div class="form-group mt-4 ml-3">
            <div class="row align-items-center">
              <div class="col">
                <a
                  v-b-toggle.faq-ask
                  style="cursor: pointer"
                  class="montserrat font-semi-bold btn-outline-red"
                >
                  Batal
                </a>
              </div>
              <div class="col">
                <button
                  v-if="!submitClick"
                  type="submit"
                  class="montserrat font-semi-bold btn-outline-green"
                  style="padding: 6px 15px"
                >
                  Submit
                </button>
                <button
                  v-else
                  disabled
                  type="submit"
                  class="montserrat font-semi-bold btn-outline-green"
                  style="padding: 6px 15px"
                >
                  <b-spinner
                    style="width: 1.4rem; height: 1.4rem"
                    class="mx-4"
                  ></b-spinner>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "FaqForm",
  data() {
    return {
      faq: {
        email: "",
        first_name: "",
        last_name: "",
        question: "",
      },
      errors: [],
      submitClick: false,
    };
  },
  methods: {
    submit() {
      this.submitClick = true;

      this.$http
        .post("http://localhost:8000/api/question", this.faq)
        .then(() => {
          this.errors = [];
          this.faq = {
            email: "",
            first_name: "",
            last_name: "",
            question: "",
          };

          this.submitClick = false;
          this.$toasted.success(
            "Pertannyaan berhasil dikirim, kami akan membalas pertanyaan anda segera mungkin!",
            {
              position: "top-right",
              className: "rounded",
              duration: 5000,
            }
          );
        })
        .catch((error) => {
          this.submitClick = false;
          this.errors = error.response.data.errors;
        });
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
</style>