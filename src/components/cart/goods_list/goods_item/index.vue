<template>
  <div class="goods_item">
    <div class="role">{{role}}</div>
    <div class="price">￥{{price}}</div>
    <div class="handle">
      <button @click="remove">-</button>
      <span>{{count}}</span>
      <button @click="add">+</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  inject: ['cart'],
  props: {
    role: String,
    price: Number,
    count: Number,
    title: String
  },
  components: {

  },
  methods: {
    add () {
      this.cart.change(this.title, 1)
    },
    remove () {
      if (this.cart.titles.length <= 0) return;
      this.cart.change(this.title, -1)
    }
  }
}
</script>

<style scoped>
.goods_item {
  display: flex;
  margin-bottom: 10px;
}
.price {
  text-align: center;
  width: 80px;
}
.handle {
  display: flex;
  background-color: #deacf5;
}
.handle span {
  margin: 0 10px;
}
button {
  border: 0;
  background-color: #deacf5;
}
</style>
