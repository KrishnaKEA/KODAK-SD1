var firebaseConfig = {
    apiKey: "AIzaSyCQX-NF4fGNbfjsTrA801rYKbsou5WB_eg",
    authDomain: "kodak-fae36.firebaseapp.com",
    projectId: "kodak-fae36",
    storageBucket: "kodak-fae36.appspot.com",
    messagingSenderId: "71287826568",
    appId: "1:71287826568:web:0b959cdc1047290983973d",
    measurementId: "G-KW4C8P7SWK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email_field");
    var password = document.getElementById("password_field");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      document.querySelector(".user_name").innerHTML=email;
      
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })