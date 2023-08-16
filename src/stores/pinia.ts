import { defineStore } from "pinia";

export const Store = defineStore("store", {
  state: () => ({
    Singers: [
      {
        name: "Ed Sheeran",
        id: 1,
        albums: [
          {
            name: "Bad Habits",
            release: 2000,
            singerid: 1,
            albumid:1,
            songs: [{ name: "Bad Habits", placeid: 1 }],
          },
          {
            name: "Shape of You",
            release: 2000,
            singerid: 1,
            albumid:2,
            songs: [{ name: "Shape of You", placeid: 1 }],
          },
          {
            name: "÷ (Deluxe)",
            release: 2000,
            singerid: 1,
            albumid:3,
            songs: [
              { name: "Eraser", placeid: 1 },
              { name: "Castle on the Hill", placeid: 2 },
              { name: "Dive", placeid: 3 },
            ],
          },
        ],
      },
      {
        name: "Billie Eilish",
        id: 2,
        albums: [
          {
            name: "Happier Than Ever",
            release: 2000,
            singerid: 2,
            albumid:1,
            songs: [
              { name: "Getting Older", placeid: 1 },
              { name: "I Didn't Change My Number", placeid: 2 },
            ],
          },
          {
            name: "everything i wanted",
            release: 2000,
            singerid: 2,
            albumid:2,
            songs: [{ name: "everything i wanted", placeid: 1 }],
          },
        ],
      },
      {
        name: "Ariana Grande",
        id: 3,
        albums: [
          {
            name: "Sweetener",
            release: 2000,
            singerid: 3,
            albumid:1,
            songs: [
              { name: "raindrops (an angel cried)", placeid: 1 },
              { name: "blazed", placeid: 2 },
            ],
          },
          {
            name: "Dangerous Woman",
            release: 2000,
            singerid: 3,
            albumid:2,
            songs: [
              { name: "Moonlight", placeid: 1 },
              { name: "Be Alright", placeid: 2 },
            ],
          },
        ],
      },
      {
        name: "The Weeknd",
        id: 4,
        albums: [
          {
            name: "Starboy",
            release: 2000,
            singerid: 4,
            albumid:1,
            songs: [
              { name: "Party Monster", placeid: 1 },
              { name: "False Alarm", placeid: 2 },
            ],
          },
          {
            name: "Dawn FM",
            release: 2000,
            singerid: 4,
            albumid:2,
            songs: [
              { name: "Dawn FM", placeid: 1 },
              { name: "Gasoline", placeid: 2 },
            ],
          },
        ],
      },
      {
        name: "Taylor Swift",
        id: 5,
        albums: [
          {
            name: "Lover",
            release: 2000,
            singerid: 5,
            albumid:1,
            songs: [
              { name: "I Forgot That You Existed", placeid: 1 },
              { name: "Cruel Summer", placeid: 2 },
            ],
          },
          {
            name: "Midnights",
            release: 2000,
            singerid: 5,
            albumid:2,
            songs: [
              { name: "Lavender Haze", placeid: 1 },
              { name: "Maroon", placeid: 2 },
            ],
          },
        ],
      },
    ],
  }),
  getters: {},
  actions: {
    
  },
});
