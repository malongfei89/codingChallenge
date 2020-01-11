<template>
  <div>
    <span v-for="(ele, index) in distributedGraph" :key=index class="mr-1 slow-show d-inline-block">
      <i class="fas fa-square fa-2x" :class="[target===ele?'soft-change text-danger':'color']"></i>
    </span>
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
.soft-change{
  animation:softchange 0.8s ease-in-out
}
.color{
  color: #b8c2cc;
}
.slow-show{
  animation: slowShow 1s
}
@keyframes slowShow {
  from {
    transform: scale(0, 0);
  }
  to{
    transform: scale(1, 1);
  }
}
@keyframes softchange {
  from {
    color: #b8c2cc;
  }
  to{
    color:#dc3545;
  }
}
</style>