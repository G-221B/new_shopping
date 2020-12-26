<template>
  <div id="app">
    <GoodsList :source="source" :roles="roles" />
    <GoodsInfo :roles="roles" />
    <Goods :titles="titles" />
  </div>
</template>

<script>
import Goods from './goods'
import GoodsInfo from './goods_info'
import GoodsList from './goods_list'

import { removeLastItemByVal } from '../../utils/index'

export default {
  name: 'App',
  components: {
    Goods,
    GoodsInfo,
    GoodsList
  },
  data () {
    return {
      source: {
        man: 'N304',
        woman: 'V304',
        child: 'E304',
        manPrice: 15,
        womanPrice: 15,
        childPrice: 7
      },
      roles: {
        child: {
          count: 0,
          title: 'E',
        },
        man: {
          count: 0,
          title: 'N',
        },
        woman: {
          count: 0,
          title: 'v',
        }
      },
      titles: []
    }
  },
  provide () {
    return {
      cart: this
    }
  },
  methods: {
    change (title, count) {
      const child = this.roles.child.title
      const woman = this.roles.woman.title
      const man = this.roles.man.title

      if (count === 1) {
        this.titles.push(title)
      } else {
        removeLastItemByVal(this.titles, title)
      }
      switch (title) {
        case child:
          this.changeVal(count, this.roles.child)
          break;
        case woman:
          this.changeVal(count, this.roles.woman)
          break;
        case man:
          this.changeVal(count, this.roles.man)
          break;
        default:
          break;
      }
    },
    changeVal (count, target) {
      if (count === -1 && target.count === 0) return;
      target.count += count;
    }
  }
}
</script>

<style>
</style>
