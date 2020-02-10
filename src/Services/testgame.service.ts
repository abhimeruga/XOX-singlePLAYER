import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class TestgameService {

  constructor(public db: AngularFirestore, public afAuth: AngularFireAuth) { }

  getData() {
    return this.db.collection('Game-Sample').doc('arrayData').valueChanges();
  }
  setData(user, eventValues, counter) {
    this.db.collection('Game-Sample').doc('arrayData').update({
      eventValues,
      counter,
      turn: user
    }).catch( error => {
      console.log('Update turn error' + error);
    });
  }
}
