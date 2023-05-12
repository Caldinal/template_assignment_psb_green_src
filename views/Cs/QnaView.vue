<template lang="">
  <div class="py-24 text-center basis-full">
    <h3 class="text-3xl font-bold mb-5 relative after:absolute after:w-8 after:h-0.5 after:bg-slate-800 after:-bottom-2 after:left-2/4 after:-translate-x-2/4">{{ title[2] }}</h3>
    <p class="text-gray-400">{{ desc[2] }}</p>
  </div>
  <router-view></router-view>
</template>
<script>
// import { db } from "../../firebase"

export default {
  name: 'QnaView',
  props:{
    title: Array,
    desc: Array
  },
}
</script>
<style lang="">
  
</style>