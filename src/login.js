import React, {Component} from 'react';
import './signup.css'
import * as firebase from 'firebase';


class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            pwd: ''
        };
        firebase.auth().getRedirectResult().then(result =>{
            if (result.credential) {
                var token = result.credential.accessToken;
            }
            var user = result.user;
            if(user){
                window.location.assign('/dashboard')
            }

        }).catch(err=>{
            alert(`error ${err.message}`)
        })
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    signIn = () => {
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(this.state.email, this.state.pwd);
        promise.then(data =>{
            this.setState({
            })
        });
        promise.catch(err => {
            alert(err.message)
        });
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                alert(`Successfully login`);
                window.location.assign('/dashboard')
            }
        });
        this.setState({
            email: '',
            pwd: '',
        })
    };

    googleSignIn = () => {
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).catch(err=>{
            alert(`error ${err.message}`)
        }).then(data=>{
            alert('successfully login through google plus');
            window.location.assign('/dashboard')
        })
    };

    googleRedirect = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        var promise = firebase.auth().signInWithRedirect(provider);
        this.setState({
            email: '',
            pwd: '',
        })

    };

    render() {
        return (
            <div>
                <h1>Login Form</h1>
                <label>Enter EMAILID : </label>
                <input type='email' name={'email'} placeholder={'enter your email'} value={this.state.email} id={'emailid'} onChange={this.changeHandler}/>
                <br/>
                <label>Enter PASSWORD : </label>
                <input type='password' name={'pwd'} placeholder={'enter your password'} value={this.state.pwd} id={'pwdid'} onChange={this.changeHandler}/>
                <br/>
                <input type={'submit'} onClick={this.signIn} value={'Login'}/>
                <input type={'submit'} onClick={this.googleSignIn} value={'google+'}/>
                <input type={'submit'} onClick={this.googleRedirect} value={'googleRedirect'}/>
                <br/><br/>
                Not a user ? <a href={'/'}>Register now</a>
            </div>
        )
    }
}

export default Login;