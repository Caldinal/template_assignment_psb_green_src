<template lang="">
  <div class="py-24 pt-48 text-center basis-full">
    <h3 class="text-3xl font-bold mb-5 relative after:absolute after:w-8 after:h-0.5 after:bg-slate-800 after:-bottom-2 after:left-2/4 after:-translate-x-2/4">{{ title[2] }}</h3>
    <p class="text-gray-400">{{ desc[2] }}</p>
  </div>
  <div class="pb-24 basis-full flex flex-wrap gap-x-3.5">
    <div class="basis-full border rounded-md mb-20 relative flex flex-wrap items-center group" v-for="e in dataList" :key="e">
      <div class="basis-full md:basis-2/4 group-odd:order-1 md:group-odd:order-1 md:group-even:order-2">
        <img :src="e.img" :alt="e.title" class="w-full p-2.5 h-[350px]" />
      </div>
      <div class="basis-full md:basis-2/4 md:group-even:left-14 md:group-odd:-left-14 group-odd:order-2 group-even:order-1 relative z-10 bg-gray-50 pl-5 pr-5 sm:pr-0 sm:pl-12 py-5 box-border">
        <h3 class="py-5 font-bold">{{ e.title }}</h3>
        <p class="pb-5">{{ e.desc }}</p>
        <router-link to="/cs/online" class="bg-slate-800 px-5 py-2 text-white rounded-md inline-block mb-5">온라인 문의</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BusinessView_3',
  props:{
    title: Array,
    desc: Array
  },
  data() {
    return {
      dataList: [
        {
          title: "홈페이지 제작1",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia sapiente autem repellendus quisquam consectetur, qui fugiat dignissimos nesciunt molestiae magnam veniam accusamus sint quo corrupti quaerat suscipit. Qui, numquam minus.",
          img: "https://via.placeholder.com/700x350"
        },
        {
          title: "홈페이지 제작2",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia sapiente autem repellendus quisquam consectetur, qui fugiat dignissimos nesciunt molestiae magnam veniam accusamus sint quo corrupti quaerat suscipit. Qui, numquam minus.",
          img: "https://via.placeholder.com/700x350"
        },
        {
          title: "홈페이지 제작3",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia sapiente autem repellendus quisquam consectetur, qui fugiat dignissimos nesciunt molestiae magnam veniam accusamus sint quo corrupti quaerat suscipit. Qui, numquam minus.",
          img: "https://via.placeholder.com/700x350"
        },
        {
          title: "홈페이지 제작4",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia sapiente autem repellendus quisquam consectetur, qui fugiat dignissimos nesciunt molestiae magnam veniam accusamus sint quo corrupti quaerat suscipit. Qui, numquam minus.",
          img: "https://via.placeholder.com/700x350"
        }
      ]
    }
  },
}
</script>
<style lang="">
  
</style>