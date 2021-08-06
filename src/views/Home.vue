<template>
  <v-container>
    <v-row class="full-height">
      <v-col cols="12" sm="2">
        <v-sheet rounded="lg" min-height="100" class="red">
          
        </v-sheet>
        <v-sheet rounded="lg" min-height="100" class="my-3 d-none d-sm-block">
          
        </v-sheet>
      </v-col>

      <v-col cols="12" sm="8" class="scrollable">
        <v-sheet v-for="n in 10" :key="n" min-height="70vh" rounded="lg" class="mb-3">
          <!--  -->
        </v-sheet>
      </v-col>

      <v-col cols="12" sm="2">
        <v-sheet rounded="lg" min-height="268" class="green">
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
            links: [
                'Dashboard',
                'Messages',
                'Profile',
                'Updates',
            ],
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