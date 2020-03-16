<template>
<div>
  {{item.name}}
</div>
</template>
<script>
// import Shop from './Item.vue'
export default {
  props: {
    item: Object
  }
}
</script>