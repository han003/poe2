<template>
  <div id="app">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <span class="md-title">My Title</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          Navigation
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>home</md-icon>
            <span class="md-list-item-text">
              <router-link to="/home">Home</router-link>
            </span>
          </md-list-item>

          <md-list-item>
            <md-icon>settings</md-icon>
            <span class="md-list-item-text">
              <router-link to="/settings">Settings</router-link>
            </span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>

  </div>
</template>

<style lang="scss">
#app {
  height: 100vh;
  width: 100vw;

  & > .md-app {
    height: 100%;
  }
}
</style>
