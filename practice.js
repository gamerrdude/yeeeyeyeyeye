var firebaseConfig = {
    apiKey: "AIzaSyDisogZcUxesf-KDK_El1afN8sqaXJ7dF8",
    authDomain: "yeeyeejuice-58604.firebaseapp.com",
    databaseURL: "https://yeeyeejuice-58604-default-rtdb.firebaseio.com",
    projectId: "yeeyeejuice-58604",
    storageBucket: "yeeyeejuice-58604.appspot.com",
    messagingSenderId: "816175479437",
    appId: "1:816175479437:web:d53955dc3a26152fb140c4",
    measurementId: "G-CZNEJ2P163"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser() {

    user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
      purpose : "adding user"
  });
 
  }
  