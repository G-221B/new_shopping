<template>
  <div class="goods_info">
    <span>男士：{{roles.man.count}}</span>
    <span>女士：{{roles.woman.count}}</span>
    <span>儿童：{{roles.child.count}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: ['roles'],
  components: {

  },
  methods: {

  }
}
</script>

<style scoped>
.goods_info {
  width: 300px;
  padding: 10px;
  background-color: #33dfc9;
}
</style>
