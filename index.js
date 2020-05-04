// var firebaseConfig = 
// {
//     apiKey: "AIzaSyD2Z4lM8_hYQYGXIiRJurXGkaN9_FYguGA",
//     authDomain: "fir-web-a2774.firebaseapp.com",
//     databaseURL: "https://fir-web-a2774.firebaseio.com",
//     projectId: "fir-web-a2774",
//     storageBucket: "fir-web-a2774.appspot.com",
//     messagingSenderId: "910252380379",
//     appId: "1:910252380379:web:c6af6704e4d75f639efcfe",
//     measurementId: "G-RDJTB2W87T"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
var firebaseConfig = {
    apiKey: "AIzaSyChlh9VlxzmE9eoGbH-Jcl-Tm22FC9GszI",
    authDomain: "login-web-app-299f6.firebaseapp.com",
    databaseURL: "https://login-web-app-299f6.firebaseio.com",
    projectId: "login-web-app-299f6",
    storageBucket: "login-web-app-299f6.appspot.com",
    messagingSenderId: "1012561876334",
    appId: "1:1012561876334:web:60452a7ec801e87eb45d7f",
    measurementId: "G-1RWRYEXCTS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
//   var firebase = require("firebase/app");

//   // Add the Firebase products that you want to use
//   require("firebase/auth");
//   require("firebase/firestore");


  firebase.auth().Auth().Persistance.LOCAL;
  function login() {
    var email=$("#email").val();
        var password=$("#password").val();
        if(email!="" && password!="")
        {
                       firebase.auth().signInWithEmailAndPassword(email,password).then(function(){
                        window.location.href ="home.html";
                       }).catch(function(error){
                        var errorcode=error.code;
                                                var message=error.message;
                                                console.log(message);
                                                console.log(errorcode);
                                                window.alert("message:"+message);
                       });
                        
        }
        else{
            window.alert("plz fill all fields");
        }
}

function register() {
    var email=$("#email").val();
        var password=$("#password").val();
        var cpassword=$("#confirmPassword").val();
        if(email!="" && password!="" && cpassword!="")
        {
                if(password == cpassword)
                {
                    firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
                      window.alert("successfully registered.");
                    //   window.location.href = "accountsettings.html"; 
                       }).catch(function(error){
                        var errorcode=error.code;
                                                var message=error.message;
                                                console.log(message);
                                                console.log(errorcode);
                                                window.alert("message:"+message);
                       });    
        }
        else{
            window.alert("password do not match with confirm password.");
        }

        
    }
    else{
        window.alert("please fill out this feilds.");
    }
}

function reset()
{
    var auth=firebase.auth();
    var email=document.getElementById("email").value;
    // var email=$("#email").val();
    if(email!="")
    {
        auth.sendPasswordResetEmail(email).then(function(){
            window.alert("please verify your email");

        }).catch(function(error){
            var errorcode=error.code;
             var message=error.message;
            console.log(message);
            console.log(errorcode);
            window.alert("message:"+message);
        });
    }else{
        window.alert("please enter email id");

    }
}

function signOut()
{
    firebase.auth().signOut().then(function(){
        window.location.href="signin.html";
    }).catch(function(error){

    });
}

function myFunction5()
{
    var phone=$("#phone").val();
        var address=$("#address").val();
        var bio=$("#bio").val();
        var firstname=$("#first").val();
        var lastname=$("#last").val();
        var country=$("#country").val();
        var gender=$("#gender").val();

        var rootRef =firebase.database().ref().child("Users");
        var userID = firebase.auth().currentUser.uid;
        var userRef = rootRef.child(userID);

        if(firstname !="" && lastname!="" && phone!="" && address!="" && bio!="" && gender!="" && country!="")
        {
            var userData =
            {
                "FirstName" : firstname,
                "LastName"  : lastname,
                "bio"       : bio,
                "phone"     : phone,
                "gender"    : gender,
                "country"   : country,
                "address"   : address,
            };

            userRef.set(userData,function(error){
                if(error){
                    var errorcode=error.code;
                    var message=error.message;
                    console.log(message);
                    console.log(errorcode);
                    window.alert("message:"+message);
                }else{
                    // window.alert("message:");
                    window.location.href = "home.html";
                }
            });
           
        }
        else{
            window.alert("please fill out feilds.");
        }
}

function Delete()
{
    var user = firebase.auth().currentUser;

    user.delete().then(function() {
    window.alert("deleted");
    // firebase.database.ref().child("Users").child(user.uid).remove();
    }).catch(function(error) {
        window.alert("error");
    });
    // DeleteData();
}

function DeleteData(){
    var userID = firebase.auth().currentUser.uid;
              firebase.database().ref('Users/' + userID).remove();
            window.alert("data deleted");
  }

  function UpdateDataUser()
  {
        
        var phone=$("#phone").val();
        var address=$("#address").val();
        var bio=$("#bio").val();
        var firstname=$("#first").val();
        var lastname=$("#last").val();
        var country=$("#country").val();
        var gender=$("#gender").val();

        var rootRef =firebase.database().ref().child("Users");
        var userID = firebase.auth().currentUser.uid;
        var userRef = rootRef.child(userID);

        if(firstname !="" && lastname!="" && phone!="" && address!="" && bio!="" && gender!="" && country!="")
        {
            var userData =
            {
                "FirstName" : firstname,
                "LastName"  : lastname,
                "bio"       : bio,
                "phone"     : phone,
                "gender"    : gender,
                "country"   : country,
                "address"   : address,
            };

            userRef.set(userData,function(error){
                if(error){
                    var errorcode=error.code;
                    var message=error.message;
                    console.log(message);
                    console.log(errorcode);
                    window.alert("message:"+message);
                }else{
                    // window.alert("message:");
                    window.location.href = "home.html";
                }
            });
           
        }
        else{
            window.alert("please fill out the missing feilds.");
        }
  }