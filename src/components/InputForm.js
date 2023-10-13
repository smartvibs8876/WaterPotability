import { useState } from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; 
import Modal from 'react-bootstrap/Modal'; 
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'; 

const InputForm = () => {
  const [pH, setpH] = useState('');
  const [hardness, setHardness] = useState('');
  const [solids, setSolids] = useState('');
  const [chloramines, setChloramines] = useState('');
  const [sulfate, setSulfate] = useState('');
  const [conductivity, setConductivity] = useState('');
  const [organicCarbon, setOrganinCarbon] = useState('');
  const [trihalomethanes, setTrihalomethanes] = useState('');
  const [turbidity, setTurbidity] = useState('');
  const [results,setResults] = useState(null) 

  const handleSubmit = (e) => {
    e.preventDefault()
    const requestBody = {
      "input_data": 
           [
               {
                 "fields": ["ph","Hardness","Solids","Chloramines","Sulfate","Conductivity","Organic_carbon","Trihalomethanes","Turbidity"],
                 "values": [[pH,hardness,solids,chloramines,sulfate,conductivity,organicCarbon,trihalomethanes,turbidity]]
               }
           ]
    }
    console.log(requestBody)
    fetch("http://localhost:2000/predict", {
      method: "post",
      headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json"
      },
      body: JSON.stringify(requestBody)
    }).then(response => response.json()).then(data=>{ 
      //setResults({value1 : "1"})
      setResults(
        {
           prediction: (data.predictions[0].values[0][0])? "Not Potable": "Potable",
           probability: parseFloat(data.predictions[0].values[0][1][0])*100
        });
      console.log(data.predictions[0].values[0][1][0])
    })
     .catch(err =>{
      console.log(err)
    });
  };

  return (
   <React.Fragment> 
      <div>
      <h2 className='text-center'>Water potability test</h2>
        { !results && (
           <form className="form">
             <div className="form-row">
               <label className="form-label">PH</label>
               <input className="" type="text" name="" required="" value={pH} onChange={(e) => setpH(e.target.value)}/> 
             </div>
             <div className="form-row">
               <label classname="form-label">Hardness</label>
               <input type="text" name="" required="" value={hardness} onChange={(e) => setHardness(e.target.value)}/>
             </div>
             <div className="form-row">
               <label className="form-label">Solids</label>
               <input type="text" name="" required="" value={solids} onChange={(e) => setSolids(e.target.value)}/>
             </div>
             <div className="form-row">
               <label className="form-label">Chloramines</label>
               <input type="text" name="" required="" value={chloramines} onChange={(e) => setChloramines(e.target.value)}/>
             </div>
             <div className="form-row">
               <label className='form-label'>Sulfate</label>
               <input type="text" name="" required="" value={sulfate} onChange={(e) => setSulfate(e.target.value)}/>
             </div>
             <div className="form-row">
               <label className="form-label">Conductivity</label>
               <input type="text" name="" required="" value={conductivity} onChange={(e) => setConductivity(e.target.value)}/>
             </div>
             <div className="form-row">
               <label className="form-label">Organic Carbon</label>
               <input type="text" name="" required="" value={organicCarbon} onChange={(e) => setOrganinCarbon(e.target.value)}/>
             </div>
             <div className="form-row">
               <label className="form-label">Trihalomethanes</label>
               <input type="text" name="" required="" value={trihalomethanes} onChange={(e) => setTrihalomethanes(e.target.value)}/>
             </div>
             <div className="form-row">
               <label className="form-row">Turbidity</label>
               <input type="text" name="" required="" value={turbidity} onChange={(e) => setTurbidity(e.target.value)}/>
             </div>
             <Button variant='secondary' type="submit" onClick={handleSubmit}>Predict Water Quality</Button>
          </form>  )
        };
      </div>
      { results &&  
         (<Modal.Dialog> 
          <Modal.Header> 
          <Modal.Title> 
            Water Potability Test
          </Modal.Title> 
         </Modal.Header> 
        <Modal.Body> 
        <p> 
          Water is  {results.prediction} with {results.probability}% confidence 
        </p> 
         </Modal.Body> 
         <Modal.Footer> 
         <Button variant="secondary" onClick={(e) => setResults(null)}> 
          Close 
         </Button> 
        </Modal.Footer> 
        </Modal.Dialog>)
  }
   </React.Fragment>
);
};
export default InputForm;