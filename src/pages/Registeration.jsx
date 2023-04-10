import FormInput from '../components/FormInput';
import './Register.css'
import { useState } from 'react';


const Registeration = () => {

    const[values,setValues]=useState({
        username:"",
        email:"",
        birthday:"",
        password:"",
        confirmPassword:"",
    });

    const inputs=[
        {
            id:1,
            name:"username",
            type:"text",
            placeholder:"Username",
            label:"Username"
        },
        {
            id:2,
            name:"username",
            type:"text",
            placeholder:"Username",
            label:"Username"
        },

    ]
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        
    };
    return (
    <div className="register">
            <form onSubmit={handleSubmit}>
                {/* props=placeholder */}
                <FormInput name="username" placeholder="Username" />
                <button>Submit</button>

            </form>
        </div>
    );
  
};

export default Registeration