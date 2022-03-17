<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3> Esto es una operación matemática {{math}}</h3>
    <h4>Esto es una operación matemática {{math2}}</h4>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data(){
    return{
      math: 2+2,
      math2: "2+3",
    }
  }
}
</script>
