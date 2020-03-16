<template>
  <div>
    <div v-if="items.length ==0">正在加载中</div>
    <shop v-for="(item, index) in items" :key="index" :item="item">
    </shop>
  </div>
</template>
<script>
import Shop from './Item.vue'

export default {
  props: {
    items: {
      type: Array
    }
  },
  components: {
    Shop
  }
}
</script>