<template>
  <div>
    <h1>Welcome {{username}}</h1>
    <router-link :to="{name: 'invoices'}" ><button class="btn">Invoices</button></router-link>
    <button @click="logOut" class="btn">Log out</button>
  </div>
</template>

<script>
import store from "../store.js"
export default {
  data() {
    return {
      username: store.user
    }
  },
  methods: {
    logOut(){
      store.user = null;
      this.$router.push("/");
    }
  }
}
</script>
