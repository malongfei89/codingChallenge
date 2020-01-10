<template>
  <div>
    <div class="btn-group btn-group-lg" role="group" v-for="(btn, index) in btns" :key="index">
      <button class="btn btn-primary mr-2 mt-2" @click="$emit('addColor', btn)" >{{btn}}</button>
    </div>
  </div>
</template>

<script>
export default {
  props:['btns']
}
</script>

<style>

</style>