<template>
  <div id="app">
    <Header title="cpBank"
      :hideUserDropdown="false"/>
    <Menu />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Header from './components/template/Header'
import Content from './components/template/Content'
import Footer from './components/template/Footer'
import Menu from './components/template/Menu'
export default {
  name: 'App',
  components: {
    Header,
    Menu,
    Content,
    Footer    
  }
}
</script>

<style>

* {
  font-family: "Lato", sans-serif;
}

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 40px;
  grid-template-columns: 300px 1fr;
  grid-template-areas: 
        "header header"
        "menu content"
        "menu footer";
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
