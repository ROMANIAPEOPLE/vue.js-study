<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile router :to="{name: 'home'}" exact>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile router :to="{name: 'users'}" exact>
          <v-list-tile-action>
            <v-icon>person</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Users</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
      <!-- 여기까지 v-list -->
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer">  </v-toolbar-side-icon>
      <v-toolbar-title>회원관리시스템</v-toolbar-title>
    </v-toolbar>
    <!-- 헤드  -->
    <v-content>
      <router-view/>
    </v-content>
    <v-footer color="red" app>
      <span class="white--text">&copy; {{this.$moment(new Date()).format('YYYY-MM-DD')}} </span>
    </v-footer>
  </v-app>
</template>

<script>


  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    }
  }
</script>
