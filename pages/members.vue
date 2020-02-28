<template>
  <section class="cont">
    <Nav />
    <div class="aaa">
      <!-- ストア呼び出すときは$、最初から書かんと！ -->
      <template v-if="$store.state.prof.showData.length !== 0">
        <Profile />
      </template>
    </div>
    <!-- <Profile v-if="$store.state.prof.info === 'prof' "/> -->
    <!-- <comp2 v-if="$store.state.prof.info === 'init' "/> -->
  </section>
</template>

<script>
import Nav from '~/components/nav.vue'
import Profile from '~/components/profile.vue'

export default {
  components:{
    Nav,
    Profile,
  }
}



</script>

<style scoped>
.aaa{
  width: 300px;
}
.cont{
  /* margin: 40px 0 0 40px; */
  padding: 20px 0;
  width: 100%;
  height: 100vh;
  background: #ddd;
  display: flex;
  justify-content: space-around;
}
</style>

