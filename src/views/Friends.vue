<template>
  <v-card class="rootView">
    <v-tabs v-model="tab" centered>
      <v-tabs-slider></v-tabs-slider>
      <v-tab href="#tab-1"><v-icon left small>mdi-account-group</v-icon>Friends</v-tab>
      <v-tab href="#tab-2"><v-icon left small>mdi-account-clock</v-icon>Requests</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item :value="friendsTab" class="scrollable">
        <v-container>
          <v-row>
            <v-col lg="4" v-for="n in 10" :key="n">
              <v-card>
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title class="text-h5">Halcyon Days</v-card-title>
                    <v-card-subtitle>Ellie Goulding</v-card-subtitle>
                    <v-card-actions>
                      <v-btn class="ml-2 mt-2" text color="primary">Message</v-btn>
                        <v-menu>
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn class="ml-2 mt-2" v-bind="attrs" v-on="on" icon><v-icon>mdi-dots-vertical</v-icon></v-btn>
                          </template>
                          <v-list dense>
                            <v-list-item link>
                              <v-list-item-title><v-icon left>mdi-eye</v-icon>View Profile</v-list-item-title>
                            </v-list-item>
                            <v-list-item link>
                              <v-list-item-title><v-icon left>mdi-account-remove</v-icon>Remove</v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-menu>
                    </v-card-actions>
                  </div>
                  <v-avatar class="ma-3" size="110">
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                  </v-avatar>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
      <v-tab-item :value="requestsTab" class="scrollable">
        <v-container>
          <v-row>
            <v-col lg="4" v-for="n in 7" :key="n">
              <v-card>
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title class="text-h5">Halcyon Days</v-card-title>
                    <v-card-subtitle>Ellie Goulding</v-card-subtitle>
                    <v-card-actions>
                      <v-btn class="ml-2 mt-2" text color="primary">Confirm</v-btn>
                      <v-btn class="ml-2 mt-2" text color="error">Delete</v-btn>
                    </v-card-actions>
                  </div>
                  <v-avatar class="ma-3" size="110">
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                  </v-avatar>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
export default {
  name: "Friends",
  data() {
    return {
      tab : null,
      friendsTab: 'tab-1',
      requestsTab: 'tab-2',
      text: 'lorem'
    }
  }
}
</script>

<style scoped>
.rootView {
  width: 100%;
  height: 100%;
}
.scrollable {
  width: 100%;
  height: calc(100vh - 7rem);
  overflow-y: auto;
}
</style>