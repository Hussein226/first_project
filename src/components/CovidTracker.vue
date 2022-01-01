<template>
  <v-container fluid>
    <v-row>
      <v-col/>
      <v-col cols = "4">
        <v-select
          v-model="countrySelect"
          label="Select a Country"
          :items="allCountries"
          item-text="name"
          item-value="code"
          @change="getCompanyByCountryCode(countrySelect)"
          class="mx-auto"
        />
      </v-col>
      <v-col/>
    </v-row>
    <v-row>
      <v-col>
        <v-card 
          class="mx-auto"
          max-width="350"
        >
          <v-card-text>
            <p> {{ selectedCountryInfo.country }} </p>
            <p>Confirmed: {{selectedCountryInfo.confirmed}}</p>
            <p>Deaths: {{selectedCountryInfo.deaths}}</p>
            <p>Recovered: {{selectedCountryInfo.recovered}}</p>
            <p>Critical: {{selectedCountryInfo.critical}}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ApiService from '../services/ApiService'
export default {
  name: 'CovidTracker',

  mounted () {
    this.someVariable = this.getCompanyByCountryCode();
    this.allCountries = require('country-list').getData();
  },
  data: () => ({
    someVariable: [],
    countrySelect: '',
    allCountries: [],
    selectedCountryInfo: {
      country: '',
      confirmed: '',
      deaths: '',
      recovered: '',
      critical: ''
    }
  }),
  methods: {
    async getCompanyByCountryCode (country = 'USA') {
    const resp = await ApiService.firstApiCall(country)
    this.someVariable = resp.data;
    this.selectedCountryInfo.country = this.someVariable[0].country;
    this.selectedCountryInfo.confirmed = this.numberWithCommas(this.someVariable[0].confirmed);
    this.selectedCountryInfo.deaths = this.numberWithCommas(this.someVariable[0].deaths);
    this.selectedCountryInfo.recovered = this.numberWithCommas(this.someVariable[0].recovered);
    this.selectedCountryInfo.critical = this.numberWithCommas(this.someVariable[0].critical);
    },
    numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
}
</script>

<style>


</style>
