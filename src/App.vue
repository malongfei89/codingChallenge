<template>
  <div id="app" class="container">
    <p class="font-italic h3">This app is to provide visualization of how data of different type can be evenly distributed by an algorithm!</p>
    <ButtonGroup :btns="infoOfBtn" @addColor="addColor" class="mb-3"/>
    <Display :distributedGraph="distributedGraph" :target="target"/>
  </div>
</template>

<script>
import ButtonGroup from './components/ButtonGroup.vue'
import Display from './components/Display.vue'
import service from './service/service'

export default {
  data:()=>{
    return {
      target: '',
      infoOfBtn: [],
      distributedGraph: []
    }
  },
  name: 'app',
  components: {
    ButtonGroup,
    Display
  },
  async mounted(){
    try {
      let result = (await service.getAll()).data
      this.infoOfBtn = result.listOfTypes
      this.distributedGraph = result.answer
      //check block
      for(let ele of this.infoOfBtn){
        console.log(ele, 'has', this.distributedGraph.filter(unit => unit === ele).length, 'nodes')
      }
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

</style>
