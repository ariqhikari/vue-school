<template>
  <div class="card border-0">
    <b-skeleton-img></b-skeleton-img>
    <div class="card-body p-0 pt-3">
      <b-skeleton animation="fade" width="85%"></b-skeleton>
      <b-skeleton animation="fade" width="55%"></b-skeleton>
      <b-skeleton animation="fade" width="70%"></b-skeleton>
    </div>
  </div>
</template>

<script>
export default {
  name: "BeritaSkeleton",
};
</script>

<style>
</style>