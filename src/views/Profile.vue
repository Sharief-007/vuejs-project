<template>
  <v-container class="white" fluid>
  <v-container>
    <v-row>
      <v-col md="3" class="d-flex">
        <v-avatar size="200" class="ma-auto">
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-avatar>
      </v-col>
      <v-col md="9">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title :class="$vuetify.breakpoint.smAndUp ? 'text-h3' : 'text-h5'">Mohammad Sharief Baig</v-list-item-title>
            <v-list-item-subtitle :class="$vuetify.breakpoint.smAndUp ? 'text-h5' : ''">@Mobaig</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon large>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
        <div class="d-flex justify-center">
            <span class="d-flex flex-column align-content-center align-center">
              <span class="text-h3">4</span>
              <v-btn plain>Posts</v-btn>
            </span>
            <span class="d-flex flex-column align-content-center align-center">
              <span class="text-h3">124</span>
              <v-btn plain>Friends</v-btn>
            </span>
            <span class="d-flex flex-column align-content-center align-center">
              <span class="text-h3">43</span>
              <v-btn plain>Requests</v-btn>
            </span>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-tabs centered v-model="tab">
        <v-tab v-for="mytab in tabItems" :key="mytab.tabName">
          <v-icon left v-text="mytab.tabIcon"></v-icon>
          {{ mytab.tabName }}</v-tab>
      </v-tabs>
    </v-row>
    <v-row class="scrollable">
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="mytab,i in tabItems" :key="i">
          <v-container>
            <v-row>
              <v-col v-for="image in images" :key="image" :cols="$vuetify.breakpoint.smAndUp? '3':'6'">
                <v-hover v-slot="{ hover }">
                  <v-card>
                      <v-img :src="image" :style="hover? 'opacity:1':'opacity:0.65'">
                        <v-app-bar color="transparent">
                          <v-spacer></v-spacer>
                          <v-btn icon v-if="hover"><v-icon class="show-btns" color="grey">mdi-open-in-new</v-icon></v-btn>
                        </v-app-bar>
                      </v-img>
                    </v-card>
                  </v-hover>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs-items>
    </v-row>
  </v-container>
  </v-container>
</template>

<script>
export default {
  name: "Profile",
  components: {

  },
  data: ()=>({
    tab: null,
    tabItems: [
      { tabIcon: 'mdi-image', tabName: 'Images'},
      { tabIcon: 'mdi-video', tabName: 'Videos'},
      { tabIcon: 'mdi-tag', tabName: 'Tags'}
    ],
    images: [
        'https://images.wallpaperscraft.com/image/bmw_motorcycle_bike_218674_300x168.jpg',
        'https://images.wallpaperscraft.com/image/roses_bush_bloom_128901_300x168.jpg',
        'https://images.wallpaperscraft.com/image/ktm_1290_super_duke_r_motorcycle_sports_123405_300x168.jpg',
        'https://images.wallpaperscraft.com/image/couple_mountains_travel_125490_300x168.jpg',
        'https://images.wallpaperscraft.com/image/boat_couple_stars_129520_300x168.jpg',
        'https://images.wallpaperscraft.com/image/couple_love_sunset_128678_300x168.jpg',
        'https://images.wallpaperscraft.com/image/roses_garden_bush_121042_300x168.jpg',
        'https://images.wallpaperscraft.com/image/boy_silhouette_sunset_sky_sea_120026_300x168.jpg',
        'https://images.wallpaperscraft.com/image/lightning_thunderstorm_cloudy_126444_300x168.jpg',
        'https://images.wallpaperscraft.com/image/lake_forest_snow_130421_300x168.jpg',
        'https://images.wallpaperscraft.com/image/landscape_mountains_sun_140434_300x168.jpg',
        'https://images.wallpaperscraft.com/image/laptop_keyboard_glow_170138_300x168.jpg',
        'https://images.wallpaperscraft.com/image/camera_photographer_smoke_126548_300x168.jpg',
        'https://images.wallpaperscraft.com/image/christmas_new_year_winter_130938_300x168.jpg',
        'https://images.wallpaperscraft.com/image/santa_claus_reindeer_sleigh_flying_gifts_christmas_68922_300x168.jpg'
    ]
  })
}
</script>

<style scoped>
.scrollable {
  height: calc(100vh - 7rem);
  overflow-y: auto;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;
}
.scrollable::-webkit-scrollbar {
  display: none;
}
.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>