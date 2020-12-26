<template>
  <div id="app">
    <Cart />
    <ChangeTitle />
  </div>
</template>

<script>
import Cart from './components/cart'
import ChangeTitle from './components/changeTitle'
export default {
  name: 'App',
  components: {
    Cart,
    ChangeTitle
  },

}
</script>

<style>
</style>
