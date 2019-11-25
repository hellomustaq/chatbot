<template>
  <div id="talentAI">
    <HelloWorld msg="Welcome to Taleant AI"/>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from "axios";
import VueAxios from 'vue-axios';
import HelloWorld from './components/SupportMessageComponent.vue'
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(VueAxios, axios)


export default {
  name: 'talentAI',
  components: {
    HelloWorld
  }
}
</script>

<style>

</style>
