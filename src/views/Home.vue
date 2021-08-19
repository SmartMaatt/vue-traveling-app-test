<template>
  <div class="home">
    <h1>All Destinations</h1>
    <div class="destinations">
      <div v-for="destination in destinations" :key="destination.name">
        <router-link :to="{name: 'DestinationDetails', params: {slug: destination.slug}}">
          <h2>{{destination.name}}</h2>
        </router-link>
        <figure>
          <img :src="require(`@/assets/${destination.image}`)" :alt="destination.name" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store.js"

export default {
  name: "Home",
  components: {},
  data() {
    return {
      destinations: store.destinations
    }
  }
};
</script>

<style scoped>

.home {
  max-width: 1400px;
  margin: 0 auto;
}

.destinations {
  display: flex;
  justify-content: space-between;
}

.destinations img {
  max-width: 200px;
}

.destinations img:hover {
  transform: scale(1.1);
  transition: 0.5s;
  cursor: pointer;
}

.destinations a {
  color: #333;
  text-decoration: none;
}

.destinations a:hover {
  text-decoration: underline;
}
</style>
