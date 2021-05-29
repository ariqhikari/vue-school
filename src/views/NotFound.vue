<template>
  <div>
    <div class="container">
      <div
        class="row justify-content-center align-items-center text-center vh-100"
      >
        <div class="col-md-12">
          <h1>404</h1>
          <h2>Ups! Halaman tidak ditemukan.</h2>
          <h5>Kami tidak dapat menemukan halaman yang Anda cari.</h5>
          <router-link
            :to="{ name: 'Beranda' }"
            class="btn btn-blue rounded-pill py-2 montserrat font-bold mt-4 px-5"
            >Kembali ke Beranda</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
h1 {
  font-size: 5rem;
  color: #007ea7;
}

h5 {
  color: #6e6e6e;
}
</style>