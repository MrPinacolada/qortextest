<template>
  <header>
    <q-tabs v-model="tab" class="text-teal">
      <RouterLink :to="{ name: 'home' }">
        <q-tab name="singers" icon="emoji_people" label="Singers" />
      </RouterLink>

      <RouterLink :to="{ name: 'albums' }">
        <q-tab name="allalbums" icon="library_music" label="All  Albums" />
      </RouterLink>
      <RouterLink :to="{ name: 'addsong' }">
        <q-tab name="add" icon="add_circle_outline" label="add song" />
      </RouterLink>
    </q-tabs>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
import { onBeforeMount, ref } from "vue";
import { Store } from "@/stores/pinia";

const store = Store();
let tab = ref("singers");

onBeforeMount(() => {
  let singers = localStorage.getItem("singers");
  if (singers) {
    store.$state.Singers = JSON.parse(singers);
  }
});
</script>

<style>
body {
  margin: 0;
  padding: 0;
  border: none;
  text-decoration: none;
}
h1,
h2,
h3,
p,
span,
a {
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: inherit;
}
</style>
