<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" app>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-title>John Leider</v-list-item-title>
        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider></v-divider>
      <v-list nav dense rounded>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in navigationItems" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app short flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
        <v-btn icon>
          <v-badge overlap dot color="green">
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
      <v-menu offset-x>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-avatar color="primary" size="30">
              <span class="white--text">MB</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"/>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>John Leider</v-list-item-title>
                <v-list-item-subtitle>Founder of Vuetify</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
              <v-list-item v-for="(item,i) in menuItems" :key="i" class="my-n2 raw-pointer">
                <v-list-item-avatar><v-icon v-text="item.icon"></v-icon></v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-app-bar>
    <v-divider></v-divider>
    <v-main class="grey lighten-2" style="height: 100%">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        selectedItem: 0,
        mini: false,
        messages: 1,
        navigationItems: [
          { text: 'Home', icon: 'mdi-home' },
          { text: 'Chat', icon: 'mdi-message-reply-text' },
          { text: 'Friends', icon: 'mdi-account-group' },
          { text: 'Explore', icon: 'mdi-magnify' }
        ],
        menuItems: [
          { text: 'Profile', icon: 'mdi-account', },
          { text: 'Sign Out', icon: 'mdi-export' }
        ]
      }
    },
  }
</script>

<style scoped>
.raw-pointer {
  cursor: pointer;
}
</style>