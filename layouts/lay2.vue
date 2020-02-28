<template>
  <div>
    <header>
      <div class="header-wrap">
        <h1>
          TITLE
        </h1>
        <div class="h-nav">
          ここにナビゲーション
        </div>
      </div>
    </header>
    <nuxt />
  </div>
</template>

<script>

</script>

<style>
header{
  height: 80px;
  width: 100%;
  padding: 0 60px;
  position: fixed;
  top: 0;
  background-color: #aaa;
}

.header-wrap{
  display: flex;
  justify-content: space-between;
  align-items: center
}
h1{
  margin: 20px 0 0 60px;
}
.h-nav{
  margin: 20px 60px 0 0;
}
</style>