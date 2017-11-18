import React, {Component} from 'react';
import * as firebase from 'firebase';

class Storage extends Component{
    constructor(){
        super();
        this.state ={
            imageFile: '',
            imageUploader:'',
            imageFileName:''
        }
    }

    uploadImage = (e) => {
        this.setState({
            imageFileName : e.target.files[0].name
        });
        let file =  e.target.files[0];
        let storageRef = firebase.storage().ref('AppGallery/'+e.target.files[0].name);
        let task = storageRef.put(file);
        task.on('state_changed',snapshot=>{
            let percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
            this.setState({
                imageFile:file,
                imageUploader:percentage
            })
        },error => {
            alert(error)
        });

    };

    deleteImage = () => {
        let storageRef = firebase.storage().ref('AppGallery/1c0d0048e3d282911c57aab2c83eb4a0');
        storageRef.delete().then(()=>{
            alert('file has been deleted successfully')
        })
    };

    render(){
        return(
            <div>
                <div>
                <h3>Upload File</h3>
                <input type={'file'} onChange={this.uploadImage}/>
                <progress value={this.state.imageUploader} max={'100'}>{this.state.imageUploader}%</progress>
                <br/><br/><input type={'button'} value={'DeleteImage'} onClick={this.deleteImage} className={'delbtn'}/>
                </div>
            </div>
        )
    }
}

export default Storage;