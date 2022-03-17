<template>
<div >
  
  <nav class="first">
    <p>barra de nav</p>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",

  components:{
    
  },

}
</script>

<style>

.first{
  height: 50px;
  color:aliceblue;
  background-color: rgb(168, 179, 173);
  
}

</style>