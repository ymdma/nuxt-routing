  <template>
    <div class="profile">
      <ul v-if="$store.state.prof.showData == ''">
      </ul>
      <ul v-else>
        <!-- <li v-for="(member,index) in $store.state.prof.showData" :key="index">  {{ member }}</li> -->
        <li>
          名前: {{ currentData.name }}
        </li>
        <li>
          年齢 {{ currentData.year }}
        </li>
        <li>
          趣味: {{ currentData.hobby }}
        </li>
      </ul>
    </div>

</template>

<script>
export default{
  computed:{
    currentData(){
      return this.$store.state.prof.showData
    }
  }
}

</script>

<style>
.profile{
  width: 300px;
  height: 200px;
  border: solid #000 2px;
  background: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.profile ul{
  width: 300px;
    list-style: none;
}
.profile li{
  height: 40px;
  border: solid #000 1px;
  
}


</style>