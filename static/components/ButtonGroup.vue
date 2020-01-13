<template>
  <div>
    <div class="btn-group btn-group-lg" role="group" v-for="(btn, index) in btns" :key="index">
      <button class="btn btn-primary mr-2 mt-2" @click="$emit('addColor', btn)" >{{standardlizeBtn(btn)}}</button>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    btns: Array
  },
  methods: {
    standardlizeBtn(btn){
      let firstPart = btn.charAt(0).toUpperCase()
      let secondPart = btn.slice(1, btn.length-1)
      return firstPart+secondPart+' '+ btn.charAt(btn.length-1)
    }
  }
}
</script>

<style>

</style>