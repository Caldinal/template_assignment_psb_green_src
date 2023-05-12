<template lang="">
  <div class="w-full py-48">
    <div class="max-w-7xl mx-auto px-[2%]">
      <div class="e_mail w-[800px] mx-auto my-10 flex justify-between shrink-0">
        <span class="inline-block text-left basis-[100px]">E-mail </span><input v-model="email" type="text" class="basis-[600px] border mx-auto">
      </div>
      <div class="password w-[800px] mx-auto my-10 flex justify-between shrink-0">
        <span class="inline-block text-left basis-[100px]">Password </span><input v-model="password" type="password" class="basis-[600px] border mx-auto">
      </div>
      <div class="phone_number w-[800px] mx-auto my-10 flex justify-between shrink-0">
        <span class="inline-block text-left basis-[100px]">휴대폰 번호 </span><input v-model="phonenumber" type="text" class="basis-[600px] border mx-auto">
      </div>
      <div class="nick_name w-[800px] mx-auto my-10 flex justify-between shrink-0">
        <span class="inline-block text-left basis-[100px]">닉네임 </span><input v-model="nickname" type="text" class="basis-[600px] border mx-auto">
      </div>
    </div>
  </div>
  <div class="w-full">
    <button @click="signUp()" class="w-52 mx-auto border">회원가입</button>
  </div>
  <p>{{ email }}</p>
  <p>{{ password }}</p>
  <p>{{ nickName }}</p>
</template>
<script>
// import Result from 'postcss/lib/result';
import { auth } from "../firebase";

export default {
  name: 'MemberView',
  data() {
    return {
      email: '',
      password: '',
      phonenumber: '',
      nickname: '',
    }
  },
  methods: {
    signUp(){
      auth.createUserWithEmailAndPassword(this.email, this.password).then((result) => {
        result.user.updateProfile({displayName: this.nickname })
        console.log(result)
        console.log(result.user)
      })
    }
  },
}
</script>
<style lang="">
  
</style>