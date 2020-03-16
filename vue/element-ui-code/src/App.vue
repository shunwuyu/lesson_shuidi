<template>
  <div id="app">
    <!-- <carousel height="150px">
      <carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </carousel-item>
    </carousel> -->
    <!-- <carousel-item /> -->
    <!-- <el-alert
    title="成功提示的文案"
    type="error"
    >
    </el-alert> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import ElAlert from './components/ElAlert.vue'
import ElBadge from './components/ElBadge.vue';

export default {
  name: 'App',
  components: {
    ElBadge
    // ElAlert
    // 'carousel': Carousel
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
/* html, body {
  background-color: green;
} */
</style>
