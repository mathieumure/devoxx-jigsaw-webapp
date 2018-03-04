<template>
  <section class="superhero-card">
      <img :src="superhero.logo" :alt="superhero.name" class="superhero-card__logo">
      <div class="superhero-card__detail">
        <h2 class="superhero-card__title">{{superhero.name}}</h2>
        <div class="superhero-card__description">{{superhero.description}}</div>
      </div>
    </section>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SuperHero from "../entities/SuperHero";

@Component
export default class SuperheroCard extends Vue {
  @Prop({ required: true })
  superhero!: SuperHero;
}
</script>
