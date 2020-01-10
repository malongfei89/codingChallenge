<template>
  <div id="app" class="container">
    <ButtonGroup :btns="infoOfBtn" @addColor="addColor"/>
    <Display :numOfSpans="numOfSpans" :spanNeedColor="spanNeedColor"/>
  </div>
</template>

<script>
import ButtonGroup from './components/ButtonGroup.vue'
import Display from './components/Display.vue'
import service from './service/service'

export default {
  data:()=>{
    return {
      infoOfBtn: null,
      numOfSpans: 0,
      spanNeedColor: []
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
      this.numOfSpans = result.total
    } catch(error){
      console.log(error)
    }
  },
  methods:{
    async addColor(e){
      if(sessionStorage.getItem(`array${e}`)) this.spanNeedColor = JSON.parse(sessionStorage.getItem(`array${e}`))
      else {
        this.spanNeedColor = (await service.getNumByType(e)).data
        sessionStorage.setItem(`array${e}`, JSON.stringify(this.spanNeedColor))
      }
    }
  }
}
</script>

<style>

</style>
