<template lang="">
  <div class="basis-9/12 mx-auto flex flex-wrap justify-between text-xl font-light rounded-sm mb-4">
    <div class="ml-2 my-1 flex flex-wrap justify-between gap-x-0 border box-border basis-[45%]">
      <div class="text-base basis-4/12 bg-slate-300 text-center relative after:absolute after:w-3/12 after:h-0.5 after:bg-[#333] after:bottom-1 after:left-2/4 after:-translate-x-2/4">
        제목
      </div>
      <div class="basis-8/12 text-center">
        {{ BoardContent.title }}
      </div>
    </div>
    <div class="mr-2 my-1 flex flex-wrap justify-between gap-x-0 border box-border basis-[45%]">
      <div class="text-base basis-4/12 bg-slate-300 text-center relative after:absolute after:w-4/12 after:h-0.5 after:bg-[#333] after:bottom-1 after:left-2/4 after:-translate-x-2/4">
        작성자
      </div>
      <div class="basis-8/12 text-center">
        {{ BoardContent.name }}
      </div>
    </div>
    <!-- 읽기
      {{ BoardContent.title }}
      {{ BoardContent.name }}
      {{ BoardContent.content }} -->
  </div>
  <!-- <div v-if="BoardContent.file" class="basis-9/12 mx-auto">
    <img :src="BoardContent.file" alt="첨부파일">
  </div> -->
  <div class="basis-9/12 mx-auto h-80 border text-xl font-light rounded-sm mb-7">
    <div class="w-full ml-2 my-1">
      {{ BoardContent.content }}
      <img v-if="BoardContent.file" :src="BoardContent.file" :alt="BoardContent.title">
    </div>
    <!-- 읽기
      {{ BoardContent.title }}
      {{ BoardContent.name }}
      {{ BoardContent.content }} -->
  </div>
  <div class="basis-9/12 mx-auto flex justify-end gap-x-5 text-sm font-extralight mb-3">
    <p>조회수 : {{ BoardContent.hit }}</p>
    <p @click.once="GoodChk"><font-awesome-icon icon="fa-thumbs-up" class="cursor-pointer" /> {{ BoardContent.good }}</p>
    <p @click.once="noGoodChk"><font-awesome-icon icon="fa-thumbs-down" class="cursor-pointer" /> {{ BoardContent.bad }}</p>
    <p>{{ dateTime }}</p>
  </div>
  <div class="flex basis-9/12 mx-auto justify-end pb-24 gap-x-5 mt-5">
    <div class="mt-[5px]">
      <router-link to="/cs/gallery/list" class="bg-blue-400 hover:bg-blue-600 focus:ring-blue-400 py-2 px-4  text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 text-xs sm:text-sm">목록</router-link>
    </div>
    <div class="flex gap-x-5">
      <router-link to="/cs/gallery/modify" class="bg-green-400 hover:bg-green-600 focus:ring-green-400 py-2 px-4  text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 text-xs sm:text-sm">수정</router-link>
      <button class="bg-red-400 hover:bg-red-600 focus:ring-red-400 py-2 px-4  text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 text-xs sm:text-sm" @click="Delete">삭제</button>
    </div>
  </div>
</template>
<script>
import { db } from "../../firebase"

export default {
  name: "GalleryRead",
  data() {
    return {
      BoardContent: [],
      dateTime: '',
    }
  },
  methods: {
    Delete(){
      let msg = confirm("삭제된 데이터는 복구할 수 없습니다. /r/r 삭제하시겠습니까?");
      if(msg){
        console.log("!!")
        db.collection("gallery").doc(this.$route.query.docId).delete().then(() => {
          alert("삭제가 완료 되었습니다.")
          this.$router.replace("/cs/gallery")
        })
      }
    },
    GoodChk() {
      if(this.BoardContent.goodChk){
        alert("이미 추천 혹은 비추천 하셨습니다.");
        return;
      }
      db.collection("gallery").doc(this.$route.query.docId).update({
        good: this.BoardContent.good + 1,
        goodChk : true
      }).then(() => {
        db.collection("gallery").doc(this.$route.query.docId).get().then((data) => {
          this.BoardContent = data.data()
        })
      })

      // this.BoardContent.good = this.BoardContent.good + 1;
    },
    noGoodChk() {
      if(this.BoardContent.bad){
        alert("이미 추천 혹은 비추천 하셨습니다.");
        return;
      }
      db.collection("gallery").doc(this.$route.query.docId).update({
        bad: this.BoardContent.bad + 1,
        badChk : true
      }).then(() => {
        db.collection("gallery").doc(this.$route.query.docId).get().then((data) => {
          this.BoardContent = data.data()
        })
      })

      // this.BoardContent.bad = this.BoardContent.bad + 1;
    },
  },
  mounted() {
    if(this.$store.state.galleryId == null){
      this.$router.replace("/cs/gallery")
    }
    db.collection("gallery").doc(this.$route.query.docId).get().then((data) => {
      this.BoardContent = data.data()
      if(data.data().isUpdate){
        return;
      }
      db.collection("gallery").doc(this.$route.query.docId).update({
        hit: data.data().hit + 1, // 조회수 업데이트는 데이터를 가지고 온 곳 안쪽에 넣어야한다.
        // isUpdate: true
      })
    }).then(() => {
      db.collection("gallery").doc(this.$route.query.docId).get().then((update) => {
        this.BoardContent = update.data();
        const date = this.BoardContent.date.seconds * 1000 + this.BoardContent.date.nanoseconds / 1000000
      // 밀리세컨드 초를 date 객체로 변환
      const new_date = new Date(date);
      const formattedDate = ('' + new_date.getFullYear()).slice(-2) + '-'
      + ('0' + (new_date.getMonth() + 1)).slice(-2) + '-'
      + ('0' + (new_date.getDate())).slice(-2) + ' '
      + ('0' + (new_date.getHours())).slice(-2) + ':'
      + ('0' + (new_date.getMinutes())).slice(-2) + ':'
      + ('0' + (new_date.getSeconds())).slice(-2) + ''
      return this.dateTime = formattedDate; // 날짜를 나타내는 함수
      })
    })

  },
  }
</script>
<style lang="">
  
</style>