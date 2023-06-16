<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/demo">Demo</router-link> |
      <router-link to="/docs">Docs</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

.custom-ui-element {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  text-align: left;

  label {
    margin-bottom: 5px;
  }
}

.required {
  color: red;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
