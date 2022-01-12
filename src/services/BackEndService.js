var axios = require("axios").default;

export async function setUserData(body){

  try{
    console.log(body)
    const response = await axios.post('http://localhost:8080/setUserData', body,{
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
      }
    })
    return response;
  }catch(error){
    console.log(error.response)
    return error.response
  }
}