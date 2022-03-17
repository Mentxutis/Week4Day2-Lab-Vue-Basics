<template>
  <div class="baraja">
    <h3>{{title}}</h3>
    <h4>{{subtitle}}</h4>
  </div>
</template>
 
<script>
export default {
  name: "List",
   props:{
    title:String,
    subtitle:String,
  }

}
</script>

<style>
.baraja{
  border: 3px solid black;
  padding: 8px;
  margin-bottom: 10px;
  height: 100px;
  width: 40%;
  margin-left: 30%;

  
}
</style>