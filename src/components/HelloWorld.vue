<template>
  <div class="hello">
    <h1>welcome tu home!!</h1>
  </div>
     
</template>

<script>
import api from "./api/api"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  created: function () {
    Promise.resolve(api.home()).then(data => {
      console.log(data)
      this.msg = data.msg
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
