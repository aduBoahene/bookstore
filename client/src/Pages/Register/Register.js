import axios from 'axios';
import React, {Component, useState} from 'react';
import './Register.css'


function Register() {

     const [firstname, setFirstname] = useState("")
     const [lastname, setLastname] = useState("")
     const [password, setPassword] = useState("")
     const [phone, setPhone] = useState("")
     const [email, setEmail] = useState("")

     const [profile_picture, setProfile_picture] = useState(null)

     const handleImageChange=(e)=>{
        setProfile_picture(e.target.files[0])
     }

     const handleFirstnameChange=(e)=>{
         setFirstname(e.target.value)
    }

    const handleLastnameChange=(e)=>{
        setLastname(e.target.value)
   }

   const handlePhoneChange=(e)=>{
    setPhone(e.target.value)
    }

   const handleEmailChange=(e)=>{
    setEmail(e.target.value)
    }

   const handlePasswordChange=(e)=>{
    setPassword(e.target.value)
    }


    const SignUp=(e)=>{
        e.preventDefault()

     
        const data = new FormData();
        data.append('firstname', firstname)
        data.append('lastname', lastname)
        data.append('phone', phone)
        data.append('email', email)
        data.append('password', password)
        data.append('profile_picture', profile_picture)

        console.log("to be sent",data)


        axios.post('http://localhost:8000/register',data)
          .then((response) => {
            console.log("response",response);
          }, (error) => {
            console.log("error",error);
          });





    }

  
        return (
            <div className="register">
                <form onSubmit={SignUp}>
                        <div className="login__textinput">
                            <div className="register__names">
                                <input 
                                id="outlined-basic" 
                                label="firstname" 
                                variant="outlined" 
                                className="login__text"
                                name="firstname"
                                value={firstname}
                                onChange={handleFirstnameChange}
                                />
                                <input 
                                id="outlined-basic" 
                                label="lastname" 
                                variant="outlined"  
                                className="login__text"
                                name="lastname"
                                value={lastname}
                                onChange={handleLastnameChange}
                                />
                            </div>

                            <div className="register__names">
                                <input 
                                id="outlined-basic" 
                                label="Email" 
                                type="email" 
                                variant="outlined" 
                                className="login__text"
                                name="email"
                                value={email}
                                onChange={handleEmailChange}
                                />
                                <input 
                                id="outlined-basic" 
                                label="Phone" 
                                variant="outlined" 
                                type="number" 
                                className="login__text"
                                name="phone"
                                value={phone}
                                onChange={handlePhoneChange}
                                />
                            </div>
                        
                            <div className="register__names">
                                <input 
                                id="outlined-basic" 
                                label="Password" 
                                variant="outlined" 
                                type="password" 
                                className="login__text"
                                name="password"
                                value={password}
                                onChange={handlePasswordChange}/>
                                <input 
                                id="outlined-basic" 
                                label="Select Profile Picture" 
                                variant="outlined" 
                                type="file" 
                                className="login__text"
                                onChange={handleImageChange}
                                />
                            </div>

                            <button type="submit">
                                Save
                            </button>
                        </div>
                    </form>
            </div>
        )

    }

    export default Register;

