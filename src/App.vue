<template>
  <div id="app">
    <TheNavigationBar />
    <transition name="fade" mode="out-in" >
      <router-view :key="$route.path"/>
    </transition>
  </div>
</template>

<script>
import TheNavigationBar from "@/components/TheNavigationBar";
export default {
  components: {
    TheNavigationBar
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  animation: fade 0.3s ease-in;
}
@keyframes fade{
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.moveUp-enter {
  transform: translateY(400px);
  opacity: 0;
}

.moveUp-enter-active {
  animation: moveLeftEnter 0.3s ease-in;
}
@keyframes moveLeftEnter {
  0% {
    transform: translateX(200px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}

.fade-leave {
  opacity: 1;
}

.fade-leave-active {
  animation: fadeLeave 0.3s ease-in;
}
@keyframes fadeLeave {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.moveUp-leave-active {
  animation: moveLeftLeave 0.3s ease-in;
}
@keyframes moveLeftLeave {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-200px);
    opacity: 0
  }
}

.input {
  border: 1px solid green;
  padding: 10px;
  margin-bottom: 20px;
}

.btn {
  background-color: green;
  color: white;
  padding: 10px;
  cursor: pointer;
  margin: 5px;
}


</style>
