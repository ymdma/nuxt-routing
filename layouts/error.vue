// ケースごとのエラーを表示
// 例: 404 ERROR

<template>
  <div>
    <h1 v-if="error.statusCode === 404">404 Error! お探しのページが見つかりません！</h1>
  </div>
</template>

<script>
  export default({
    props:['error']
  })
</script>