<template>
  <div class="goods_list">
    <GoodsItem
      role="男士"
      :price="source.manPrice"
      :count="roles.man.count"
      :title="roles.man.title"
    />
    <GoodsItem
      role="女士"
      :price="source.womanPrice"
      :count="roles.woman.count"
      :title="roles.woman.title"
    />
    <GoodsItem
      role="儿童"
      :price="source.childPrice"
      :count="roles.child.count"
      :title="roles.child.title"
    />
  </div>
</template>

<script>
import GoodsItem from './goods_item'
export default {
  data () {
    return {

    }
  },
  props: ['source', 'roles'],
  components: {
    GoodsItem
  },
  methods: {

  }
}
</script>

<style scoped>
.goods_list {
  width: 300px;
  padding: 10px;
  background-color: #8fc9f9;
}
</style>
