<template>
  <div class="nav">
    <ul>
      <li>
        メンバー紹介！
      </li>
      <!-- v-forのindexは"eachWithIndex"のノリのindex。 -->
      <!-- v-forには :keyが常に必要 -->
      <!-- @clickの引数はv-forのmember -->
      <li v-for="(member,index) in members" :key="index" @click="open(member)">
        {{ member.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  // 呼び出し元にデータを書く
  data(){
    return{
      members:[
        {name:"Yamada",year:"25",hobby:"筋トレ"},
        {name:"Tanaka",year:"30",hobby:"特になし"},
        {name:"Nakata",year:"45",hobby:"プラモ"}
        ]
    }
  },
  methods:{
    open(member){
      // console.log(member.year)
      // メソッドの中では "this." !!
      // templateに書いてもいいはず
      this.$store.dispatch('prof/open', member)
    }
  }
}

</script>


<style>
.nav{
  width: fit-content;
  height: fit-content;
  margin: 20px 0 0 0;
  background: #ddd;
  border: solid #333 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.nav ul{
  width: fit-content;
  height: 200px;
  padding: 0;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  /* align-items: center; */
  /* text-align: center; */
  list-style: none;
}
.nav li{
  width: 200px;
  height: 50px;
  line-height: 50px;
  border: solid #333 1px;
  cursor: pointer;
}
.nav li:first-child{
  background: rgb(140, 187, 248);
  font-weight: 600;
  cursor: default
}

</style>