<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <button @click="fetchMessage">Fetch Message</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      message: 'Click the button to fetch a message from the backend!',
    };
  },
  methods: {
    async fetchMessage() {
      try {
        const response = await axios.get('http://127.0.0.1:3000/api/hello');
        this.message = response.data.message;
      } catch (error) {
        console.error('Error fetching message:', error);
        this.message = 'Error fetching message.';
      }
    },
  },
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 50px;
}
</style>


