<template lang="">
  <div class="basis-full mt-24 text-center mb-5">
    <h3 class="text-2xl font-bold mb-4">컨텐츠 제목구간</h3>
    <p class="text-sm text-gray-400">해당 컨텐츠 설명 구간</p>
  </div>
  <div class="basis-full flex flex-wrap justify-between">
    <div class="basis-full sm:basis-[48.5%] lg:basis-[23.5%] relative mb-3 sm:mb-5 lg:mb-0" v-for="e in HomeContent" :key="e">
      <img :src="e.img" :alt="e.title" class="w-full">
      <div class="py-4 bg-white/20 px-5 text-center absolute bottom-0">
        <h3 class="font-bold mb-2">{{ e.title }}</h3>
        <p class="line-clamp-2">{{ e.desc }}</p> <!-- line-clamp : 말줄임표 -->
      </div>
    </div>
  </div>
</template>
<script>
import Data from '@/assets/data.json'
export default {
  name: 'HomeContent',
  data() {
    return {
      HomeContent: Data.Content_1,
    }
  },
}
</script>
<style lang="">
  
</style>