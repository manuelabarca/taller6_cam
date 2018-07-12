import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions} from '@ionic-native/camera'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public image;
  constructor(public navCtrl: NavController, private camera: Camera) {
    this.image = null;
  }

  getPicture(){
    
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camera.getPicture( options )
    .then(imageData => {
      this.image = `data:image/jpeg;base64,${imageData}`;
    })
    .catch(error => {
      alert(error);
    });
  }

  getPhoto(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      quality: 100
    }
    this.camera.getPicture(options)
    .then( imageData => {
      this.image = `data:image/jpeg;base64,${imageData}`;
    })
    .catch(error => {
      alert(error);
    });
  }

}
