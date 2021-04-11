import React from 'react';
import './Login.css';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';


export default function Login() {
    return (
        <div className="login">
                <form>
                    <div className="login__textinput">
                        <TextField id="outlined-basic" label="Email" variant="outlined" className="login__text"/>
                        <TextField id="outlined-basic" label="Password" variant="outlined" type="password" className="login__text"/>
                        <Button variant="contained" color="primary">
                            Secondary
                        </Button>
                    </div>
                </form>
        </div>
    )
}
