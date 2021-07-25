<template>
  <v-container fluid style="padding: 0;">
    <v-row no-gutters>
      <v-col sm="4" :class="listClass">
        <v-toolbar flat class="py-0" short >
          <v-text-field prepend-inner-icon="mdi-magnify" rounded filled dense class="mt-6"></v-text-field>
          <v-btn icon class="ml-1" @click="myWatch = !myWatch">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list two-line subheader class="scrollable">
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
      <v-col sm="8" :class="chatClass">
        <v-toolbar flat short class="chat-header">
          <v-avatar size="40">
            <v-img src="https://madewithvuejs.com/mandant/madewithvuejs/images/logo.png"></v-img>
          </v-avatar>
          <v-toolbar-title class="pl-1">Mohammad Sharief</v-toolbar-title>
          <v-progress-linear :active="progress" absolute bottom indeterminate color="primary"></v-progress-linear>
          <v-spacer></v-spacer>
          <v-speed-dial direction="bottom">
            <template v-slot:activator>
              <v-btn icon>
                <v-icon>
                  mdi-attachment
                </v-icon>
              </v-btn>
            </template>
            <v-btn fab dark small color="green" >
              <v-icon>mdi-image</v-icon>
            </v-btn>
            <v-btn fab dark small color="indigo" >
              <v-icon>mdi-music</v-icon>
            </v-btn>
            <v-btn fab dark small color="red">
              <v-icon>mdi-video</v-icon>
            </v-btn>
            <v-btn fab dark small color="blue" >
              <v-icon>mdi-file</v-icon>
            </v-btn>
          </v-speed-dial>
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
          <div v-for="(item) in messageItems" :class="item.sent? 'message-sent':'message-received'" :key="item.id">
            <div :class="item.sent? 'message-sent-content':'message-received-content'">{{item.message}}</div>
          </div>
        </div>
        <v-toolbar flat class="chat-controls">
          <v-btn icon>
            <v-icon>mdi-emoticon</v-icon>
          </v-btn>
          <v-text-field dense rounded filled class="message-field mt-6"></v-text-field>
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
  name: 'Messages',
  watch: {
    myWatch() {
      // if (this.$route.path === '/') {
      if (this.myWatch === true){
        this.listClass = ''
        this.chatClass = 'flex-column d-none d-sm-flex'
      } else {
        this.listClass = 'd-none d-sm-block'
        this.chatClass = 'd-flex flex-column'
      }
    }
  },
  data() {
    return {
      myWatch : false,
      listClass: '',
      chatClass: 'flex-column d-none d-sm-flex',
      selected: [2],
      progress: false,
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
      ],
      messageItems: [
        {
          "id": "302C3273-541D-ADDD-7844-EFEDD8DE4EFB",
          "message": "molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque.",
          "sent": true
        },
        {
          "id": "6F10B232-ADB3-F989-936C-5DC2D0576CC6",
          "message": "ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae",
          "sent": false
        },
        {
          "id": "403EAE82-2736-003A-9C7C-C7355ED0D387",
          "message": "eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante",
          "sent": true
        },
        {
          "id": "EBB4BE7B-60EF-332C-A28B-28335F8F481C",
          "message": "facilisis non, bibendum sed,",
          "sent": false
        },
        {
          "id": "0348288F-2DD4-93CF-88F6-76BC9CA045E5",
          "message": "in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus ornare. Fusce mollis. Duis sit amet diam",
          "sent": true
        },
        {
          "id": "18926D66-D27A-BFB3-C5F5-A99171668F71",
          "message": "fames ac turpis egestas. Aliquam",
          "sent": false
        },
        {
          "id": "79ABA225-E7CB-B65A-E87C-B4D0A4587905",
          "message": "egestas nunc sed libero. Proin",
          "sent": true
        },
        {
          "id": "749D12EC-6DFB-B4CB-A53B-DB9F69F64411",
          "message": "fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam",
          "sent": true
        },
        {
          "id": "28C0B7D1-9233-7DA9-E4D5-0835710CE6F3",
          "message": "at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus",
          "sent": true
        },
        {
          "id": "ACA73286-AB44-9306-7FD8-747C04AE469B",
          "message": "dictum eleifend, nunc risus varius orci, in consequat enim diam vel arcu. Curabitur ut odio vel est tempor",
          "sent": false
        },
        {
          "id": "F16A19A0-23E8-8D2C-C7B3-67700F3E00B5",
          "message": "ultrices",
          "sent": true
        },
        {
          "id": "8E3F418E-F264-DE67-9F9D-980401FED879",
          "message": "lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus",
          "sent": false
        },
        {
          "id": "64A1B8D6-0593-BE6E-1D9F-8BD1EB5B6AAD",
          "message": "sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio,",
          "sent": false
        },
        {
          "id": "F0172383-201E-4A34-EB79-1C2C8D42ACBA",
          "message": "vitae purus gravida sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales.",
          "sent": false
        },
        {
          "id": "70E43831-709A-6A19-2923-9EFF6817C5AE",
          "message": "sagittis augue, eu tempor erat",
          "sent": true
        },
        {
          "id": "608CAD57-3857-4197-FF2B-84ABB6B144BE",
          "message": "lobortis tellus justo",
          "sent": false
        },
        {
          "id": "C7C924B9-DDDC-ACEC-C48D-030F92BD3965",
          "message": "pede. Nunc sed orci lobortis augue scelerisque",
          "sent": true
        },
        {
          "id": "58857F54-0BA6-61B7-CF1E-315751F044AE",
          "message": "id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu",
          "sent": true
        },
        {
          "id": "73CC0033-74D9-B553-C5C1-98DAF007C62B",
          "message": "eget tincidunt dui augue",
          "sent": false
        },
        {
          "id": "5FBB9297-A394-CFD8-CD12-733C077C8573",
          "message": "bibendum ullamcorper. Duis cursus, diam at",
          "sent": true
        },
        {
          "id": "2BAEEDF5-372C-4208-CE11-FA3742CA2A87",
          "message": "erat",
          "sent": true
        },
        {
          "id": "09372D2D-316D-6315-CFEB-D704B5A444CB",
          "message": "Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non",
          "sent": true
        },
        {
          "id": "D0CCBC57-1A44-F7C1-1412-BFE8DD7EFC9D",
          "message": "magnis",
          "sent": false
        },
        {
          "id": "EE6919DE-0BD8-3480-1C04-EDF57FE8D0F8",
          "message": "pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida",
          "sent": true
        }
      ]
    }
  }
}
</script>

<style scoped>

.scrollable {
  overflow-y: auto;
  height: calc(100vh - 7rem);
  scrollbar-width: thin;
}
.chat-header {
  flex: 0;
}
.chat-controls {
  flex: 0;
}
.chat-box {
  flex: 1;
  overflow-y: auto;
  background: white;
  min-height: calc(100vh - 11rem);
  max-height: calc(100vh - 11rem);
  padding: 0 10px;
}
.message-field {
  flex: 1;
}

.message-sent {
  padding: 5px;
	display: grid;
	grid-template-columns: 85%;
	justify-items: end;
  border-radius: 15px 0 15px 15px;
  justify-content: end;
}
.message-received {
  padding: 5px;
	display: grid;
	grid-template-columns: 85%;
  justify-items: start;
  border-radius: 0px 15px 15px 15px;
}
.message-sent-content {
  border-radius: 15px 15px 0px 15px;
  background-color: #0275d8;
  color: white;
  padding: 5px 10px;
}
.message-received-content {
  border-radius: 0px 15px 15px 15px;
  background-color: #f7f7f7;
  padding: 5px 10px;
}

.chat-box::-webkit-scrollbar-track
{
	border-radius: 7px;
	background-color: #F5F5F5;
}
.chat-box::-webkit-scrollbar
{
	width: 7px;
	background-color: #F5F5F5;
}
.chat-box::-webkit-scrollbar-thumb
{
	border-radius: 7px;
	background-color: #d3d3d3;
}
</style>