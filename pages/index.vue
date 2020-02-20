<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt-routing
      </h1>
      <h2 class="subtitle">
        My mind-blowing Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>

      <hr>

      <div class="test-links">
        <h3>Users</h3>
          <ul>
            <h4>Index</h4>
            <router-link to="/users">
              <li>Users/Index</li>
            </router-link>
            <router-link :to="{name:'users'}">
              <li>Users/Index[name]</li>
            </router-link>
          </ul>
          <ul>
            <h4>Others</h4>
            <router-link to="/users/others">
              <li>Users/Others</li>
            </router-link>
            <router-link :to="{name:'users-others'}">
              <li>Users/Others[name]</li>
            </router-link>
          </ul>

        <h3>admins</h3>
          <ul>
            <h4>Index</h4>
            <nuxt-link to="/admins">
              <li>Admins/Index</li>
            </nuxt-link>
            <router-link :to="{name:'admins'}">
              <li>Admins/Index[name]</li>
            </router-link>
          </ul>

          <ul>
            <h4>Others</h4>
            <router-link to="/admins/others">
              <li>Admins/Others</li>
            </router-link>
            <router-link :to="{name: 'admins-others'}">
              <li>Admins/Others[name]</li>
            </router-link>
          </ul>

        <h3>動的なルーティングへのリンク（固定値）</h3>
          <ul>
            <router-link :to="{path: '/users/1'}">
            <li>user id: 1</li>
            </router-link>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
  margin: 0 0 20px 0;
}
</style>

<style scoped>
.test-links{
  margin: 20px 0 0 0;
  display:flex;
  flex-direction: column;
}
.test-links a,
.test-links a:visited,
.test-links a:active{
color:skyblue;
}
h3{
  margin: 20px;
  font-size: 24px;
}

ul{
  padding: 20px;
  list-style:none;
}
li{
  padding: 5px;
}

</style>