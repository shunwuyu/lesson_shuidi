<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <div v-for="(shop, index) in $store.state.shop.shops" :key="index">
      
    </div> -->
    <shop-list :items=$store.state.shop.shops>
    </shop-list>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ShopList from '@/components/shop/List';

export default {
  name: 'App',
  // data() {
  //   // return {
  //   //   latitude: 0,
  //   //   longitude: 0
  //   // }
  // },
  computed: {
    pos() {
      return [
        this.$store.state.latitude,
        this.$store.state.longitude,
      ]
    }
  },
  components: {
    // HelloWorld
    ShopList
  },
  mounted() {
    // console.log(this.$store.state.shop.shops, '++++');
    // console.log(this.pos())
    this.$store.dispatch('shop/getAllShops');
    // console.log(navigator.geolocation.getCurrentPosition);
    window.addEventListener('load', function() {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(update);
        }
    }, false);

    function update(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        document.write('维度:' + lat + ', 经度:' + lng);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
