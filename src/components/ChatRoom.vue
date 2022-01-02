<template>
  <div>
    <div v-if="!loggedIn">
      <v-text-field
        v-model="userIdCreate"
        label="User Id"
      />
      <v-text-field
        v-model="userName"
        label="Name"
      />
      <v-btn
        @click="createUserId(userIdCreate, userName)"
      >
        Create User
      </v-btn>
      <v-text-field
        v-model="userIdLogin"
        label="User Id"
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
      userName: '',
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
    createUserId(userId, name){
      createUser(userId, name);
    }
  },
}
</script>

<style lang="scss" scoped>

</style>