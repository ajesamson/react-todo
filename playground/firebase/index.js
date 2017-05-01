import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBVKWZGqOX9714TLuT_wBE-CykQ7FbM-g8",
    authDomain: "fhitsolutions-todo-app.firebaseapp.com",
    databaseURL: "https://fhitsolutions-todo-app.firebaseio.com",
    projectId: "fhitsolutions-todo-app",
    storageBucket: "fhitsolutions-todo-app.appspot.com",
    messagingSenderId: "601650814063"
  };

firebase.initializeApp(config);

var firebaseRef =  firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Samson',
    age: 15
  }
});


var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('new todo added ', snapshot.key, snapshot.val())
})

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});
