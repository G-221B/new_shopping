<template>
  <div class="goods">
    <div v-for="(item,index) in ids" :key="index">{{item}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      start: 304
    }
  },
  props: {
    titles: Array
  },
  computed: {
    ids () {
      const res = []
      this.titles.forEach((item, i) => {
        let num = this.start + i
        if (parseInt((num + "").slice(-2)) === 10) {
          num += 100
        }
        res.push(item + num)
      })
      return res
    }
  },
  components: {

  },
  methods: {

  },
}
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  width: 320px;
  background-color: #7bed73;
}
.goods div {
  margin: 10px;
}
</style>
