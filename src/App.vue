<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/search">Youtube search</router-link>
    <hr />
  </div>

  <div class="container">
    <router-view />
  </div>
</template>

<style>
html,
body,
#app {
  margin: 0;
  height: 100%;
  width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.3);
  z-index: 2;
  cursor: pointer;
}

#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.container {
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
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

.btn-light button:disabled,
button[disabled] {
  pointer-events: none;
  opacity: 0.5;
}

.block-center {
  display: block;
  margin: 0 auto;
}

.text-center {
  text-align: center;
}
</style>
