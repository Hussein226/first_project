var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://covid-19-data.p.rapidapi.com/country/code',
  params: {code: 'it'},
  headers: {
    'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
    'x-rapidapi-key': '3e2fb0c89amsh71b78d4dcceb8dep102b2bjsn5db91a6c3cec'
  }
};

const ApiService = {
  firstApiCall: async function (country = 'US') {
    options.params.code = country
    const resp = await axios.request(options)
    return resp
  }
}
export default ApiService;