import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyBVKWZGqOX9714TLuT_wBE-CykQ7FbM-g8",
      authDomain: "fhitsolutions-todo-app.firebaseapp.com",
      databaseURL: "https://fhitsolutions-todo-app.firebaseio.com",
      projectId: "fhitsolutions-todo-app",
      storageBucket: "fhitsolutions-todo-app.appspot.com",
      messagingSenderId: "601650814063"
    };

  firebase.initializeApp(config);
} catch(e) {

}

export var firebaseRef =  firebase.database().ref();
export default firebase;
