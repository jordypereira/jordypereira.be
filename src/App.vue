<template>
  <div class="container">
    <div class="center">
      <router-view/>
      <Brackets/>
    </div>
  </div>
</template>
<script>
import Brackets from '@/components/OrangeBrackets'

export default {
  components: {
    Brackets
  }
}
</script>

<style lang="scss">
@import "assets/css/variables";

body {
  margin: 0;
}
.container {
  min-height: 100vh;
  width: 100vw;
  font-family: "Open Sans", sans-serif;
}
.container a {
  color: $text-color;
  text-decoration: none;
  padding: 10px 10px;
  transition: 500ms;
}
@media (min-width: 480px) {
  .container a {
    padding: 10px 15px;
  }
}

@media (min-width: 720px) {
  .container a {
    padding: 20px 30px;
  }
}
.container a:hover {
  color: $primary-color;
}
.container .center {
  height: 100vh;
  width: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 15vw;
}

/* Animations */
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fadeInDown {
  animation-name: fadeInDown;
}
</style>
