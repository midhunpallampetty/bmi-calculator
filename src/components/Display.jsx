import React from 'react'
import '../styles/Display.css'
 function Display(props) {
    const {height,weight}=props;
    
    const bmi=weight/(height*height) || 0;
    let result='v ';
    switch(true){
        case bmi < 18.5 && bmi>0:
            result = "Underweight";
            break;
            case bmi >=18.5 && bmi <25:
                result = "Normal";
                break;
                case bmi >=25 && bmi <30:
                result='Overweight';
                break;
                case bmi >=30 && bmi <35:
                    result = "Obese";
                    break;
                    case bmi>35:
                        result='Severely Obese';
                        break;
                        case bmi<0 || bmi !=Number:
                            result='Invalid bmi value';
                            break;
                        default:
                            result='No bmi detected'
    }
    console.log(bmi)
  return (
    <div className='content'>
      <h1 className='result'>bmi {bmi}</h1>
      <p className='remarks' > '{result}'</p>
      
    </div>
  )
}
export default Display;