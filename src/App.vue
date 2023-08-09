<script>
import { createWebHistory, createRouter } from "vue-router";
import Home from './views/Home.vue'
import HomePage from './views/HomePage.vue'

import SlideBar from './components/common/Sidebar.vue'
import Topbar from './components/common/Topbar.vue'
<<<<<<< Updated upstream
=======
import Preloader from "./components/elements/Preloader.vue";

>>>>>>> Stashed changes

export default {
  components: {
    Home, HomePage, SlideBar, Topbar
  }
}
</script>

<template>
  
  <!-- <HomePage/> -->

  <div class="d-flex vh-100">
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
