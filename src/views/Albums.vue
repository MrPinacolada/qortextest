<template>
  <div class="card-wrapper">
    <q-card class="my-card bg-purple text-white" v-for="album in albums">
      <q-card-section>
        <div class="text-h6">{{ album.name }}</div>
      </q-card-section>

      <q-card-section>
        <q-list separator class="rounded-borders">
          <q-item v-ripple>
            <q-item-section>
              <p>Singer: {{ getSingerName(album.singerid) }}</p>
            </q-item-section>
          </q-item>
          <q-item v-ripple>
            <q-item-section>
              <p>Year of release: {{ album.release }}</p>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>

      <q-card-section>
        <q-item v-ripple>
          <q-item-section>
            <p>Songs:</p>
          </q-item-section>
        </q-item>
        <q-list dense bordered separator class="rounded-borders">
          <q-item v-ripple v-for="song in album.songs">
            <q-item-section>
              <p>{{ song.placeid + ": " + song.name }}</p>
            </q-item-section>
          </q-item></q-list
        >
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { Store } from "@/stores/pinia";
import { onMounted, ref } from "vue";

const store = Store();

interface Album {
  name: string;
  release: number;
  albumid: number;
  singerid: number;
  songs: { name: string; placeid: number }[];
}

const albums = ref<Album[]>([]);

const getSingerName = (albumId: number): string => {
  const singer = store.$state.Singers.find((singer) =>
    singer.albums.some((album) => album.singerid === albumId)
  );
  return singer ? singer.name : "Unknown";
};

onMounted(() => {
  albums.value = store.$state.Singers.flatMap((singer) => singer.albums);
});
</script>

<style scoped>
.my-card {
  width: 350px;
}
.card-wrapper {
  display: grid;
  align-items: flex-start;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 50px;
}
</style>
