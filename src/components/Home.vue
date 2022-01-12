<template>
  <div>
    <v-form
      @submit="submitForm"
    >
      <v-text-field
        v-model='firstName'
        label='First Name'
      >
      </v-text-field>
      <v-text-field
        v-model='lastName'  
        label='Last Name'
      >
      </v-text-field>
      <v-text-field
        v-model='age'
        label='Age'  
      >
      </v-text-field>
      <v-text-field
        v-model='gender'
        label='Gender'  
      >
      </v-text-field>
      <v-btn
        type="submit"
      >
        Submit Form
      </v-btn>
    </v-form>
  </div>
</template>

<script>
// @ is an alias to /src
import { setUserData } from '../services/BackEndService'
export default {
  name: 'Home',
  data() {
    return {
      firstName: '',
      lastName: '',
      age: '',
      gender: ''
    }
  },
  methods: {
    async submitForm() {
     let requestBody = {
        firstName: this.firstName,
        lastName: this.lastName,
        age: this.age,
        gender: this.gender
      }
      console.log(requestBody)

      try{
        let response = await setUserData(requestBody)

        return response
      }catch(error){
        console.log(error)
      }
      
    }
  }
}
</script>
