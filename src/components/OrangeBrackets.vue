<template>
  <div>
    <div id="bottom"></div>
    <div id="right"></div>
    <div id="top"></div>
    <div id="left"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "../assets/css/variables";

.line-hor,
#bottom,
#top {
  background: $primary-color;
  z-index: -20;
  width: 50vw;
  height: 30px;
}

.line-vert,
#right,
#left {
  background: $primary-color;
  z-index: -20;
  width: 30px;
  height: 50vh;
}

#bottom {
  position: absolute;
  bottom: 50px;
  right: 10vw;
}

#right {
  position: absolute;
  bottom: 50px;
  right: 10vw;
}

#top {
  position: absolute;
  top: 50px;
  left: 10vw;
}

#left {
  position: absolute;
  top: 50px;
  left: 10vw;
}
</style>
