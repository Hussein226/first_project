<template>
  <div>
    <div v-if="!loggedIn">
      <v-form>
        <v-container>
          <v-row>
            <v-col>
            </v-col>
            <v-col cols="6">
              <v-card
                outlined
                elevation="2"
              >
              <v-row>
                <v-col>
                  <v-card-title>
                    Login
                  </v-card-title>
                  <v-card-text>
                    <v-text-field
                      v-model="userIdLogin"
                      label="User Id"                    
                    />
                  </v-card-text>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-card-actions>
                    <v-btn 
                      class="button"
                      rounded
                      @click="logUser(userIdLogin)">
                      Login
                    </v-btn>
                  </v-card-actions>
                </v-col>
                <v-col>
                  <v-card-actions>
                    <v-btn 
                      class="button"
                      rounded
                      link
                      :to="{path: '/createUser'}">
                      Create Account
                    </v-btn>
                  </v-card-actions>
                </v-col>
              </v-row>
              </v-card> 
            </v-col>
            <v-row>
            </v-row>
          </v-row>  
        </v-container>
      </v-form>
    </div>
    <div 
      class= "chatContainer"
      v-else>
      <CometChatUI/>
    </div>
  </div>
</template>

<script>
import { CometChatUI } from "../../cometchat-pro-vue-ui-kit/CometChatWorkspace/src";
import {initChatRoom, login} from '../services/ChatRoomService'
export default {
  name: 'ChatRoom',
  components: {
    CometChatUI
  },
  data() {
    return {
      userIdLogin: '',
      userIdCreate:'',
      userName: '',
      loggedIn: false
    }
  },
  beforeMount () {
    initChatRoom();
  },
  methods: {
    async logUser(userId) {
      let response = await login(userId)
      console.log(response)
      this.loggedIn=response;
    }
  },
}
</script>

<style lang="scss" scoped>

.chatContainer {
  height: 750px
}

.button{
  width: 175px;
}
</style>