<template>
  <div>
    <section class="destination">
      <GoBackButton />
      <h1>{{destination.name}}</h1>
      <div class="destination-details">
        <img :src="require(`@/assets/${destination.image}`)" :alt="destination.name" />
        <p>{{destination.description}}</p>
      </div>
    </section>
    <section class="experiences">
      <h2>Top experiences in {{destination.name}}</h2>
      <div class="cards" id="experience">
        <div v-for="experience in destination.experiences"
             :key="experience.slug"
             class="card">
          <router-link :to="{name:'ExperienceDetails', params: {experienceSlug: experience.slug}, hash: '#experience'}" >
            <img
              :src="require(`@/assets/${experience.image}`)"
              :alt="experience.name"
            />
            <span class="card_text">
                  {{experience.name}}
            </span>
          </router-link>
        </div>
      </div>
      <router-view :key="$route.path"/>
    </section>
  </div>
</template>

<script>
import store from "@/store.js"
import GoBackButton from "@/components/GoBackButton";

export default {
  components: {GoBackButton},
  data() {
    return {}
  },
  props: {
    slug: {
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
    }
  }
};
</script>

<style scope>
section {
  max-width: 1400px;
  width: 95%;
  margin: 40px auto;
}

.destination-details {
  display: flex;
  justify-content: space-between;
}

h1 {
  font-size: 38px;
  margin: 20px auto;
}

img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}

p {
  margin: 0 40px;
  font-size: 16px;
  text-align: left;
}

.experiences {
  padding: 40px 0;
  margin: 0 auto;
}

.cards {
  display: flex;
}

.cards img {
  max-height: 200px;
}

.card {
  padding: 0 20px;
  position: relative;
}

.card_text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
}
</style>
