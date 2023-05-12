<template lang="">
  <div class="w-full py-48">
    <div class="max-w-7xl mx-auto px-[2%]">
      <div class="e_mail w-[800px] mx-auto my-10 flex justify-between">
        <span class="inline-block text-left basis-[100px]">E-mail </span><input v-model="email" type="text" class="basis-[600px] border mx-auto">
      </div>
      <div class="password w-[800px] mx-auto my-10 flex justify-between">
        <span class="inline-block text-left basis-[100px]">Password </span><input v-model="password" @keyup.enter="login()" type="password" class="basis-[600px] border mx-auto">
      </div>
      <ul class="flex justify-between w-[250px] mx-auto">
        <li class="basis-[100px]">
          <button class="w-full" @click="login()">로그인</button>
        </li>
        <li class="basis-[100px]">
          <button class="w-full">회원가입</button>
        </li>
      </ul>
    </div>
  </div>
  {{ email }}
  {{ password }}
  {{ errorMsg }}
</template>
<script>
import { auth } from "../firebase";

export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      errorMsg: '',
      message: '',
    }
  },
  methods: {
    login(){
      if(!this.email){
        alert("이메일을 입력해주세요");
        return false;
      }
      if(!this.password){
        alert("비밀번호를 입력해주세요");
        return false;
      }
      auth.signInWithEmailAndPassword(this.email, this.password).then(((user) => {
        console.log(user.user)
        sessionStorage.setItem("refreshToken", user.user.refreshToken);
        sessionStorage.setItem("displayName", user.user.displayName);

        this.$store.commit("loginToken", { refreshToken: user.user.refreshToken, uid: user.user.uid }); // commit은 props에서 emit과 같은 역할로 이벤트 함수를 받아온다. payload를 2개 넘겼다.
        this.$router.replace('/');
      }),
      ((error) => {
        this.errorMsg = error.message
      })
      )
    }
  },
  // computed() {
  //   if(this.error){
  //     document.textContent("비밀번호를 다시 확인해주세요")
  //   }
  // },
}
</script>
<style lang="">
  
</style>