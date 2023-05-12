<template lang="">
  <div class="basis-full mb-28">
    <div class="max-w-7xl mx-auto my-5">
      <div class="mb-4 flex flex-wrap justify-between gap-x-0 border box-border rounded-sm shadow">
        <div class="text-base basis-28 py-1.5 bg-slate-300 text-center relative after:absolute after:w-14 after:h-0.5 after:bg-[#333] after:bottom-1 after:left-2/4 after:-translate-x-2/4">
          작성자
        </div>
        <input v-model="name" type="text" class="basis-[calc(100%-112px)] px-2 py-0.5" placeholder="이름">
      </div>
      <div class="mb-4 flex flex-wrap justify-between gap-x-0 border box-border rounded-sm shadow">
        <div class="text-base basis-28 py-1.5 bg-slate-300 text-center relative after:absolute after:w-9 after:h-0.5 after:bg-[#333] after:bottom-1 after:left-2/4 after:-translate-x-2/4">
          제목
        </div>
        <input v-model="title" type="text" class="basis-[calc(100%-112px)] px-2 py-0.5" placeholder="제목">
      </div>
      <input type="file" class="shadow appearance-none border rounded-sm w-full mb-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="image">
      <textarea v-model="content" class="border rounded-sm w-full h-72 mb-4"></textarea>
      <div class="w-full relative">
        <button class="bg-slate-400 hover:bg-slate-600 focus:ring-indigo-400 py-2 px-6 text-white font-semibold rounded shadow-md focus:outline-none focus:right-2 focus:ring-opacity-75 text-xs sm:text-sm absolute right-0" @click="Write()">완료</button>
      </div>
      {{ fileRandom }}
    </div>
  </div>
</template>
<script>
import { db, storage } from "../../firebase"

export default {
  name: "QnaWrite",
  data() {
    return {
      title: "",
      content: "",
      name: this.$store.state.displayName,
      file: "",
      date: new Date(),
      fileRandom: null
    }
  },
  mounted(){
    const formattedDate = this.GetDate();
    this.fileRandom = formattedDate
  },
  methods: {
    GetDate(){
      const date = new Date();
      const RandNum = Math.floor(Math.random() * 999) + 100;
      const formattedDate = ('' + date.getFullYear()) + '' 
        + ('0' + (date.getMonth() + 1)).slice(-2) + ''
        + ('0' + (date.getDate())).slice(-2) + '_' 
        + ('0' + date.getHours()).slice(-2) + ''
        + ('0' + date.getMinutes()).slice(-2) + ''
        + ('0' + date.getSeconds()).slice(-2) + '' + RandNum
          return formattedDate;
    },
    Write(){
      
      this.file = document.querySelector("#image").files[0];
      if(this.file){
        storage.ref().child("images/" + this.fileRandom).put(this.file).then(() => {
          // 파일경로 가지고 오기
          storage.ref().child("images/" + this.fileRandom).getDownloadURL().then((url) => {
            db.collection("qna").add({
            "name": this.name,
            "title": this.title,
            "content": this.content,
            "date": this.date,
            "hit" : 1,
            "good" : 0,
            "bad" : 0,
            "uid" : this.$store.state.uid,
            "file" : url
          })
        this.$router.replace("/cs/qna")
          })
        })
      }else{
        db.collection("qna").add({
          "name": this.name,
          "title": this.title,
          "content": this.content,
          "date": this.date,
          "hit" : 1,
          "good" : 0,
          "bad" : 0,
          "uid" : this.$store.state.uid
        })
        this.$router.replace("/cs/qna")
      }

    }
  }
}
</script>
<style lang="">
  
</style>