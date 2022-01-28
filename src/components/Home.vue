<template>
<div class="form">
  <v-flex>
    <v-form
      @submit="submitForm"
      validate
    >
      <v-text-field
        v-model='firstName'
        label='First Name'
        :rules="firstNameRules"
        required
      >
      </v-text-field>
      <v-text-field
        v-model='lastName'  
        label='Last Name'
        :rules="lastNameRules"
        required
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
  </v-flex>

   <v-snackbar 
      v-model="displaySnackBar"
      text
    >
     Success
  </v-snackbar>
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
      gender: '',
      firstNameRules: [
        v => !!v || 'Enter a first name'
      ],
      lastNameRules: [
        v => !!v || 'Enter a last name'
      ],
      ageRule: [
        v => !!v || 'Enter your age',

      ],
      displaySnackBar: false
    }
  },
  methods: {
    async submitForm() {
      this.$ref.form.validate()
     let requestBody = {
        firstName: this.firstName,
        lastName: this.lastName,
        age: this.age,
        gender: this.gender
      }
      console.log(requestBody)

      try{
        let response = await setUserData(requestBody)
        this.displaySnackBar = true;
        return response
      }catch(error){
        console.log(error)
      }
      
    }
  }
}
</script>

<style scoped>
  .form {
    width: 70%;
    display: flex;
    justify-content: center;
    margin: auto;
  }
  @media (min-width: 600px) {
    .form {
      width: 50%;
    }
  }
</style>
