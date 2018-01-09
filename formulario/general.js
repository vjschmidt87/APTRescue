var config = {
    apiKey: "AIzaSyAbntSAQaBuehw8pv38yj_inPoPWkt-tkE",
    authDomain: "aptrescue-2018.firebaseapp.com",
    databaseURL: "https://aptrescue-2018.firebaseio.com",
    projectId: "aptrescue-2018",
    storageBucket: "aptrescue-2018.appspot.com",
    messagingSenderId: "1095674684978"
  };
firebase.initializeApp(config);

var messagesRef = firebase.database().ref('animais');