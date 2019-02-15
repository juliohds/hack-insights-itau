import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import { LoginPage } from '../login/login';

import { AngularFireAuth } from 'angularfire2/auth';
import { LoadingProvider } from '../../providers/loading/loading';
import { DetalhePage } from '../detalhe/detalhe';
import { NovoPage } from '../novo/novo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pet: string = "puppies";
  isAndroid: boolean = false;
	userData:any;

  slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];
  
  constructor(public afAuth: AngularFireAuth, public navCtrl: NavController, public navParam: NavParams,public loadingProvider : LoadingProvider, platform: Platform) {
      
      this.isAndroid = platform.is('android');
  		this.userData = this.navParam.get('res');
  		console.log('userData',this.userData);

  }

  goToDetalhe(){
    this.navCtrl.setRoot(DetalhePage);
  }

  goToNovo(){
    this.navCtrl.setRoot(NovoPage);
  }

  logout(){
    this.loadingProvider.startLoading();
  	this.afAuth.auth.signOut();
  	this.navCtrl.setRoot(LoginPage);
    this.loadingProvider.stopLoading();

  }

}




