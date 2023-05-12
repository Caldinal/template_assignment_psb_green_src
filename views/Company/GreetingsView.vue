<template lang="">
  <div class="py-24 pt-48 text-center basis-full">
    <h3 class="text-3xl font-bold mb-5 relative after:absolute after:w-8 after:h-0.5 after:bg-slate-800 after:-bottom-2 after:left-2/4 after:-translate-x-2/4">{{ title[0] }}</h3>
    <p class="text-gray-400">{{ desc[0] }}</p>
  </div>
  <div class="pb-24">
    <img src="https://via.placeholder.com/1400x550" alt="인사말">
  </div>
  <div class="pb-24 basis-full">
    <h3 class="text-xl font-bold">안녕하십니까?</h3>
    <h3 class="text-xl font-bold">홈페이지에 오신 것을 진심으로 환영합니다.</h3>
    <p class="pt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam vel libero asperiores alias harum eveniet, odit ab quam cumque explicabo tempore dolore iure, voluptatem provident? Eius beatae repellendus quasi distinctio.</p>
    <p class="text-right pt-10">(주)회사이름 대표 <span class="text-xl font-bold">홍길동</span></p>
  </div>
</template>
<script>
export default {
  name: 'GreetingsView',
  props:{
    title: Array,
    desc: Array
  },
}
</script>
<style lang="">
  
</style>