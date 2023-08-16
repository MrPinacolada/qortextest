<template>
  <div class="card-wrapper">
    <q-card class="my-card bg-orange songName-white">
      <q-card-section>
        <div class="songName-h6"><p>Add song</p></div>
      </q-card-section>

      <q-card-section>
        <q-item v-ripple>
          <q-item-section>
            <q-select
              outlined
              v-model="pickedAlbum"
              :options="getAlbumNames()"
              label="Pick album"
            />
          </q-item-section>
        </q-item>
        <q-item v-ripple>
          <q-item-section>
            <q-input outlined v-model="songName" label="Name of the song" />
          </q-item-section>
        </q-item>
      </q-card-section>
      <q-card-actions vertical>
        <q-btn flat @click="toggleAddSong">ADD</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { Store } from "@/stores/pinia";
import { onMounted, ref } from "vue";

const store = Store();
const songName = ref("");
const pickedAlbum = ref();

const getAlbumNames = () => {
  let albumNames: Array<string> = [];

  store.$state.Singers.forEach((singer) => {
    singer.albums.forEach((album) => {
      albumNames.push(album.name);
    });
  });

  return albumNames;
};

const toggleAddSong = () => {
  if (pickedAlbum.value && songName.value) {
    const selectedSinger = store.$state.Singers.find((singer) =>
      singer.albums.some((album) => album.name === pickedAlbum.value)
    );

    if (selectedSinger) {
      const selectedAlbum = selectedSinger.albums.find(
        (album) => album.name === pickedAlbum.value
      );

      if (selectedAlbum) {
        const newSong = {
          name: songName.value,
          placeid: selectedAlbum.songs.length + 1,
        };

        selectedAlbum.songs.push(newSong);

        store.$state.Singers = [...store.$state.Singers];
        localStorage.setItem("singers", JSON.stringify(store.$state.Singers))

        songName.value = "";
        pickedAlbum.value = null;
      }
    }
  }
};
</script>

<style scoped>
.my-card {
  width: 350px;
}
.card-wrapper {
  display: grid;
  align-items: center;
  justify-items: center;
  gap: 30px;
  padding: 50px;
}
</style>
