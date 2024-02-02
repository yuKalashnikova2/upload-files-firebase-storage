<script setup>
import Title from './components/Title.vue'
import EmptyState from './components/EmptyState.vue';
import Cards from './components/Cards.vue';

import { defaultStorage } from './main.js'
import { ref, uploadBytes } from 'firebase/storage'


// const myfile = ''
// const onFileChange = (event) => {
//   myfile = event.target.files[0];
// }
// const upload = () => {
//   const storageRef = ref(defaultStorage, 'folder/myfile.png')
//   uploadBytes(storageRef, myfile).then(
//     (snapshot) => {
//       console.log('uploaded!!!')
//     }
//   )
// }

// const upload = () => {
//   if (myfile) {
//     const storageRef = ref(defaultStorage, 'folder/myfile.png')
//     uploadBytes(storageRef, myfile).then(
//       (snapshot) => {
//         console.log('uploaded!!!')
//       }
//     )
//   } else {
//     console.error('No file selected');
//   }
// }
</script>

<template>

  <div class="container">
    <Title label="My project" />
    <div class="content">
      <input type="file" @change="onFileChange" />
      <button @click="upload">upload</button>
      <EmptyState />
    </div>
 <Cards />
  </div>


</template>

<style lang="scss" scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    border-radius: 8px;
    background: white;
 
  }
  .content {
    max-width: 512px;
    margin: 0 auto;
    padding: 40px 0;
  }
</style>
