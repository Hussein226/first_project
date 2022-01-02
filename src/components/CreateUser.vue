<template>
  <div>
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
                    Create an Account
                  </v-card-title>
                  <v-card-text>
                    <v-text-field
                      v-model="userId"
                      label="Username"                    
                    />
                  </v-card-text>
                  <v-card-text>
                    <v-text-field
                      v-model="userName"
                      label="Display Name"                    
                    />
                  </v-card-text>
                  <v-card-text v-if="accountCreated">
                    <p> Account Created! Return to Login to log into your account </p>
                  </v-card-text>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-card-actions>
                    <v-btn 
                      class="button"
                      rounded
                      @click="createUser(userId,userName)">
                      Create Account
                    </v-btn>
                  </v-card-actions>
                </v-col>
                <v-col>
                  <v-card-actions>
                    <v-btn 
                      class="button"
                      rounded
                      link
                      :to="{path: '/chatroom'}">
                      Back to Login
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
</template>

<script>
import {createUser} from '../services/ChatRoomService'
  export default {
    data() {
      return {
        userId: '',
        userName: '',
        accountCreated: false
      }
    },
    methods: {
      async createUser(userId, userName) {
        let response = await createUser(userId,userName)

        if(response){
          this.accountCreated = true;
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
