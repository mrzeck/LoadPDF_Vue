<script>
import { createWebHistory, createRouter } from "vue-router";
import Home from './views/Home.vue'
import HomePage from './views/HomePage.vue'

import SlideBar from './components/common/Sidebar.vue'
import Topbar from './components/common/Topbar.vue'
import Preloader from "./components/elements/Preloader.vue";




export default {
  components: {
    Home, HomePage, SlideBar, Topbar, Preloader
  }
}
</script>

<template>
  
  <!-- <HomePage/> -->

  <div class="d-flex vh-100">
      <Preloader></Preloader>
      <SlideBar></SlideBar>
      <div class="flex-grow-1">
          
          <Topbar></Topbar>
          <section class="p-4">
            <router-view v-slot="{ Component, route }">
              <transition name="fade">
                <component :is="Component" />
              </transition>
            </router-view>
          </section>
      </div>
  </div>

</template>

<style>

*{
  font-family: "Myriad Pro",sans-serif;
  color: #333;
  font-weight: 400;
}
</style>
