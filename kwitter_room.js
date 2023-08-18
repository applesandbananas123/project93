
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyD2fO-wIxin8RauxhjQXjyXMspXXUo_YUc",
      authDomain: "kwitter-8202c.firebaseapp.com",
      databaseURL: "https://kwitter-8202c-default-rtdb.firebaseio.com",
      projectId: "kwitter-8202c",
      storageBucket: "kwitter-8202c.appspot.com",
      messagingSenderId: "345506516979",
      appId: "1:345506516979:web:acd003e534302aaa498c86"
    };
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
