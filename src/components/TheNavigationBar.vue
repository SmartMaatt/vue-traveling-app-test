<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link v-for="destination in destinations" :key="destination.name" :to="{name: 'DestinationDetails', params: {slug: destination.slug}}">{{destination.name}}</router-link>
    <router-link to="/user">Dashboard</router-link>
  </div>
</template>

<script>
import store from "@/store.js"

export default {
  data() {
    return {
      destinationSlug: this.$route.params.slug,
      destinations: store.destinations
    }
  }
};
</script>

<style scope>
#nav {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 15px;

  position: sticky;
  top: 0;
  border-bottom: 1px solid #dedede;
  background-color: white;
  z-index: 1;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}

#nav a.router-link-exact-active {
  color: #892d2d;
}
</style>
