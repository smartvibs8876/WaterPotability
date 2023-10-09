import { useState } from 'react';
import axios from 'axios';
const url = 'https://private.us-south.ml.cloud.ibm.com/ml/v4/deployments/water_potability_classifier_v1/predictions?version=2021-05-01';
const apiKey = 'u2EiEsPgoln52L9pzW8XSMMeG32iHIX9l0FVBlcu1ghm';

const PostRequest = () => {
  const [pH, setpH] = useState('');
  const [hardness, setHardness] = useState('');
  const [solids, setSolids] = useState('');
  const [chloramines, setChloramines] = useState('');
  const [sulfate, setSulfate] = useState('');
  const [conductivity, setConductivity] = useState('');
  const [organicCarbon, setOrganinCarbon] = useState('');
  const [trihalomethanes, setTrihalomethanes] = useState('');
  const [turbidity, setTurbidity] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    // try {
    //   const config = { 'content-type': 'application/x-www-form-urlencoded', 'accept': 'application/json' };
    //   const { data } = await axios(url, config, "grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=" + apiKey);
    //   console.log(data)
    // } catch (error) {
    //     console.log(error.response);
    // }
    fetch("https://iam.cloud.ibm.com/identity/token?grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=u2EiEsPgoln52L9pzW8XSMMeG32iHIX9l0FVBlcu1ghm", {
      method: "post",
      mode: "no-cors"
    })
    .then( (response) => { 
    console.log(response.text())
  });
  //   const response = fetch("https://iam.cloud.ibm.com/identity/token?grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=u2EiEsPgoln52L9pzW8XSMMeG32iHIX9l0FVBlcu1ghm", {
  //   method: "POST",
  //   headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/x-www-form-urlencoded"
  //   },
  //   body: JSON.stringify({})
  // })
  // const response = fetch("https://iam.cloud.ibm.com/identity/token", {
  //   method: "POST",
  //   mode: "no-cors",
  //   headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/x-www-form-urlencoded"
  //   },
  //   body: JSON.stringify({
  //     grant_type: "urn:ibm:params:oauth:grant-type:apikey",
  //     apikey: "u2EiEsPgoln52L9pzW8XSMMeG32iHIX9l0FVBlcu1ghm"
  //   })
  // })
    //console.log(response.json())
    // Authorization: `Bearer: ${token}`,
    console.log(pH, hardness,solids,  chloramines,  sulfate, conductivity,  organicCarbon, trihalomethanes, turbidity);
  };

  return (
    <section>
      <h2 className='text-center'>Water potability test</h2>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='pH' className='form-label'>
            pH
          </label>
          <input
            type='text'
            className='form-input'
            id='pH'
            value={pH}
            onChange={(e) => setpH(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='hardness' className='form-label'>
            Hardness
          </label>
          <input
            type='text'
            className='form-input'
            id='pH'
            value={hardness}
            onChange={(e) => setHardness(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='solids' className='form-label'>
            Solids
          </label>
          <input
            type='text'
            className='form-input'
            id='pH'
            value={solids}
            onChange={(e) => setSolids(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='chloramines' className='form-label'>
            Chloramines
          </label>
          <input
            type='text'
            className='form-input'
            id='pH'
            value={chloramines}
            onChange={(e) => setChloramines(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='sulphates' className='form-label'>
            Sulphates
          </label>
          <input
            type='text'
            className='form-input'
            id='pH'
            value={sulfate}
            onChange={(e) => setSulfate(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Conductivity
          </label>
          <input
            type='text'
            className='form-input'
            id='pH'
            value={conductivity}
            onChange={(e) => setConductivity(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Organic Carbon
          </label>
          <input
            type='text'
            className='form-input'
            id='pH'
            value={organicCarbon}
            onChange={(e) => setOrganinCarbon(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Trihalomethanes
          </label>
          <input
            type='text'
            className='form-input'
            id='pH'
            value={trihalomethanes}
            onChange={(e) => setTrihalomethanes(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Turbidity
          </label>
          <input
            type='text'
            className='form-input'
            id='pH'
            value={turbidity}
            onChange={(e) => setTurbidity(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          Check Potability
        </button>
      </form>
    </section>
  );
};
export default PostRequest;
