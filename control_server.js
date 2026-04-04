var firebaseConfig = {
       apiKey: "AIzaSyAtGIjPSWS6bFrd0XAKjFU6QOMwXHFYltc",
  authDomain: "iot-demo-61835.firebaseapp.com",
  databaseURL: "https://iot-demo-61835-default-rtdb.firebaseio.com",
  projectId: "iot-demo-61835",
  storageBucket: "iot-demo-61835.firebasestorage.app",
  messagingSenderId: "380141904138",
  appId: "1:380141904138:web:4d4e5b6386d42c19cf5af3",
  measurementId: "G-GKSQKMW29D"
    };
    firebase.initializeApp(firebaseConfig);

    function setFan() {
      var val = document.getElementById("fanInput").value;
      firebase.database().ref("fan").set(parseInt(val));
    }

    function setRed(state) {
      firebase.database().ref("red").set(state);
      
      
    }

    function setGreen(state) {
      firebase.database().ref("green").set(state);
      
    }
    function getRandomFourDigit() { 
      return Math.floor(Math.random() * (9999 - 1111 + 1)) + 1111; 
    }

    function checkPasskey(){
      var inputPasskey = document.querySelector("#passkey input[type='password']").value;
      
      var passkeyRef = firebase.database().ref("passkey"); 
      passkeyRef.once("value").then(function(snapshot) { 
        var correctPasskey = snapshot.val(); // Now you can compare 
       
      if (parseInt(inputPasskey, 10) == correctPasskey) {
        document.getElementById("passkey").style.display = "none";
        document.getElementById("controls").style.display = "block";

        firebase.database().ref("passkey").set(getRandomFourDigit());
         totalSeconds = 1*60 ;    
          updateTime();
document.querySelector("#passkey input[type='password']".value = "";
      } else {
        alert("Incorrect passkey");
      }

        
      
      });  
      
    }
      
    var redRef = firebase.database().ref("red");
    redRef.on("value", function(snapshot) {
      var redState = snapshot.val();
      if (redState == false){
        document.getElementById("red_on").style.display = "none";
        document.getElementById("red_off").style.display = "block";
      }else{
        document.getElementById("red_on").style.display = "block";
        document.getElementById("red_off").style.display = "none";
      }
    });
    var greenRef = firebase.database().ref("green");
    greenRef.on("value", function(snapshot) {
      var greenState = snapshot.val();
      if (greenState == false){
        document.getElementById("green_on").style.display = "none";
        document.getElementById("green_off").style.display = "block";
      }else{
        document.getElementById("green_on").style.display = "block";
        document.getElementById("green_off").style.display = "none";
      }
    });

    const secondsLabel = document.getElementById("seconds");
  
    let totalSeconds = 5*60  ;
    function updateTime() {
      let minutes = Math.floor(totalSeconds / 60);
      let seconds = totalSeconds % 60;
  
      secondsLabel.innerHTML =
        (minutes < 10 ? "0" + minutes : minutes) +
        ":" +
        (seconds < 10 ? "0" + seconds : seconds);
  
      if (totalSeconds > 0) {
        totalSeconds--;
      } else {
        firebase.database().ref("green").set(0);
        firebase.database().ref("red").set(0);
        firebase.database().ref("fan").set(0);
       document.getElementById("passkey").style.display = "block";
        document.getElementById("controls").style.display = "none";
      }
    }
    setInterval(updateTime, 1000);
