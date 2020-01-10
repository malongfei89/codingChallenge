<template>
  <div>
    <div>
      <span v-for="num in numOfSpans" :key=num class="mr-1">
        <i :class="[spanNeedColor.includes(num)?'fas fa-square fa-3x text-danger':'fas fa-square fa-3x text-success']"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    numOfSpans: Number, 
    spanNeedColor:Array
  }
}
</script>

<style>

</style>