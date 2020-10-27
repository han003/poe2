<template>
  <div>
    <md-button class="md-raised md-primary" v-on:click="get">{{text}}</md-button>
    <img v-if="item" v-bind:src="item.item.icon">
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import PoeApi from '@/classes/poe-api';
import axios from 'axios';

@Component
export default class Settings extends Vue {
  item = null;
  text = 'est';
  api = new PoeApi();
  url = 'https://www.pathofexile.com/api/trade/search/Heist';

  async get() {
    let result = await axios.post(this.url, {
      query: {
        // name: 'The Cheater',
        type: 'The Cheater',
        filters: {
          trade_filters: {
            disabled: false,
          },
          misc_filters: {
            filters: {
              corrupted: {
                // options: 'false',
              },
              gem_level: {
                // min: 1,
                // max: 1,
              },
              quality: {
                // min: 1,
                // max: 1,
              },
            },
          },
        },
        status: {
          option: 'online',
        },
      },
      sort: {
        price: 'asc',
      },
    });

    let resultData = result.data;
    let id = resultData.id;
    let results = resultData.result;

    console.log(`result`, result);
    console.log(`results`, results);

    let items = await axios.get('https://www.pathofexile.com/api/trade/fetch/' + results.slice(0, 5).join(','), {id});

    console.log(`items`, items);

    this.item = items.data.result[0];
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
