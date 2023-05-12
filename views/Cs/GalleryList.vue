<template lang="">
  <div class="basis-full">
    <div class="max-w-7xl mx-auto my-10">
      <ul class="flex justify-between border-t-indigo-500 border-t-2 p-4 py-2 bg-indigo-50">
        <li class="basis-1/12 text-center">번호</li>
        <li class="basis-4/12 text-center">제목</li>
        <li class="basis-2/12 text-center">글쓴이</li>
        <li class="basis-2/12 text-center">날짜</li>
        <li class="basis-1/12 text-center">조회수</li>
        <li class="basis-1/12 text-center">추천</li>
        <li class="basis-1/12 text-center">비추천</li>
      </ul>
      <template v-for="(e, index) in dataList" :key="index">
        <ul v-if="calculateNumber(totalLength, perPage, page, index) > 0" class="flex justify-between border-b text-center py-2 even:bg-gray-50 text-xs sm:text-sm">
          <li class="basis-1/12 text-center">{{ calculateNumber(totalLength, perPage, page, index) }}</li>
          <li class="basis-4/12 text-center"><router-link :to="{ name: 'GalleryRead', query:{ docId: dataId[index] } }" @click="$store.commit('GalleryRead', dataId[index])">{{ e.title }}</router-link></li>
          <!-- <router-link to="/cs/notice/read" @click="$store.commit('NoticeRead', dataId[index])">{{ e.title }}</router-link> -->
          <li class="basis-2/12 text-center">{{ e.name }}</li>
          <li class="basis-2/12 text-center">{{ BoardDate(index) }}</li>
          <li class="basis-1/12 text-center">{{ e.hit }}</li>
          <li class="basis-1/12 text-center">{{ e.good }}</li>
          <li class="basis-1/12 text-center">{{ e.bad }}</li>
        </ul>
      </template>
    </div>
    <div v-if="$store.state.loginToken != null" class="flex justify-end pb-24">
      <router-link to="/cs/gallery/write" class="bg-indigo-400 hover:bg-indigo-600 focus:ring-indigo-400 py-2 px-4  text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 text-xs sm:text-sm">글쓰기</router-link>
    </div>
  </div>
  <div class="flex justify-center basis-full gap-x-5">
    <button @click="pervPage" :disabled = "currentPage <= 1">이전</button>
    <button v-for="e in pageCount.pagination" :key="e" @click="goToPage(e)" :class="page == e && 'font-bold, text-orange-500'">
    {{ e }}</button>
    <button @click="nextPage" :disabled = "currentPage >= pageCount.totalPage / block">다음</button>
  </div>
  {{ $store.state.loginToken }}
  {{ pageCount.pagination }}
  {{ page }}
  {{ currentPage }}
  {{ pageCount.pagination[0] }}
</template>
<script>
import { db } from "../../firebase"

export default {
  name: "GalleryList",
  data() {
    return {
      dataList: [],
      dataId: [],
      posts: [],
      page: 1,
      perPage: 5,
      lastVisible: null,
      totalLength : 0,
      block: 5,
      currentPage: 1,
    }
  },
  computed: {
    pageCount(){
      const totalPage = Math.ceil(this.totalLength / this.perPage);
      // 전체 페이지 수 계산 전체 게시물 / 페이지당 개수 나눈 뒤 올림
      const start = (this.currentPage - 1) * this.perPage;
      // 현재 페이지에 보여질 게시물의 끝 인덱스를 계산
      const end = start + this.perPage;
      // 현재 페이지에 보여질 게시물의 끝 인덱스를 계산
      const pagination = [];
      // 페이지 번호를 저장할 배열을 선언
      for(let i = start + 1; i <= end && i <= totalPage; i++){
        // 시작 인덱스에서 끝 인덱스까지 반복문을 사용하며, 페이지 번호를 배열에 추가한다. 이때 추가되는 페이지 번호는 전체 페이지 수를 넘지 않도록 설정
        pagination.push(i)
      }
      if(pagination.length === 0 && totalPage > 0){
        pagination.push(totalPage);
      }
      // 만약 페이지 번호 배열이 비어있고 전체 페이지 수가 0보다 크다면 마지막 페이지 번호만 배열에 추가한다.
      return { totalPage, start, end, pagination }
    },
  },
  methods: {

    goToPage(e){
      this.page = e,
      // 클릭하는 번호(페이지 번호)로 설정
      this.fetchPost()
      // 해당 번호의 게시물을 가져오도록 다시 게시물 호출
    },
    prevPage(){
      this.currentPage = this.currentPage - 1;
      this.page = this.pageCount.pagination[4];
      this.fetchPost();
    },
    nextPage(){
      this.currentPage = this.currentPage + 1;
      // 현재 블록 페이지 번호를 1 증감 시킨다.
      this.page = this.pageCount.pagination[0];
      // 배열에 추가된 첫번재 번호로 페이지를 이동

      // this.page++ 하면 다음을 누르면 한칸씩 숫자가 이동한다.

      this.fetchPost();
      // 이동된 페이지의 게시글을 다시 호출
    },

    BoardDate(index){
      const date = this.dataList[index].date.seconds * 1000 + this.dataList[index].date.nanoseconds / 1000000
      // 밀리세컨드 초를 date 객체로 변환
      const new_date = new Date(date);
      const formattedDate = ('' + new_date.getFullYear()).slice(-2) + '-'
      + ('0' + (new_date.getMonth() + 1)).slice(-2) + '-'
      + ('0' + (new_date.getDate())).slice(-2) + ''
      return formattedDate // 날짜를 나타내는 함수
    },


    fetchTotalLength(){
      db.collection("gallery").get().then((data) => {
        // 모든 notice의 문서를 가지고 와서 개수를 지정한다.
        // size > 개수
        this.totalLength = data.size
        console.log(data.size)
      })
    },
    fetchPost(){

      let query = db.collection("gallery").orderBy("date", "desc").limit(this.perPage)
      
      if(this.page > 1 && this.lastVisible){
        query = query.startAfter(this.lastVisible);
      }

      query.get().then((data) => {
        const items = [];
        const ids = [];

        data.forEach((e) => {
          ids.push(e.id);
          items.push(e.data())
        })

        this.dataId = ids;
        this.dataList = items;
        this.lastVisible = data.docs[data.docs.length - 1]
        // -1 > 0 부터 생각하기 때문
        console.log(this.dataList)

      })
    },
    calculateNumber(totalLength, perPage, page, index){
      const totalPages = perPage * (page - 1);
      // 현재 페이지 이전에 있는 게시물 수 계산
      const postIndex = totalLength - (totalPages + index);
      // 게시물 인덱스 계산 - 전체 게시물에서 이전 게시물 수와 현재 게시물의 인덱스를 뺀다. 게시물 인덱스가 내림차순으로 표시
      if(postIndex <= 0){
        return
      }
      // 계산된 게시물 인덱스가 0보다 작거나 같으면 함수를 종료 결국은 마지막 페이지에서 음수 값 혹은 0 값을 반환하지 않는다.

      return postIndex;
      // 게시물 인덱스를 반환 > 이 값을 게시물 번호로 사용
    },
  },
  mounted() {
    this.fetchTotalLength();
    this.fetchPost();
  },
}
</script>
<style lang="">
  
</style>