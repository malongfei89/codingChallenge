<template>
  <div id="app" class="container">
    <ButtonGroup />
    <Display />
  </div>
</template>

<script>
import ButtonGroup from './components/ButtonGroup.vue'
import Display from './components/Display.vue'

export default {
  name: 'app',
  components: {
    ButtonGroup,
    Display
  },

}
</script>

<style>

</style>
