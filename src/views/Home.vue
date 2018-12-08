<template>
  <div>
    <h1 class="animated fadeInDown">
      Jordy
      <span>Pereira</span>
    </h1>
    <ul class="animated fadeInDown">
      <!-- <li>
        <a href="https://www.facebook.com/JordyPe">Facebook</a>
      </li>-->
      <li>
        <a href="https://www.linkedin.com/in/jordy-pereira-4b0898119/">LinkedIn</a>
      </li>
      <li>
        <a href="https://twitter.com/_perjor">Twitter</a>
      </li>
      <li>
        <a href="https://github.com/perjor">Github</a>
      </li>
    </ul>
    <div class="info-bottom">
      <a href="https://portfolio.jordypereira.be">My Portfolio</a>
      <!-- <a href="./assets/Cv-Jordy-Pereira.pdf">Download my Curriculum Vitae</a> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    track () {
      this.$ga.page('/')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/variables";

h1 {
  font-size: 2.4em;
  font-family: montserrat, sans-serif;
  font-weight: 700;
  color: $text-color;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  padding: 0 50px;
}
@media (min-width: 480px) {
  h1 {
    font-size: 5em;
  }
}
@media (min-width: 720px) {
  h1 {
    font-size: 8em;
  }
}
h1 span {
  font-weight: 300;
  font-family: "Open Sans", sans-serif;
}
ul {
  font-size: 1em;
  padding: 0 50px;
  text-align: center;
}
@media (min-width: 720px) {
  ul {
    font-size: 1.2em;
    margin-top: -20px;
  }
}
ul li {
  list-style-type: none;
  display: inline;
}

.info-bottom {
  font-size: 0.8em;
  position: absolute;
  bottom: 100px;
  right: 12vw;
  padding: 0 25px;
  display: flex;
  flex-flow: column wrap;
}
.info-bottom a {
  padding: 0;
}
@media (min-width: 480px) {
  .info-bottom {
    font-size: 1em;
  }
}

@media (min-width: 720px) {
  .info-bottom {
    font-size: 1.2em;
  }
}
</style>
