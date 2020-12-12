import firebase from '@firebase/app';
import '../../node_modules/firebase/database';
import { firebaseKeys }  from './apiKeys';

const config = {
    apiKey: firebaseKeys.apiKey,
    authDomain: firebaseKeys.authDomain,
    dataaseURL: firebaseKeys.databaseURL,
    projectId: firebaseKeys.projectId,
    storageBucket: firebaseKeys.storageBucket,
    messagingSenderId: firebaseKeys.messagingSenderId,
    appId: firebaseKeys.appId
}

export default firebase.initializeApp(config);