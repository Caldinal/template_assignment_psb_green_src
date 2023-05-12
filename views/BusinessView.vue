<template lang="">
  <div class="w-full">
    <div class="max-w-7xl mx-auto flex flex-wrap px-[2%]">
      <router-view :title="ArrayTitle" :desc="ArrayDesc"></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BusinessView',
  data() {
    return {
      ArrayTitle: ["비지니스1", "비지니스2", "비지니스3"],
      ArrayDesc: ["비지니스1 서브메시지", "비지니스2 서브메시지", "비지니스3 서브메시지"]
    }
  },
}
</script>
<style lang="">
  
</style>