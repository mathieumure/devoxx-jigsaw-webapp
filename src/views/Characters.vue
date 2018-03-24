<template>
  <main>
    <div class="superhero-card">
      <input type="text" class="search-superhero" role="searchbox" placeholder="Search for hero" :value="searchValue" @input="updateSearchValue">
    </div>
    <SuperheroCard :superhero="superhero" v-for="(superhero, idx) in heroes" :key="idx" />
  </main>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import SuperheroCard from "../components/SuperheroCard.vue";
import SuperHero from "../entities/SuperHero";
import { getCharacters } from "../api/characters.api";

import "normalize.css";

@Component({
  components: { SuperheroCard }
})
export default class App extends Vue {
  heroes: Array<SuperHero> = [];

  get searchValue(): string {
    return this.$route.query.search;
  }

  updateSearchValue($event: any): void {
    const search = $event.target.value;
    this.$router.push({ path: "/characters", query: { search } });
  }

  @Watch("searchValue")
  async fetchData() {
    this.heroes = await getCharacters(this.searchValue);
  }
}
</script>
<style lang="stylus">
.search-superhero {
  flex: 1 1 auto;
  text-align: center;
}
</style>
