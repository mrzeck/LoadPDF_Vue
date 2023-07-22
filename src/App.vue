<script>
import Home from './components/Home.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    Header,
    Home,
    Footer
  }
}
</script>

<template>
  <!-- <Header></Header> -->
  <Home/>
  <!-- <Footer></Footer> -->
</template>

<style>

*{
  font-family: "Myriad Pro",sans-serif;
  color: #333;
  font-weight: 400;
}
</style>
