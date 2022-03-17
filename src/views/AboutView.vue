<template>
  <div class="about">
   

    <h1>Do you want say hello? then click de button </h1>
    <br><br>
    <button @click="desactivado= !desactivado">Click Me</button>
    <br><br><br>
    <img v-show="desactivado" src="../assets/2022-02-07 11.19.19-2.jpg" alt="foto saludando">
     <List
          v-for="post in posts"
          :key="post.id"
          :title="post.title"
          :subtitle="post.subtitle"
    />
  </div>
  
</template>


<script>
import List from "../components/List.vue";

export default {
  name:"AboutView",
  components: {
       List,
  },
  data(){
    return{
      desactivado:false,
      posts:[
        {
          id: 1,
          title: "Ruta por el Penedès",
          subtitle: "Bcn-Begues-Vilaf-Ranxos-Olivella"
        },
        {
          id: 2,
          title: "Ruta por el Vallés",
          subtitle: "Bcn-Talamanca-Moià-Perafita-L`Estany"
        },
        {
          id: 3,
          title: "Ruta por el Montseny",
          subtitle: "Bcn-Tona-Viladrau-Arbúcies"
        },
      ]
    }
    
  },
  
 

};
</script>


<style>
.about img{
  width: 40%;
  height: 40%;
}
</style>