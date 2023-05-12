<template lang="">
  <div class="py-24 pt-48 text-center basis-full">
    <h3 class="text-3xl font-bold mb-5 relative after:absolute after:w-8 after:h-0.5 after:bg-slate-800 after:-bottom-2 after:left-2/4 after:-translate-x-2/4">{{ title[3] }}</h3>
    <p class="text-gray-400">{{ desc[3] }}</p>
  </div>
  <div class="basis-full pb-24">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.888505624!2d28.84737333480108!3d41.0054632428985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9be92011c27%3A0x236e6f6f37444fae!2z7JWE7JW8IOyGjO2UvOyVhA!5e0!3m2!1sko!2skr!4v1682581662421!5m2!1sko!2skr" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <div class="basis-full pb-24">
    <div class="mt-5">
      <p><span class="text-lg font-bold">A.</span> 성소피아 성당</p>
      <p><span class="text-lg font-bold">T.</span> 전화번호 모름</p>
    </div>
    <div class="mt-5 border-t">
      <h3 class="py-5 font-bold text-xl">버스 이용시</h3>
      <p>급행 1번 중앙로역 하차 걸어오기</p>
      <p>급행 2번 중앙로역 하차 걸어오기</p>
      <p>급행 3번 중앙로역 하차 걸어오기</p>
      <p>급행 4번 중앙로역 하차 걸어오기</p>
    </div>
    <div class="mt-5 border-t">
      <h3 class="py-5 font-bold text-xl">지하철 이용시</h3>
      <p>1호선 반월당역 하차 - 몇번 출구 - 도보 2Km</p>
      <p>2호선 반월당역 하차 - 몇번 출구 - 도보 2Km</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DirectionsView',
  props:{
    title: Array,
    desc: Array
  },
}
</script>
<style lang="">
  
</style>