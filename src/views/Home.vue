<template>
  <div class="home">
    <md-tabs md-sync-route>
      <md-tab id="tab-config" md-label="Config" to="/components/config" exact></md-tab>
    </md-tabs>

    <router-view/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Config from '@/components/Config.vue'; // @ is an alias to /src

@Component({
  components: {
    Config,
  },
})
export default class Home extends Vue {
}
</script>
