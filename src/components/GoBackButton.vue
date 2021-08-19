<template>
  <button @click="goBack">
    Go back!
  </button>
</template>

<script>
export default {
  name: "GoBackButton",
  methods: {
    goBack() {
        return this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

button {
  padding: 10px 12px;
  color: white;
  background: #333;
  border-radius: 15%;
  border: none;
  float: left;
}

button:hover {
  background: #444;
  cursor: pointer;
}

</style>
