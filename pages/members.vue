<template>
  <section class="container">
    <Nav />
    <div class="prof-shadow">
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
// import Comp2 from '~/components/comp2.vue'
import Profile from '~/components/profile.vue'

// ここでグローバルに登録
export default {
  layout:
    'lay2',
  components:{
    Nav,
    // Comp2,
    Profile
  }
}
</script>

<style scoped>
.prof-shadow{
  margin-right: 180px;
  width: 300px;
}
.container{
  margin: 80px 0 0 0;
  padding: 20px 0 0 0;
  width: 100%;
  height: 100vh;
  background: #ddd;
  display: flex;
  justify-content: space-around;
}

</style>

