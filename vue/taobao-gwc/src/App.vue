<template>
  <div id="app">
    <CommonHeader :totalNum='totalNum'></CommonHeader>
    <Item
      :vaildCommodities='vaildCommodities'
      :invaildCommodities='invaildCommodities'
      :totalNum='totalNum'
      @handleTotalNum='handleTotalNum'
    >
    </Item>
  </div>
</template>

<script>
import CommonHeader from './components/CommonHeader.vue';
import Item from './components/Item.vue';
import data from './data/data.js'
console.log(data);
export default {
  name: 'app',
  data() {
    return {
      totalNum: 0,
      vaildCommodities: [],
      invaildCommodities: [],
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    handleTotalNum() {
      
    },
    getData() {
      this.vaildCommodities = data.vaild_commodities;
      this.invaildCommodities = data.invaild_commodities;
      for (let i = 0, l = this.vaildCommodities.length; i < l; i += 1) {
        this.totalNum += this.vaildCommodities[i].commodity_list.length;
      }
      this.totalNum += this.invaildCommodities.length;
      this.invaildCommoditiesNum += this.invaildCommodities.length;
    }
  },
  components: {
    CommonHeader,
    Item
  }
}
</script>

<style lang="stylus">
*
  padding 0
  margin 0
#app
  position relative
</style>
