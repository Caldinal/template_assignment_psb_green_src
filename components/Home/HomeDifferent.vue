<template lang="">
  <div class="w-full py-24 text-center text-white bg-[url('https://via.placeholder.com/1920x960/007')] bg-fixed bg-center">
    <div class="mb-6" ref="content">
      <h3 class="text-2xl uppercase">different</h3>
      <p class="opacity-90">제목에 관한 부가 설명...</p>
    </div>
    <div class="max-w-7xl mx-auto pt-12 px-[2%]">
      <ul class="flex justify-between flex-wrap">
        <li class="basis-full sm:basis-2/4 lg:basis-1/4 text-center" v-for="(e, index) in Different" :key="e">
          <p class="text-xl">{{ e.title }}</p>
          <number
            :to="e.number"
            tag="p"
            :ref="`number${index + 1}`"
            :format="theFormat"
            :duration="5"
            animationPaused
            easing="Power1.easeOut"
            class="text-6xl pt-5 block"
            />
            <p class="text-lg pb-8">{{ e.en }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Different from '@/assets/data.json'

export default {
  name: 'HomeDifferent',
  data() {
    return {
      Different: Different.Different,
      windowScroll: window.scrollY
    }
  },
  // Sets the format of the number
  // methods: {
  //   theFormat(number) {
  //     return number.toFixed(2);
  //   },
  //   completed() {
  //     console.log('Animation ends!');
  //   },
  //   playAnimation() {
  //     this.$refs.number2.play()
  //   }
  // }
  methods: {
    theFormat(number) {
      return Math.round(number).toLocaleString() // 소수점 없애고 3자리수 마다 쉼표
    },
    updateScroll() {
      if(this.$refs.content) {
        this.windowScroll = window.scrollY // scrollY 값
        const ContentOffset = this.$refs.content.offsetTop - 600
        console.log(this.windowScroll, ContentOffset)
        
        if(ContentOffset <= this.windowScroll) {
          this.$refs.number1[0].play()
          this.$refs.number2[0].play()
          this.$refs.number3[0].play()
          this.$refs.number4[0].play()
        }
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll)
  },
}
</script>
<style lang="">
  
</style>