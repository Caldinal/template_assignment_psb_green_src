import { createStore } from 'vuex'

export default createStore({
  state(){ // vue에서는 data이다
    return {
      number: 100,
      number2: 200,
      loginChk: false,
      displayName: "",
      loginToken: null,
      uid: "",
      noticeId: 0,
      onlineId: 0,
      qnaId: 0,
      galleryId: 0,
    }
  },

  mutations: { // vue에서 데이터 변경할 때 쓴다
    NoticeRead(state, payload){
      state.noticeId = payload
    },
    OnlineRead(state, payload){
      state.onlineId = payload
    },
    QnaRead(state, payload){
      state.qnaId = payload
    },
    GalleryRead(state, payload){
      state.galleryId = payload
    },
    NumberPlus(state){
      state.number++ // 변수를 넣을때 vuex에서는 this.변수명 이 아닌 state.변수명을 써준다 그리고 이 이벤트 함수는 페이지에서 props 에서 처럼 emit을 적고 선언해주는 것이 아닌 commit을 적고 선언해준다.
    },
    NumberMinus(state){
      state.number2--
    },
    loginToken(state, payload){
      state.loginToken = payload.refreshToken
      state.loginChk = true
      state.uid = payload.uid
      console.log(payload.uid)
    },
    logOutToken(state){
      state.loginChk = false
      state.loginToken = null
      state.displayName = ''
      state.uid = ''
      sessionStorage.removeItem("refreshToken")
      sessionStorage.removeItem("displayName")
    },
    loginState(state, payload){ // App.vue에 loginState 이벤트를 받아온다. 즉 로그인 상태에서 새로고침 했을때 session date에 값이 계속 남아있어 로그인이 유지되도록 해준다.
      state.loginToken = sessionStorage.getItem("refreshToken"); // refreshToken 값을 sessiondata에 넣어준다
      state.displayName = payload.displayName
      state.uid = payload.uid // App.vue에 user.displayName 를 payload에 받아오고 이 값을 state.displayName 에 넣어준다
      state.loginChk = true // loginChk를 true로 유지해준다
    }
  },
  actions: {
  },

})
