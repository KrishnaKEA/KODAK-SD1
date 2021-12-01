var firebaseConfig = {
	apiKey: "AIzaSyCQX-NF4fGNbfjsTrA801rYKbsou5WB_eg",
	authDomain: "kodak-fae36.firebaseapp.com",
	projectId: "kodak-fae36",
	storageBucket: "kodak-fae36.appspot.com",
	messagingSenderId: "71287826568",
	appId: "1:71287826568:web:0b959cdc1047290983973d",
	measurementId: "G-KW4C8P7SWK",
};

firebase.initializeApp(firebaseConfig);
const useremail = "";
const userId = "";
const database = firebase.database();
const auth = firebase.auth();

//const db = firebase.firestore();
const secondDiv = document.querySelector("#div2");
const firstDiv = document.querySelector("#div1");
const thirdDiv = document.querySelector("#div3");
secondDiv.style.display = "none";
thirdDiv.style.display = "none";
//signup function
function signUp() {
	const email = document.getElementById("email_field");
	const password = document.getElementById("password_field");
	const username = document.getElementById("name_field");
	const number = document.getElementById("number_field");
	const address = document.getElementById("address_field");
	const favsport = document.getElementById("fsport_field");
	const promise = auth
		.createUserWithEmailAndPassword(email.value, password.value)
		.then((cred) => {
			console.log(cred.user.email);
			savetoDatabase(
				cred.user.uid,
				username.value,
				number.value,
				address.value,
				favsport.value
			);
		})
		.then(() => {
			alert("successfully created user and its database.");
			window.location = "login.html";
		});

	promise.catch((e) => alert(e.message));
	alert("SignUp Successfully");
}

//signIN function
function signIn() {
	const email = document.getElementById("email");
	const password = document.getElementById("password");
	auth
		.signInWithEmailAndPassword(email.value, password.value)
		.then((cred) => {})
		.catch((error) => {
			return console.log(error.message);
		});
	showDetail();
}

//signOut

function signOut() {
	auth.signOut();
	//window.location.replace("index.html");

	alert("SignOut Successfully from System");
}

//active user to homepage
firebase.auth().onAuthStateChanged((user) => {
	if (user) {
	} else {
		alert("No Active user Found");
	}
});

function savetoDatabase(uid, username, number, address, fsport) {
	database.ref("user/" + uid).set({
		username: username,
		number: number,
		address: address,
		fsport: fsport,
	});
}
function showDetail() {
	firstDiv.style.display = "none";
	secondDiv.style.display = "none";
	thirdDiv.style.display = "block";
	const username = document.querySelector("#username");
	const useremail = document.querySelector("#useremail");
	const userphone = document.querySelector("#userphone");
	const usersport = document.querySelector("#usersport");
	const useraddress = document.querySelector("#useraddress");
	username.innerHTML = "Krishna Khanal";
	useremail.innerHTML = "kris47f9@stud.kea.dk";
	userphone.innerHTML = "71879246";
	usersport.innerHTML = "football";
	useraddress.innerHTML = "Ringertoften 6 2tv 2400";
	var leadsRef = database.ref("user");
	leadsRef.on("value", function (snapshot) {
		snapshot.forEach(function (childSnapshot) {
			var childData = childSnapshot.val();
			console.log(childData);
		});
	});
}
