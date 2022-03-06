import * as Vue    from 'vue';
import SlotMachine from '../dist/vue-slot-machine';

const imageUrl = 'https://nuxy.github.io/slot-machine-gen/images';
const soundUrl = 'https://nuxy.github.io/slot-machine-gen/sounds';

const options = {
  sounds: {
    reelsBegin:`${soundUrl}/reelsBegin.mp3`,
    reelsEnd: `${soundUrl}/reelsEnd.mp3`,
  }
};

const reels = [
  {
    imageSrc: `${imageUrl}/reel-strip1.png`,
    symbols: [
      {
        title: 'cherry',
        position: 100,
        weight: 2
      },
      {
        title: 'plum',
        position: 300,
        weight: 6
      },
      {
        title: 'orange',
        position: 500,
        weight: 5
      },
      {
        title: 'bell',
        position: 700,
        weight: 1
      },
      {
        title: 'cherry',
        position: 900,
        weight: 3
      },
      {
        title: 'plum',
        position: 1100,
        weight: 5
      }
    ]
  },
  {
    imageSrc: `${imageUrl}/reel-strip2.png`,
    symbols: [
      {
        title: 'orange',
        position: 100,
        weight: 6
      },
      {
        title: 'plum',
        position: 300,
        weight: 5
      },
      {
        title: 'orange',
        position: 500,
        weight: 3
      },
      {
        title: 'plum',
        position: 700,
        weight: 5
      },
      {
        title: 'cherry',
        position: 900,
        weight: 2
      },
      {
        title: 'bell',
        position: 1100,
        weight: 1
      }
    ]
  },
  {
    imageSrc: `${imageUrl}/reel-strip3.png`,
    symbols: [
      {
        title: 'cherry',
        position: 100,
        weight: 4
      },
      {
        title: 'bell',
        position: 300,
        weight: 1
      },
      {
        title: 'orange',
        position: 500,
        weight: 6
      },
      {
        title: 'plum',
        position: 700,
        weight: 5
      },
      {
        title: 'plum',
        position: 900,
        weight: 3
      },
      {
        title: 'cherry',
        position: 1100,
        weight: 2
      }
    ]
  }
];

const callback = function(payLine) {
  console.log(payLine[0].title + ' | ' + payLine[1].title + ' | ' + payLine[2].title);

  if (payLine[0].title === payLine[1].title && payLine[0].title === payLine[2].title) {
    (new Audio(`${soundUrl}/winner.mp3`)).play();
  }
};

const app = Vue.createApp({
  data() {
    return {
      reels,
      options,
      callback,
      play: false
    };
  },

  methods: {
    playEvent() {
      this.play = !this.play;
    }
  },

  template: `
    <slot-machine v-bind:reels="reels" v-bind:options="options" v-bind:callback="callback" v-bind:play="play" />

    <button id="play-button" v-on:click="playEvent">Play</button>
  `
});

app.component('slot-machine', SlotMachine).mount('#main');
