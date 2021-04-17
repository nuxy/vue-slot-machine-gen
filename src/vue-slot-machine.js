/**
 *  Vue Slot Machine
 *  Create an extremely biased, web-based slot machine game.
 *
 *  Copyright 2021, Marc S. Brooks (https://mbrooks.info)
 *  Licensed under the MIT license:
 *  http://www.opensource.org/licenses/mit-license.php
 */

'use strict';

import {ref} from 'vue';
import SlotMachineGen from 'slot-machine-gen';
import 'slot-machine-gen/dist/slot-machine.min.css';

/**
 * Provides Vue Component wrapper.
 */
export default {
  setup() {
    const elRef = ref(null);

    return {elRef};
  },

  mounted() {

    console.log(['xxx', this.reels]);

    this.slot = new SlotMachineGen(
      this.$el,
      this.reels,
      this.callback,
      this.options
    );
  },

  data() {
    return {
      slot: null
    };
  },

  watch: {
    play(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.slot.play();
      }
    }
  },

  props: {
    id: {
      default: 'slot-machine',
      type: String
    },
    play: {
      default: false,
      type: Boolean
    },
    reels: {
      default: () => ([]),
      type: Array
    },
    options: {
      default: () => ({}),
      type: Object
    },
    callback: {
      type: Function
    }
  },

  template: `
    <div v-bind:id="id" class="slot-machine" ref="wrapper"></div>
  `
};
