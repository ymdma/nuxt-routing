<template>
  <section>
    <h1>{{ message }}</h1>
    <p>id: {{ this.$route.params.id }}</p>
  </section>
</template>

<script>
  export default {
    data: function() {
      return{
        message:'/users/_id.vue ←なう'
      }
    },
    validate ({ params }) {
      return /^\d+$/.test(params.id)
    }
  }
</script>

<style>

</style>template