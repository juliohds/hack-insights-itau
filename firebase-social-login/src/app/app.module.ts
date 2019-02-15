import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { FileTransfer } from '@ionic-native/file-transfer';
import { Facebook } from '@ionic-native/facebook'

import { MyApp } from './app.component';
import { HomePage } from  '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { DetalhePage } from '../pages/detalhe/detalhe';

import { RegisterPage } from '../pages/register/register';
import { ForgetPage } from '../pages/forget/forget';

//Angular Firebase Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoadingProvider } from '../providers/loading/loading';
import { NovoPage } from '../pages/novo/novo';

export const firebaseConfig = {
  apiKey: "AIzaSyAXjl9L_uUGLHYNGX0BvqsUx_VExs8zaeY",
   authDomain: "fir-auth-bdcc0.firebaseapp.com",
   databaseURL: "https://fir-auth-bdcc0.firebaseio.com",
   projectId: "fir-auth-bdcc0",
   storageBucket: "fir-auth-bdcc0.appspot.com",
   messagingSenderId: "544712685938"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetalhePage,
    NovoPage,
    LoginPage,
    RegisterPage,
    ForgetPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetalhePage,
    LoginPage,
    NovoPage,
    RegisterPage,
    ForgetPage
  ],
  providers: [
    StatusBar,
    Camera,
    File,
    FilePath,
    FileTransfer,
    Facebook,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoadingProvider
  ]
})
export class AppModule {}
