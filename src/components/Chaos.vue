<template>
  <div>
    <md-content class="md-elevation-4">
      <img src="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollRare.png">
    </md-content>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import PoeBulk from '@/classes/poe-bulk';
import PoeSearch from '@/classes/poe-search';

@Component
export default class Settings extends Vue {
  async created() {
    this.exalted = new PoeSearch({
      type: 'The Cheater',
    });

    console.log(`this.api`, this.exalted);

    let exaltedPostResp = await this.exalted.post();

    console.log(`exaltedPostResp`, exaltedPostResp);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
