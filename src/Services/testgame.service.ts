import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class TestgameService {

  constructor(public db: AngularFirestore, public afAuth: AngularFireAuth) { }

  getData(doc?) {
    return this.db.collection('Game-Sample').doc(doc).valueChanges();
  }
  setData(user, eventValues, counter, doc) {
    this.db.collection('Game-Sample').doc(doc).update({
      eventValues,
      counter,
      turn: user
    }).catch( error => {
      console.log('Update turn error' + error);
    });
  }
  sendMessage(keyword, messages) {
    this.db.collection('Game-Sample').doc(keyword).update({
      messages
    }).catch( error => {
      console.log('send message error' + error);
    });
  }

  checkEmail(user) {
}
}
