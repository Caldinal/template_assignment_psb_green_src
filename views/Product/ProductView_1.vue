<template lang="">
  <div class="py-24 pt-48 text-center basis-full">
    <h3 class="text-3xl font-bold mb-5 relative after:absolute after:w-8 after:h-0.5 after:bg-slate-800 after:-bottom-2 after:left-2/4 after:-translate-x-2/4">{{ title[0] }}</h3>
    <p class="text-gray-400">{{ desc[0] }}</p>
    <div v-for="e in dataList" :key="e">
      <p>{{ e.name }}</p>
      <p>{{ e.price }}</p>
    </div>
  </div>
  {{ $store.state.number }} <!-- vuex에서 store 폴더 안에 data state 안에 number라는 데이터 값 가져온다. -->
  <br />
  {{ number }}
  <br />
  {{ $store.state.number2 }}
  <br />
  <button @click="$store.commit('NumberPlus')">플러스 버튼</button> <!-- store에서 state 변수에 이벤트 넣을때 props에서는 emit을 썼지만 vuex에서는 commit를 쓴다. -->
  <br />
  <button @click="$store.commit('NumberMinus')">마이너스 버튼</button>
</template>
<script>
import { db } from "../../firebase";
export default {
  name: 'ProductView_1',
  props:{
    title: Array,
    desc: Array
  },
  data() {
    return {
      dataList: [],
      number: 0,
    }
  },
  mounted(){
    // db.콜렉션("디비이름").get().then((데이터) => { 반복문 실행 })
    db.collection("product").get().then((data) => {
      data.forEach((e) => {
        console.log(e.data())
        this.dataList.push(e.data());
        return this.dataList
      })
    })
  }, // 이 코드는 따로 저장해둔다 데이터를 넣고 반복문 돌리는 코드이다.
}
</script>
<style lang="">
  
</style>