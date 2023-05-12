<template lang="">
  <div class="w-full">
    <div class="max-w-7xl mx-auto flex flex-wrap px-[2%]">
      <router-view :title="ArrayTitle" :desc="ArrayDesc"></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CsView',
  data() {
    return {
      ArrayTitle: ["공지사항", "온라인 상담", "질문과 답변", "갤러리"],
      ArrayDesc: ["공지사항 서브메시지", "온라인 상담 서브메시지", "질문과 답변 서브메시지", "갤러리 서브메시지"]
    }
  },
}
</script>
<style lang="">
  
</style>