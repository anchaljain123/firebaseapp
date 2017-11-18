import React, {Component} from 'react';
import './signup.css'
import * as firebase from 'firebase';

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            pwd: ''
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    register = () => {
        const auth = firebase.auth();
        auth.createUserWithEmailAndPassword(this.state.email, this.state.pwd)
            .then(data => {
                alert('Successfully signup');
                window.location.assign('/dashboard')
            })
            .catch(err => {
                alert(err.message)
            });
        this.setState({
            email: '',
            pwd: ''
        })
    };

    render() {
        return (
            <div>
                <h1>Signup Form</h1>
                <label>Enter EMAILID: </label>
                <input type='email' name={'email'} value={this.state.email} id={'emailid'}
                       onChange={this.changeHandler}/><br/>
                <label>Enter PASSWORD: </label>
                <input type='password' name={'pwd'} value={this.state.pwd} id={'pwdid'} onChange={this.changeHandler}/>
                <br/>
                <input type={'submit'} onClick={this.register} value={'signup'}/> <br/>
                <br/>
                Already a User? <a href={'/login'}>Login here</a>
            </div>
        )
    }
}

export default Signup;