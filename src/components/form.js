import { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault()
    //'{"input_data": [{"fields": ["ph","Hardness","Solids","Chloramines","Sulfate","Conductivity","Organic_carbon","Trihalomethanes","Turbidity"], "values": [[1,2,3,4,5,6,7,8,9]]}]}'
    const requestBody = {
      "input_data": [{"fields": ["ph","Hardness","Solids","Chloramines","Sulfate","Conductivity","Organic_carbon","Trihalomethanes","Turbidity"], "values": [[pH,hardness,solids,chloramines,sulfate,conductivity,organicCarbon,trihalomethanes,turbidity]]}]
    }
    fetch("http://localhost:2000/predict", {
      method: "post",
      body: JSON.stringify(requestBody)
    }).then(response => response.json()).then(data=>{ console.log(data)})
     .catch(err =>{
      console.log(err)
    });

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
