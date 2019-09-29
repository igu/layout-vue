<template>

  <div v-if="!$route.meta.desativaHeader" id="app">
    <Header  />
    <Content />
    <Footer  />
  </div>
  <div v-else id="app-login">
    <Content />
  </div>
</template>

<script>
import Header from "@/components/template/Header";
import Content from "@/components/template/Content";
import Footer from "@/components/template/Footer";

export default {
  name: "App",
  components: { Header, Content, Footer }
};
</script>

<style>
* {
  font-family: "Lato", sans-serif;
}

body {
  margin: 0 auto;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 40px;
  grid-template-columns: 300px 1fr;
  grid-template-areas:
    "header header"
    "content content"
    "footer footer";
}

#app-login {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}
</style>