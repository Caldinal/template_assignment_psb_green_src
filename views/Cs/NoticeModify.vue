<template lang="">
  <div class="basis-9/12 mx-auto flex justify-between mb-5">
    <div class="ml-2 my-1 flex flex-wrap justify-between gap-x-0 border box-border basis-[45%]">
      <div class="text-base basis-4/12 py-1.5 bg-slate-300 text-center relative after:absolute after:w-8/12 after:h-0.5 after:bg-[#333] after:bottom-1 after:left-2/4 after:-translate-x-2/4">
        수정할 제목
      </div>
      <input type="text" v-model="title" placeholder="제목 수정" class="rounded-sm basis-8/12 px-2 py-0.5">
    </div>
    <div class="ml-2 my-1 flex flex-wrap justify-between gap-x-0 border box-border basis-[45%]">
      <div class="text-base basis-4/12 py-1.5 bg-slate-300 text-center relative after:absolute after:w-8/12 after:h-0.5 after:bg-[#333] after:bottom-1 after:left-2/4 after:-translate-x-2/4">
        수정할 이름
      </div>
      <input type="text" v-model="name" placeholder="작성자 수정" class="rounded-sm basis-8/12 px-2 py-0.5">
    </div>
  </div>
  <div class="w-9/12 mx-auto">
    <textarea v-model="content" placeholder="변경할 내용" class="border w-full h-72 mb-4 px-2 py-0.5"></textarea>
  </div>
  <div class="w-9/12 mx-auto flex justify-end mb-10">
    <button class="bg-red-400 hover:bg-red-600 focus:ring-red-400 py-2 px-4  text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 text-xs sm:text-sm" @click="Modify">완료</button>
  </div>
</template>
<script>
import { db } from "../../firebase"
export default {
  name: "NoticeModify",
  data() {
    return {
      BoardContent: [],
      name: this.$store.state.displayName,
      title: "",
      content: "",
      date: new Date(),
    }
  },
  methods: {
    Modify() {
      db.collection("notice").doc(this.$store.state.noticeId).update({
        "name": this.name,
        "title": this.title,
        "content": this.content,
        "date": this.date,
      }).then(() => {
        alert("수정이 완료되었습니다.")
        this.$router.replace("/cs/notice")
      })
    }
  },
  mounted() {
    if(this.$store.state.noticeId == 0){
      this.$router.replace("/cs/notice")
    }
    db.collection("notice").doc(this.$store.state.noticeId).get().then((data) => {
      this.BoardContent = data.data()
      this.name = this.BoardContent.name
      this.title = this.BoardContent.title
      this.content = this.BoardContent.content
    })
  },
}
</script>
<style lang="">
  
</style>