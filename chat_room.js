
 var firebaseConfig = {
    apiKey: "AIzaSyDJfd6_myeSNjnoGYG-wv59eNaYm1Uo53c",
    authDomain: "letschat-6022e.firebaseapp.com",
    databaseURL: "https://letschat-6022e-default-rtdb.firebaseio.com",
    projectId: "letschat-6022e",
    storageBucket: "letschat-6022e.appspot.com",
    messagingSenderId: "724205276361",
    appId: "1:724205276361:web:701d4304dd9dfb322a5118"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  
    user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "chat_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }