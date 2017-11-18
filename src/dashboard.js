import React, {Component} from 'react';
import * as firebase from 'firebase';
import Storage from './storage'
class Dashboard extends Component{
    constructor(){
        super();
        this.state ={
            name:'',
            age:0
        }
    }

    logout = () => {
        firebase.auth().signOut().then(()=>{
            window.location.assign('/login')
        })

    };

    sendData = () => {
        let db = firebase.database();
        db.ref('/users/'+firebase.auth().currentUser.uid).set({
            name: this.state.name,
            age: this.state.age
        })
    };

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render(){
        return(
            <div>
                <button onClick={this.logout} className="button">Logout</button>
                <form>
                    <input type={'text'} value={this.state.name} name={'name'} placeholder={'enter your name'} onChange={this.changeHandler}/>
                    <input type={'text'} value={this.state.age} name={'age'} onChange={this.changeHandler}/>
                    <input type={'submit'} onClick={this.sendData} value={'save to DB'}/>
                </form>
                <p>{this.state.name}-{this.state.age}</p>
                <Storage/>
            </div>
        )
    }
}

export default Dashboard;