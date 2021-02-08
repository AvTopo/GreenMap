// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore()
var places = []

function fetchPlaces() {
    db.collection("places").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            places.push(doc.data())
        });
        addMarkers()
    });
}

function writeData() {
	//Sample Data:
	
    var places = db.collection("places");

    places.doc("TITLE_OF_THE_PLACE").set({
        name: "NAME OF THE PLACE",
        decription: "DESCRIBE THIS PLACE", 
        lat: 50.131740901392526,
        lon: 8.683982024924777,
        url: "<a href="http://LINK TO FURTHER INFORMATION/">Lesen Sie mehr auf unserer Webseite</a>" 
		imageUrl: "LINK TO PREVIEW IMAGE"
		owner: "NAME OF THE RECOMMENDING PERSON"
    });
}