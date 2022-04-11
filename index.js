var firebaseConfig = {
    apiKey: "aaaaa",
    authDomain: "aaaaa",
    databaseURL: "aa",
    projectId: "a",
    storageBucket: "aa",
    messagingSenderId: "a",
    appId: "a",
    measurementId: "a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth.Auth.Persistence.LOCAL;

const appCheck = firebase.appCheck();
appCheck.activate('aaa',true);
firebase.appCheck().setTokenAutoRefreshEnabled(true);

function myCnttSend() {
    var db = firebase.firestore();
    var nameCnt = $("#NameCtnt").val();
    var emailCnt = $("#EmailCtnt").val();
    var noteCnt = $("#noteCtnt").val();

      if (nameCnt != "" && emailCnt != "" && noteCnt != "")
      {
        db.collection("webContact").add({
            email_phone: emailCnt,
            name: nameCnt,
            note: noteCnt,
            timestamp: firebase.firestore.Timestamp.fromDate(new Date())

            
        })
        .then(() => {
            alert('Thank you');
            document.getElementById("NameCtnt").value = null;
            document.getElementById("EmailCtnt").value = null;
            document.getElementById("noteCtnt").value = null;
        });
      }
      else
      {
          window.alert("ENG: The form is missing. TR: Form eksik.");
      }
    
}


function myGBckSignIn(){window.location.href = "/";}

function myGBkNnRegstr(){window.location.href = "/";}

function myBaSsckSignUp(){window.location.href = "/";}

function myPrtoIndx(){window.location.href = "/";}

function myMail00T22(){window.location.href="mailto:memetcfc@gmail.com";}

function myMail00N11(){window.location.href="mailto:memetcfc@gmail.com";}

function myCncttoIndx(){window.location.href = "/";}

function myAbttIndx(){window.location.href = "/";}

function myFRSWAoPo(){window.location.href = "/";}

function myGooglePlay(){window.location.href="https://play.google.com/store/apps/details?id=com.mk.myapp075";}

function myAboT(){window.location.href = "about";}

function myIlettR(){window.location.href = "contact";}

function myGizli(){window.location.href = "privacy";}

function PhoneToIndex(){window.location.href = "/";}

function myAboThm(){window.location.href = "about";}

function myIlettRhm(){window.location.href = "contact";} 

function myGizlihm(){window.location.href = "privacy";} 

function myGooglePlayhm(){window.location.href="https://play.google.com/store/apps/details?id=com.mk.myapp075";}

function myMaps() {window.location.href = "maps";}

function myLogout() {firebase.auth().signOut().then(() => {window.location.href = "login";}).catch((error) => {window.alert(error);});}





      









