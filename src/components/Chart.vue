<template>
  <div>
    <p class="font-weight-bold">Number of elements in each type:</p>
    <div v-for="(ele, index) in source" :key="index" class="mb-2">
        <span class="d-inline-block bg-success text-dark lead" :style="chartStyle(ele)">{{getType(ele.type)}}</span>
        <p class="d-inline ml-3 lead">{{ele.total}}</p>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        source: Array
    },
    methods:{
        getType(a){
            return a.charAt(a.length-1).toUpperCase()
        },
        chartStyle(ele){
            let width = ele.total/this.$props.source.reduce((pre, cur) => pre+=cur.total, 0)*240
            return {
                width: (width)+'%'
            }
        }
    }
}
</script>

<style>

</style>