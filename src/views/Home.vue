<template>
  <v-container>
    <v-row class="full-height">
      <v-col cols="12" sm="2">
        <v-sheet rounded="lg" min-height="268">

        </v-sheet>
        <v-sheet rounded="lg" min-height="268" class="my-3 d-none d-sm-block">

        </v-sheet>
      </v-col>

      <v-col cols="12" sm="8" class="scrollable">
        <v-card class="mx-auto mb-3" v-for="n in 10" :key="n">
          <v-card-title>
            <v-avatar size="35" left>
              <v-img class="elevation-6" alt="" src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-img>
          </v-avatar>
          <span class="text-h6 text-light">John Doe</span>
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
      </v-card-title>
      <v-card-text class="text-h5 font-weight-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur ipsa assumenda saepe veniam officia vitae beatae iusto voluptatum, doloribus distinctio nobis officiis pariatur ipsum iste quos tempora voluptates rerum voluptate!</v-card-text>
      <v-card-actions>
        <!-- <v-list-item class="grow">
          <v-list-item-avatar color="grey darken-3">
            <v-img class="elevation-6" alt="" src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Evan You</v-list-item-title>
          </v-list-item-content>
          <v-row align="center" justify="end">
            <v-btn icon class="mr-1"><v-icon>mdi-heart</v-icon></v-btn>
            <span class="subheading mr-2">256</span>
            <span class="mr-1">·</span>
            <v-btn icon class="mr-1"><v-icon> mdi-share-variant</v-icon></v-btn>
            <span class="subheading">45</span>
          </v-row>
        </v-list-item> -->
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

  <v-col cols="12" sm="2">
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