// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

type dataType = {
	id: string;
	name: string;
	price: number;
	description: string;
	image: string;
	category: string;
};

const firebaseConfig = {
	// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	// authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	// projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	// storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	// messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
	// appId: process.env.REACT_APP_FIREBASE_APP_ID,
	// measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,

	apiKey: "AIzaSyB92uEkARvw4xkKrm_3NbOMtJ-nFse8l8s",
	authDomain: "lalasia-db.firebaseapp.com",
	projectId: "lalasia-db",
	storageBucket: "lalasia-db.appspot.com",
	messagingSenderId: "267691784516",
	appId: "1:267691784516:web:3243220e77fa25b5df7f11",
	measurementId: "G-CHT2LH9NQQ",
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const storage = getStorage(app);
const db = getFirestore();
export const colRef = collection(db, "products");

const data: dataType[] = [];

export const fetchData = async () => {
	const snapshot = await getDocs(colRef);
	const data: dataType[] = snapshot.docs.map(
		(doc) =>
			({
				...doc.data(),
				id: doc.id,
			} as dataType)
	);
	return data;
};
