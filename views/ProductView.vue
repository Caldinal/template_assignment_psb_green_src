<template lang="">
  <div class="w-full">
    <div class="max-w-7xl mx-auto flex flex-wrap px-[2%]">
      <router-view :title="ArrayTitle" :desc="ArrayDesc"></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductView',
  data() {
    return {
      ArrayTitle: ["프로덕트1", "프로덕트2", "프로덕트3"],
      ArrayDesc: ["프로덕트1 서브메시지", "프로덕트2 서브메시지", "프로덕트3 서브메시지",]
    }
  },
}
</script>
<style lang="">
  
</style>