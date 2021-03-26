import React,{useState} from 'react'
import FormSignup from './FormSignUp'
import FormSuccess from './FormSuccess'
import './Form.css'

const Form =()=>{
    const [isSubmitted,setIsSubmitted]=useState(false)
    function submitForm(){
        setIsSubmitted(true)
    }
    return(
        <>
        <div className="form-container">
            <span className="close-btn">x</span>
            <div className="form-content-left">
                <img src="img/catena.PNG" alt="spaceship"
                className="form-img"/>
            </div>
            
            {!isSubmitted?<FormSignup submitForm = {submitForm}/> : <FormSuccess/>}
       
            </div> 
        </>       
    );
};

export default Form