<template>
  <section id="item">
    <ul class="store_list" v-if="totalNum !== 0">
      <li
        class="store_item"
        ref="getStoreDOM"
        v-for="(store, storeIndex) in vaildCommodities"
        :key="store.store_id"
      >
        <div
          :class="['store_wrapper',
            store.store_promotion.length === 0? '' : 'border_1px_bottom']"
        >
          <span class="store_basic">
            <label
                :for="`selectStoreAll_${store.store_id}`"
                class="radio_label"
                
              >
               <input
                  type="checkbox"
                  :id="`selectStoreAll_${store.store_id}`"
                  class="select_radio"
                >
              <i class="iconfont radio_icon icon-round"></i>
            </label>
            <i
                class="store_type_logo"
                :style="{backgroundImage: `url(${getStoreType(store.store_type)})`}"
              >
              </i>
            <span class="store_name">{{ store.store_name }}</span>
            <i class="iconfont icon-more go_store_hp"></i>
          </span>
          <span class="store_attach">
            <span class="get_coupon" v-if="store.coupon">领券</span>
            <span class="get_edit" @click="toggleDelete(storeIndex)">编辑</span>
          </span>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
import urlList from '../constant/url';
export default {
  name: 'item',
  props: {
    vaildCommodities: Array,
    invaildCommodities: Array,
    totalNum: Number,
  },
  methods: {
    getStoreType (typeNum) {
      if (typeNum === 1) {
        return urlList.tmall;
      }
      if (typeNum === 2) {
        return urlList.enterprise;
      }
      if (typeNum === 3) {
        return urlList.tmall_internation;
      }
      return false;
    }
  }
}
</script>
<style lang="stylus">
@import "../styl/variable"
@import "../styl/func"
#item {
  position: relative;
  width: 100%;
  padding-bottom: env(safe-area-inset-bottom);
}

.store_list {
  margin-bottom: rem(100);
  padding-top: rem(12);
  background: $background_gray;
  .store_item {
    margin-top: rem(12);
    background: $white;
    &:first-child {
      margin-top: 0;
    }
  }
}

.store_wrapper {
    display: flex;
    align-items: center;
    padding: rem(2) rem(10);
    .store_basic {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 50%;
      .store_type_logo {
        display: inline-block;
        width: $font_size_16;
        height: $font_size_16;
        background-repeat: no-repeat;
        background-size: contain;
      }
      .store_name {
        width: rem(100);
        height: rem(18);
        overflow: hidden;
      }
      .go_store_hp {
        font-size: $font_size_18;
        font-weight: bold;
      }

    }
    .store_attach {
      display: inline-flex;
      justify-content: flex-end;
      align-items: center;
      width: 50%;
      height: rem(20);
      .get_coupon {
        margin-right: rem(10);
        padding-right: rem(10);
        display: inline-block;
        border-right: 1px solid $border_gray;
      }
    }
}

</style>
