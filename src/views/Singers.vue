<template>
  <div class="card-wrapper">
    <q-card
      class="my-card bg-secondary text-white"
      v-for="singer in store.$state.Singers"
    >
      <q-card-section>
        <div class="text-h6">{{ singer.name }}</div>
        <div class="text-subtitle2">Albums:</div>
      </q-card-section>

      <q-card-section>
        <q-list dense bordered separator class="rounded-borders">
          <q-item v-ripple v-for="album in singer.albums">
            <q-item-section>
              {{ album.name }}
            </q-item-section>
          </q-item></q-list
        >
      </q-card-section>

      <q-separator dark />

      
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { Store } from "@/stores/pinia";

const store = Store();
</script>

<style scoped>
.my-card {
  width: 250px;
}
.card-wrapper {
  display: flex;
  align-items: flex-start;
  justify-items: left;
  gap: 30px;
  padding: 50px;
}
</style>
