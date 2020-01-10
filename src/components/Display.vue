<template>
  <div>
    <div>
      <span v-for="(ele, index) in distributedGraph" :key=index class="mr-1">
        <i :class="[ele===target?'fas fa-square fa-2x text-danger':'fas fa-square fa-2x text-success']"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    distributedGraph: Array,
    target:String
  }
}
</script>

<style>

</style>