<template>
  <v-container>
    <v-row class="full-height">
      <v-col cols="12" sm="2" class="d-none d-sm-block">
        <v-sheet rounded="lg" min-height="268">

        </v-sheet>
        <v-sheet rounded="lg" min-height="268" class="my-3">

        </v-sheet>
      </v-col>

      <v-col cols="12" sm="8" class="scrollable">
        <v-card class="mx-auto mb-3" v-for="n in 10" :key="n">
          <v-list dense>
<!--          <v-card-title>-->
<!--            <v-avatar size="35" left>-->
<!--              <v-img  alt="" src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-img>-->
<!--          </v-avatar>-->
<!--            <span class="text-h6 text-light">John Doe</span>-->
            <v-list-item>
              <v-list-item-avatar>
                <v-img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>John Doe</v-list-item-title>
                <v-list-item-subtitle>Amsterdam</v-list-item-subtitle>
              </v-list-item-content>
          <v-spacer></v-spacer>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on"><v-icon>mdi-dots-vertical</v-icon></v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index" link>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
<!--      </v-card-title>-->
            </v-list-item>
          </v-list>
<!--      <v-card-text class="text-h5 font-weight-bold">-->
<!--      <v-card-text>-->
        <v-hover v-slot="{ hover }">
          <v-carousel touch="true" show-arrows-on-hover :hide-delimiters="!hover">
            <v-carousel-item v-for="(color,i) in colors" :key="i" :src="color">
<!--            <v-img :src="color" max-height="100%" max-width="100%"></v-img>-->
            </v-carousel-item>
            <v-carousel-item>
              <video height="100%" width="100%" autoplay loop src="https://vod-progressive.akamaized.net/exp=1628547960~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1006%2F13%2F330033045%2F1295489177.mp4~hmac=75e7cfe075e8e9d469f65d868e69fdfd1fcb01197008e5cd6dca30553632da06/vimeo-prod-skyfire-std-us/01/1006/13/330033045/1295489177.mp4?download=1&filename=Pexels+Videos+2141798.mp4"></video>
            </v-carousel-item>
          </v-carousel>
        </v-hover>
<!--      </v-card-text>-->
      <v-card-actions>
        <div>
            <v-btn icon class="mr-1"><v-icon>mdi-heart</v-icon></v-btn>
            <span class="subheading mr-2">256</span>
            <span class="mr-1">·</span>
            <v-btn icon class="mr-1"><v-icon> mdi-message-outline</v-icon></v-btn>
            <span class="subheading">45</span>
        </div>
      </v-card-actions>
    </v-card>
  </v-col>

  <v-col cols="12" sm="2" class="d-none d-sm-block">
    <v-sheet rounded="lg" min-height="268">
      <!--  -->
    </v-sheet>
  </v-col>
</v-row>
</v-container>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            links: ['Dashboard','Messages','Profile','Updates'],
            items: [{ title: 'Click Me' },{ title: 'Click Me' },{ title: 'Click Me' },{ title: 'Click Me 2' },],
            colors: [
              'https://images.pexels.com/photos/6373757/pexels-photo-6373757.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
              'https://images.pexels.com/photos/8769659/pexels-photo-8769659.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
              'https://images.pexels.com/photos/2387660/pexels-photo-2387660.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
              'https://images.pexels.com/photos/3082731/pexels-photo-3082731.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
            ]
        }
    }
}
</script>

<style scoped>
.scrollable {
  max-height: 100vh;
  overflow-y: auto;
}

.scrollable::-webkit-scrollbar {
  display: none;
}

.full-height {
  max-height: 100vh;
  overflow: hidden;
}
</style>