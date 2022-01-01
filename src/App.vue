<template>
  <v-app>
      <v-navigation-drawer
        permanent
        expand-on-hover
        app
        mini-variant.sync
      >
      <v-list>
        <v-list-item class="px-1">
          <v-avatar>
          <v-img
          src="https://cdn141.picsart.com/334706614028211.png"
          >
          </v-img>
        </v-avatar>
        </v-list-item>
        <v-list-item 
          link
          :to="{path: '/'}"
        >
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item 
          link
          :to="{path: 'covid-tracker'}"
        >
          <v-list-item-icon>
            <v-icon>mdi-virus</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Covid Tracker</v-list-item-title>
        </v-list-item>
      </v-list>
      </v-navigation-drawer>

      <v-container>
        <router-view/>
      </v-container>
      <!-- <v-main>
        <router-view/>
      </v-main> -->
      
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
