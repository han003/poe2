<template>
  <div id="content">

    <md-card id="price-card" class="card">
      <span class="md-display-2">{{ calcPrice() }}</span>
    </md-card>

    <md-card class="card">
      <md-card-content>
        <md-list>
          <md-list-item v-for="item in items" :key="item.id">
            <md-avatar>
              <img v-bind:src="item.item.icon">
            </md-avatar>

            <div class="md-list-item-text">
              <span>{{ item.listing.price.amount }}</span>
              <span>{{ item.listing.price.currency }}</span>
            </div>

            <md-switch v-model="item._selected"/>
          </md-list-item>
        </md-list>
      </md-card-content>
    </md-card>

  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import PoeSearch from '@/classes/poe-search';

@Component
export default class Settings extends Vue {
  items = [];
  exalted = {};

  async created() {
    this.exalted = new PoeSearch({
      type: 'Exalted Orb',
      priceCurrency: 'chaos',
    });

    await this.exalted.post();

    for (let i = 0; i < 4; i += 1) {
      let newItems = await this.exalted.fetch(10);
      this.items = this.items.concat(newItems.map((item) => {
        item._selected = item.listing.price.currency === 'chaos';
        console.log(`item`, item);
        return item;
      }));
    }
  }

  calcPrice() {
    let selectedItems = this.items.filter((item) => item._selected);

    if (!selectedItems.length) return 0;

    let price = selectedItems.reduce((sum, item) => sum + item.listing.price.amount, 0) / selectedItems.length;

    return price.toFixed(2);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .card {
    width: 500px;
    max-width: 500px;

    &#price-card {
      text-align: center;
      margin-bottom: 50px;
      padding: 20px;
      position: sticky;
      top: 16px;
      z-index: 3;
    }
  }
}

</style>
