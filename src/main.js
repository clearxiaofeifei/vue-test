import Vue from "vue";

let msg = {
   template:"<h1>{{msg}}</h1>"
};

let vm = new Vue({
   el:"#app",
   data:{
      msg:"这就是数据"
   },
   methods:{},
   filters:{},
   components:{
      example:msg,
   },
   render:(createElements)=>{

   }
});