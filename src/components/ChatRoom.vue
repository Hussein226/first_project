<template>
  <div>
    <div v-if="!loggedIn">
      <v-text-field
        v-model="userIdCreate"
      />
      <v-btn
        @click="createUserId(userIdCreate)"
      >
        Create User
      </v-btn>
      <v-text-field
        v-model="userIdLogin"
      />
      <v-btn
        @click="logUser(userIdLogin)"
      >
        Login
      </v-btn>
    </div>
    <div v-else>
      <CometChatUI/>
    </div>
  </div>
</template>

<script>
import { CometChatUI } from "../../cometchat-pro-vue-ui-kit/CometChatWorkspace/src";
import {initChatRoom, login, createUser} from '../services/ChatRoomService'
export default {
  name: 'ChatRoom',
  components: {
    CometChatUI,
  },
  data() {
    return {
      userIdLogin: '',
      userIdCreate:'',
      loggedIn: false
    }
  },
  beforeMount () {
    initChatRoom();
  },
  methods: {
    logUser(userId) {
      login(userId)
      this.loggedIn=true;
    },
    createUserId(userId){
      createUser(userId);
    }
  },
}
</script>

<style lang="scss" scoped>

</style>