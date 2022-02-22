<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <hr/>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
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

.btn-space-left {
  margin-left: 3px;
}

.btn-light {
  color: #000;
  background-color: rgba(0, 0, 0, 0.08);
}

.btn-light:hover {
  color: #fff;
  background-color: #000;
}

.center-text {
  text-align: center;
}
</style>
