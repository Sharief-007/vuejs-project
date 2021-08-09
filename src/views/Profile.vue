<template >
  <v-container class="white">
      <!-- <v-row>
      <v-col xs="3" align-self="center">
          <v-avatar size="200">
            <v-img src="https://images.pexels.com/photos/7993925/pexels-photo-7993925.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></v-img>
          </v-avatar>
      </v-col>
      <v-col xs="9">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h3">Mohammad Sharief Baig</v-list-item-title>
              <v-list-item-subtitle class="text-h6">@Mobaig</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
      </v-col>
    </v-row> -->
    <v-list>
      <v-list-item>
        <v-list-item-avatar size="200">
          <v-img src="https://images.pexels.com/photos/7993925/pexels-photo-7993925.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></v-img>
          </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="text-h2">Mohammad Sharief Baig</v-list-item-title>
          <v-list-item-subtitle class="text-h6">@Mobaig</v-list-item-subtitle>
          <div>
            <v-btn class="ontop">
              <span class="text-h4">117</span>
              <span>Friends</span>
            </v-btn>
          </div>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon large><v-icon>mdi-pencil</v-icon></v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-tabs centered>
      <v-tab>Images</v-tab>
      <v-tab>Videos</v-tab>
      <v-tab>Tags</v-tab>
    </v-tabs>
</v-container>
</template>

<script>
export default {
  name: "Profile"
}
</script>

<style scoped>
.v-btn__content{
  display: flex;
  flex-direction: column;
}
</style>