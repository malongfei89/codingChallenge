<template>
  <div id="app" class="container">
    <p class="font-italic h3">This app is to provide visualization of how data of different type can be evenly distributed by an algorithm!</p>
    <button class="btn btn-lg btn-primary" @click="needStatistics=!needStatistics">Data Statistics</button>
    <div v-if="needStatistics">
      <p class="h4 font-weight-bolder showStatistics">There are {{distributedGraph.length}} elements in this data set!</p>
      <Chart :source="source" class="showStatistics"/>
    </div>
    <ButtonGroup :btns="infoOfBtn" @addColor="addColor" class="mb-3"/>
    <Display :distributedGraph="distributedGraph" :target="target"/>
  </div>
</template>

<script>
import ButtonGroup from './components/ButtonGroup.vue'
import Display from './components/Display.vue'
import Chart from './components/Chart.vue'
import service from './service/service'

export default {
  data:()=>{
    return {
      target: '',
      infoOfBtn: [],
      distributedGraph: [],
      source: [],
      needStatistics: false
    }
  },
  name: 'app',
  components: {
    ButtonGroup,
    Display,
    Chart
  },
  async mounted(){
    try {
      let result = (await service.getAll()).data
      this.infoOfBtn = result.listOfTypes
      this.distributedGraph = result.answer
      this.source = result.source.container.sort((a, b)=>b.total-a.total)
    } catch(error){
      console.log(error)
    }
  },
  methods:{
    addColor(e){
      this.target=e
    }
  }
}
</script>

<style>
.dataChart{
  color: white;
  text-align:end
}
.showStatistics {
  animation: slide-in 1.2s ease
}
@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateX(-50%) scaleX(0)
  }
  to {
    opacity: 1;
    transform: translateX(0) scaleX(1)
  }
}
</style>
