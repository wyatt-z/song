<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <div>
      <el-button @click="sayHello">Hello</el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    sayHello() {
      this.$http.get("api/say_hello").then(response => {
        this.$notify({
          title: "Hello",
          type: "success",
          message: response.data.msg,
          duration: 5000
        });
      });
    }
  }
};
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
