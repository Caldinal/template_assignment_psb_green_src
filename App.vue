<template>
  <Nav />
  <nav>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </nav>
  <router-view/>
  <Footer />
</template>

<script>
import { auth } from './firebase'
import Nav from '@/components/NavCom.vue'
import Footer from '@/components/FooterCom.vue'

export default {
  name: 'AppPage',
  components: {
    Nav,
    Footer,
  },
  mounted() {
    auth.onAuthStateChanged((user) => {  // 새로고침했을때도 로그인 상태가 sessiondata가 그대로 남아있도록 해줘서 새로고침했을때도 로그인이 유지되도록 해준다.
      console.log(user)
      if(user){
        this.$store.commit('loginState', {displayName: user.displayName, uid: user.uid});
      }
    })
  },
}
</script>

<style>

</style>
