<template>
  <main></main>
</template>

<script>
import "bulma/css/bulma.css";
export default {
  name: "App"
};
</script>

<style lang="stylus">
body {
  background: url('/cover.jpg') fixed;
  background-size: 100vw 774px;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Bangers', cursive;
  font-size: 30px;
}

header {
  min-height: 50px;
  background-color: #fff;
  padding: 25px 10px 10px 10px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 15px;
    display: block;
    background-color: white;
    transform-origin: bottom left;
    transform: rotate(-0.5deg) translate(-10px, 9px);
    border-bottom: solid 5px;
    box-shadow: 15px 15px rgba(0, 0, 0, 0.3);
  }
}

footer {
  min-height: 50px;
  background-color: #fff;
  padding: 10px 30px 5px 10px;
  position: relative;
  display: flex;
  align-items: center;
  border-top: solid 5px;

  img {
    height: 25px;
  }

  .copyright {
    text-align: center;
    flex: 1 0 auto;
    font-size: 0.5em;
  }
}

main {
  flex: 1 0 auto;
}
</style>
