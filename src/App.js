import './App.css';
import PostRequest from './components/form';
function App() {
  return (
   <PostRequest/>
  );
}


export default App;



// const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//   const API_KEY = "u2EiEsPgoln52L9pzW8XSMMeG32iHIX9l0FVBlcu1ghm";
  
//   function getToken(errorCallback, loadCallback) {
//     const req = new XMLHttpRequest();
//     req.addEventListener("load", loadCallback);
//     req.addEventListener("error", errorCallback);
//     req.open("POST", "https://iam.cloud.ibm.com/identity/token");
//     req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     req.setRequestHeader("Accept", "application/json");
//     req.send("grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=" + API_KEY);
//   }
  
//   function apiPost(scoring_url, token, payload, loadCallback, errorCallback){
//     const oReq = new XMLHttpRequest();
//     oReq.addEventListener("load", loadCallback);
//     oReq.addEventListener("error", errorCallback);
//     oReq.open("POST", scoring_url);
//     oReq.setRequestHeader("Accept", "application/json");
//     oReq.setRequestHeader("Authorization", "Bearer " + token);
//     oReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//     oReq.send(payload);
//   }

//   getToken((err) => console.log(err), function () {
//    let tokenResponse;
//    try {
//      tokenResponse = JSON.parse(this.responseText);
//    } catch(ex) {
//    // TODO: handle parsing exception
//    }
//  // NOTE: manually define and pass the array(s) of values to be scored in the next line
//  //  const payload = '{"input_data": [{"fields": [array_of_input_fields], "values": [array_of_values_to_be_scored, another_array_of_values_to_be_scored]}]}';
//    const payload = '{"input_data": [{"fields": [6.7,35,25,43,33,2,56,33.2,43], "values": []}]}';
//    const scoring_url = "https://private.us-south.ml.cloud.ibm.com/ml/v4/deployments/water_potability_classifier_v1/predictions?version=2021-05-01";
//    apiPost(scoring_url, tokenResponse.access_token, payload, function (resp) {
//     let parsedPostResponse;
//     try {
//       parsedPostResponse = JSON.parse(this.responseText);
//     } catch (ex) {
//      // TODO: handle parsing exception
//    }
//    console.log("Scoring response");
//    console.log(parsedPostResponse);
//    }, function (error) {
//      console.log(error);
//    });
//   });