<template>
    <div class="widget">
      <h2>{{ title }}</h2>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: 'Widget Title',
        message: 'Hello, Saya Muhammad Mukhti Wibowo dengan NPM 213510329. Ini merupakan project sederhana saya mengenai widget untuk memenuhi UAS Praktikum Pemrograman Berbasis Komponen ',
        
      };
    },
  };
  </script>
  
  <style scoped>
  .widget {
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
  }
  </style>
  