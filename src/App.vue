<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Cuaca</router-link></li>
          <li><router-link to="/location">Location</router-link></li>
          <li><router-link to="/stopwatch">Stopwatch</router-link></li>
          <li><router-link to="/tictactoe">Tic Tac Toe</router-link></li>
          <li><router-link to="/photo">Photo</router-link></li>
          <li><router-link to="/widget">About Me</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  background-image: url('https://w0.peakpx.com/wallpaper/694/582/HD-wallpaper-fuji-shikimori-in-2022-gambar-karakter-gambar-animasi-kartun-kartun-brother-anime.jpg')
}
#app {
  text-align: center;
}

header {
  
  background: #058c01;
  padding: 7px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

nav li {
  display: inline-block;
  margin-right: 10px;
}

nav a {
  color: #fff;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

nav a:hover {
  background-color: #ed0000;
}
</style>
