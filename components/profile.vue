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
          年齢: {{ currentData.year }}
        </li>
        <li>
          趣味: {{ currentData.hobby }}
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  computed: {
    currentData(){
      return this.$store.state.prof.showData
    }
  }
}
</script>

<style>
.profile{
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
.profile ul{
  width: fit-content;
  height: 210px;
  padding: 0;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  /* align-items: center; */
  /* text-align: center; */
  list-style: none;
}
.profile li{
  width: 296px;
  height: 70px;
  line-height: 70px;
  background: #fff;
  font-size: 24px;
  border: solid #333 1px;
}
</style>