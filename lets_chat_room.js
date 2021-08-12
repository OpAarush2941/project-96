var firebaseConfig = {
    apiKey: "AIzaSyDD6sco4vNBnBZZdQB8K-yDe4FJWchUcLE",
    authDomain: "project-95-e7d43.firebaseapp.com",
    databaseURL: "https://project-95-e7d43-default-rtdb.firebaseio.com",
    projectId: "project-95-e7d43",
    storageBucket: "project-95-e7d43.appspot.com",
    messagingSenderId: "963540466757",
    appId: "1:963540466757:web:27f9a2c14ab9f0d568372c"
  };
  
    firebase.initializeApp(firebaseConfig);

room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name");

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      message:msg,
      name:user_name,
      like:0
});
    document.getElementById("msg").value = "";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_name");
    window.location = "index.html"
}