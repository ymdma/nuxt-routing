<template>
  <div class="nav">
<ul>
      <li v-for="(member,index) in members" :key="index" @click="open(member)">  {{ member.name }}</li>

    </ul>
  </div>
</template>

<script>
export default{
    data(){
    return{
      members:[
        {name:"Yamada",year:"25",hobby:"筋トレ"},
        {name:"Tanaka",year:"30",hobby:"特になし"},
        {name:"中田",year:"45",hobby:"プラモ"}
        ]
    }
  },
  methods:{
    open(member){
      // console.log(member.year)
      this.$store.dispatch('prof/open', member)
    }
  }
}

</script>


<style>
.nav{
  width: 300px;
  height: 300px;
  border: solid #000 2px;
  background: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.nav ul{
  width: 300px;
  list-style: none;
}
.nav li{
  height: 40px;
  border: solid #000 1px;
}

</style>