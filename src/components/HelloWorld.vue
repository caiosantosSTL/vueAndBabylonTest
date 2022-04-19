<template>
<div>
  <h1>Blender + BabylonJs + Vue CLI</h1>
  <p>Use the mouse to move it</p>
  <canvas></canvas>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
//import {BasicScene} from '@/BabylonEx/BasicScene'
//import {StandarMaterials} from '@/BabylonEx/StandarMaterials'
import {ImportModels} from '@/BabylonEx/ImportModels'

export default defineComponent({
  name: 'HelloWorld',
  mounted(){
    const canvas = document.querySelector("canvas")!
    //new BasicScene(canvas)
    //new StandarMaterials(canvas)
    new ImportModels(canvas)
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
canvas{
  width: 80%;
  height: 70%;
}
</style>
