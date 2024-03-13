import {useState} from 'react'
import '../styles/BmiForm.css'

import Display from './Display';

function BmiForm() {
   
    const [weight,setWeight]=useState('');
    const [height,setHeight]=useState('');
  return (
    <div className="bmiMain">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/010/366/265/small/meter-speedometer-transparent-free-png.png" />
      <h1>BMI Calculator</h1>
      <form onSubmit={onsubmit}>
        <div className="form-group">
      
          <input 
            type="number"
            className="form-control" value={height} onChange={(e)=>{setHeight(e.target.value)}}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Height here"
          />
       
      
        </div>

        <div className="form-group">
       
          <input
            type="number"
            className="form-control" onChange={(e)=>{setWeight(e.target.value)}}
            id="exampleInputPassword1" value={weight}
            placeholder="Weight here"
          />
        </div>

     
        
      </form>
      <div className='testCom'>
      <Display  height={height} weight={weight}/>
      
      </div>
      
    </div>
  );
}

export default BmiForm
