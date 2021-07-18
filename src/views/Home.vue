<template>
  <v-container fluid style="padding: 0;">
    <v-row no-gutters>
      <v-col sm="4" class="scrollable">
        <v-toolbar flat class="py-0" short>
          <v-text-field prepend-inner-icon="mdi-magnify" rounded filled dense class="mt-6"></v-text-field>
          <v-btn icon class="ml-1">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list two-line subheader>
          <v-subheader>Recent chat</v-subheader>
          <v-list-item-group v-model="selected">
            <v-list-item v-for="(item,index) in items" :key="index">
              <v-list-item-avatar>
                <v-img src="https://madewithvuejs.com/mandant/madewithvuejs/images/logo.png"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-text="item.name"></v-list-item-title>
                <v-list-item-subtitle v-text="item.message"></v-list-item-subtitle>
              </v-list-item-content>
              <v-list-action-item>
<!--                <v-list-item-action-text v-text="item.new"></v-list-item-action-text>-->
                <v-badge color="primary" dot></v-badge>
              </v-list-action-item>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col sm="8" class="d-flex flex-column">
        <v-toolbar flat short class="chat-header">
          <v-avatar size="40">
            <v-img src="https://madewithvuejs.com/mandant/madewithvuejs/images/logo.png"></v-img>
          </v-avatar>
          <v-toolbar-title class="pl-1">Mohammad Sharief</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" icon>
                <v-icon>mdi-attachment</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in attachmentItems" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-menu offset-x>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in menuItems" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
        <div class="chat-box">

        </div>
        <v-toolbar flat class="chat-controls">
          <v-text-field dense rounded filled prepend-inner-icon="mdi-emoticon" class="message-field mt-6"></v-text-field>
          <v-btn icon>
            <v-icon>mdi-send</v-icon>
          </v-btn>
        </v-toolbar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default{
  data() {
    return {
      selected: [2],
      menuItems: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ],
      attachmentItems: [
        { title: 'Link' },
        { title: 'Image' },
        { title: 'Video' },
        { title: 'Contact' },
        { title: 'Document' }
      ],
      items: [
        {
          "name": "Jenna Cochran",
          "message": "gravida. Aliquam tincidunt,",
          "new": 91
        },
        {
          "name": "Nita Giles",
          "message": "faucibus lectus, a sollicitudin orci",
          "new": 69
        },
        {
          "name": "Moana Simpson",
          "message": "pellentesque a, facilisis non, bibendum sed,",
          "new": 83
        },
        {
          "name": "Nita Watkins",
          "message": "scelerisque neque.",
          "new": 10
        },
        {
          "name": "Julie Hatfield",
          "message": "egestas. Aliquam nec enim. Nunc ut erat.",
          "new": 20
        },
        {
          "name": "Cleo Ford",
          "message": "Duis",
          "new": 98
        },
        {
          "name": "Yoshi Decker",
          "message": "tempus",
          "new": 14
        },
        {
          "name": "Caryn Moreno",
          "message": "a feugiat tellus lorem eu metus.",
          "new": 93
        },
        {
          "name": "Desirae Mann",
          "message": "justo eu arcu. Morbi",
          "new": 95
        },
        {
          "name": "Bree Chase",
          "message": "placerat.",
          "new": 98
        },
        {
          "name": "Barbara Bryant",
          "message": "ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula.",
          "new": 59
        },
        {
          "name": "Shelby Nguyen",
          "message": "ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet",
          "new": 5
        },
        {
          "name": "Kaitlin Dale",
          "message": "justo. Proin non massa non ante bibendum ullamcorper. Duis cursus,",
          "new": 49
        },
        {
          "name": "Vanna Bentley",
          "message": "porttitor interdum. Sed auctor odio",
          "new": 33
        },
        {
          "name": "Jade Burke",
          "message": "arcu. Vestibulum ut eros non",
          "new": 62
        },
        {
          "name": "Allegra Fischer",
          "message": "eleifend nec, malesuada ut, sem. Nulla",
          "new": 41
        },
        {
          "name": "Adena Barnett",
          "message": "enim, sit amet ornare lectus justo eu arcu. Morbi sit",
          "new": 69
        },
        {
          "name": "Georgia Thomas",
          "message": "non ante bibendum",
          "new": 87
        },
        {
          "name": "Chloe Romero",
          "message": "ac metus vitae velit",
          "new": 76
        },
        {
          "name": "Colleen Bailey",
          "message": "fringilla mi lacinia mattis. Integer eu lacus. Quisque",
          "new": 21
        },
        {
          "name": "Evelyn Diaz",
          "message": "mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla,",
          "new": 83
        },
        {
          "name": "Clio Steele",
          "message": "sed",
          "new": 76
        },
        {
          "name": "Hyacinth Richardson",
          "message": "Nunc lectus",
          "new": 46
        },
        {
          "name": "Zephr Hendrix",
          "message": "aliquet magna a neque. Nullam ut",
          "new": 50
        },
        {
          "name": "Meredith Scott",
          "message": "mollis non, cursus",
          "new": 81
        },
        {
          "name": "Brianna Jacobson",
          "message": "tellus faucibus leo, in lobortis",
          "new": 36
        },
        {
          "name": "Kylie Atkinson",
          "message": "pretium et, rutrum non, hendrerit id, ante. Nunc mauris",
          "new": 57
        },
        {
          "name": "Teagan Robertson",
          "message": "eget odio.",
          "new": 7
        },
        {
          "name": "Irene Kim",
          "message": "vel turpis. Aliquam adipiscing lobortis risus. In",
          "new": 61
        },
        {
          "name": "Larissa Nelson",
          "message": "luctus aliquet",
          "new": 11
        },
        {
          "name": "Ella Wiggins",
          "message": "Mauris molestie pharetra nibh. Aliquam",
          "new": 22
        },
        {
          "name": "Xyla Merrill",
          "message": "purus,",
          "new": 52
        },
        {
          "name": "Myra Donovan",
          "message": "eu dolor egestas rhoncus. Proin nisl sem, consequat nec,",
          "new": 75
        },
        {
          "name": "Kylie Lott",
          "message": "pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus",
          "new": 58
        },
        {
          "name": "Ingrid Hayden",
          "message": "imperdiet dictum magna. Ut tincidunt",
          "new": 100
        },
        {
          "name": "Kaye Pace",
          "message": "Donec feugiat metus sit amet ante. Vivamus non lorem vitae",
          "new": 99
        },
        {
          "name": "Diana Dean",
          "message": "enim. Sed nulla",
          "new": 78
        },
        {
          "name": "Daryl Grimes",
          "message": "lacus. Quisque imperdiet, erat nonummy ultricies ornare,",
          "new": 66
        },
        {
          "name": "Carolyn Stephenson",
          "message": "tristique senectus et netus",
          "new": 59
        },
        {
          "name": "Eleanor Conner",
          "message": "sociis natoque penatibus et magnis dis parturient montes, nascetur",
          "new": 36
        },
        {
          "name": "Carla Hunt",
          "message": "sit amet ornare lectus justo eu arcu. Morbi sit amet",
          "new": 80
        },
        {
          "name": "Athena Mitchell",
          "message": "convallis ligula. Donec",
          "new": 53
        },
        {
          "name": "Iliana Skinner",
          "message": "ipsum primis in",
          "new": 40
        },
        {
          "name": "Paula Kemp",
          "message": "penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin",
          "new": 94
        },
        {
          "name": "Odessa Gaines",
          "message": "arcu. Vivamus sit",
          "new": 62
        }
      ]
    }
  }
}
</script>

<style scoped>
.scrollable {
  overflow-y: auto;
  height: calc(100vh - 3.5rem)
}
.chat-header {
  flex: 0;
}
.chat-controls {
  flex: 0;
}
.chat-box {
  flex: 1;
}
.message-field {
  flex: 1;
}
</style>