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
        <v-list-item-group color="primary" :value="selectedItem">
          <v-list-item v-for="(item, i) in navigationItems" :key="i" :to="item.to" link>
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
      <v-menu :close-on-content-click="menuClose" offset-y max-height="80vh">
        <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-badge overlap dot color="green">
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
        </template>
           <v-list>
            <v-list-item v-for="n in 15" :key="n">
              <v-list-item-avatar>
                <v-img src="https://imgproxy.xopic.de/F1Q76pHTmWqVjzQJZLKQwHnnzRXO1wTZJ2W5MKEks7Q/fit/600/300/ce/false/aHR0cHM6Ly9zMy54/b3BpYy5kZS9vcGVu/c2FwLXB1YmxpYy9j/b3Vyc2VzLzdrMnEw/elhSNkNDbURuTXVC/NVZGZGkvdmlzdWFs/X3YyLmpwZw.jpg"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Lorem ipsum dolor sit amet consectetur adipisicing elit. </v-list-item-title>
                <v-list-item-subtitle v-text="new Date().toLocaleString()"></v-list-item-subtitle>
              </v-list-item-content>
              <v-row justify="end" style="max-width: 60px">
                <v-btn icon small><v-icon>mdi-check</v-icon></v-btn>
                <v-btn icon small><v-icon>mdi-close</v-icon></v-btn>
              </v-row>
            </v-list-item>
          </v-list>
      </v-menu>
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
              <v-list-item v-for="(item,i) in menuItems" :key="i" link dense>
                  <v-list-item-title><v-icon left>{{item.icon}}</v-icon>{{item.text}}</v-list-item-title>
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
        selectedItem: 1,
        mini: false,
        messages: 1,
        menuClose: false,
        navigationItems: [
          { text: 'Home', icon: 'mdi-home', to : { name: 'Home'} },
          { text: 'Chat', icon: 'mdi-message-reply-text', to : { name : 'Messages'} },
          { text: 'Friends', icon: 'mdi-account-group', to : { name : 'Friends'} },
          { text: 'Explore', icon: 'mdi-magnify', to : { name : 'Explore'} }
        ],
        menuItems: [
          { text: 'Profile', icon: 'mdi-account', },
          { text: 'Themes', icon: 'mdi-palette' },
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