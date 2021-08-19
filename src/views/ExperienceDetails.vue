<template>
  <section>
    <h2>{{experience.name}}</h2>
    <div class="experience-details">
      <img
        :src="require(`@/assets/${experience.image}`)"
        :alt="experience.name"
      />
      <p>{{experience.description}}</p>
    </div>
  </section>
</template>

<script>
import store from "@/store.js"
export default {
  props: {
    slug: {
      type: String,
      required: true
    },
    experienceSlug: {
      type: String,
      required: true
    }
  },
  computed: {
    destination() {
      for(let i = 0; i< store.destinations.length; i++){
        if(store.destinations[i].slug === this.slug)
          return store.destinations[i];
      }
      return null;
    },
    experience() {
      for(let i = 0; i< this.destination.experiences.length; i++){
        if(this.destination.experiences[i].slug === this.experienceSlug)
          return this.destination.experiences[i];
      }
      return null;
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 28px;
}

img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}

.experience-details {
  display: flex;
  justify-content: space-between;
}

p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
  font-size: 16px;
}
</style>
