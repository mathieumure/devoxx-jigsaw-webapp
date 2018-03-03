<template>
  <main>
    <section class="superhero-card">
      <img src="http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg" alt="A-Bomb (HAS)" class="superhero-card__logo">
      <div class="superhero-card__detail">
        <h2 class="superhero-card__title">A-Bomb (HAS)</h2>
        <div class="superhero-card__description">Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! </div>
      </div>
    </section>
    <section class="superhero-card">
      <img src="http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec.jpg" alt="A.I.M." class="superhero-card__logo">
      <div class="superhero-card__detail">
        <h2 class="superhero-card__title">A.I.M.</h2>
        <div class="superhero-card__description">AIM is a terrorist organization bent on destroying the world.</div>
      </div>
    </section>
    <section class="superhero-card">
      <img src="http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg" alt="A-Bomb (HAS)" class="superhero-card__logo">
      <div class="superhero-card__detail">
        <h2 class="superhero-card__title">A-Bomb (HAS)</h2>
        <div class="superhero-card__description">Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! </div>
      </div>
    </section>
  </main>
</template>

<script>
import "normalize.css";

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

  h1 {
    margin: 5px;
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
  }
}

main {
  flex: 1 0 auto;
  margin-top: 50px;
}

.superhero-card {
  margin: auto;
  width: 50%;
  background-color: white;
  display: flex;
  border: solid 5px;
  box-shadow: 15px 15px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;

  &:nth-child(even) {
    transform: skewX(5deg);
    flex-direction: row-reverse;
  }

  &:nth-child(odd) {
    transform: skewX(-5deg);
  }

  &__logo {
    max-height: 195px;
  }

  &__detail {
    padding: 0px 10px 10px 10px;
    flex: 1 1 auto;
  }
}
</style>
