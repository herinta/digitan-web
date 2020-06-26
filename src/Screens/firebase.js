import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDvwpo1e0OmkWywREOUFJjoyhG2ewp8CyI",
    authDomain: "digitan-a7c1b.firebaseapp.com",
    databaseURL: "https://digitan-a7c1b.firebaseio.com",
    projectId: "digitan-a7c1b",
    storageBucket: "digitan-a7c1b.appspot.com",
    messagingSenderId: "1046090615035",
    appId: "1:1046090615035:web:9beed928c48e906968085e",
    measurementId: "G-43S5G45HH8"
  };

class Firebase {
	constructor() {
		app.initializeApp(firebaseConfig)
		this.auth = app.auth()
		this.db = app.firestore()
	}

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
	}

	async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: name
		})
    }
    addNumberPhone(NumberPhone) {
		if(!this.auth.currentUser) {
			return alert('Not authorized')
		}

		return this.db.doc(`users_digitan/${this.auth.currentUser.uid}`).set({
			NumberPhone
		})
	}

	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}

	async getCurrentUserNumberPhone() {
		const quote = await this.db.doc(`users_digitan/${this.auth.currentUser.uid}`).get()
		return quote.get('NumberPhone')
	}
}

export default new Firebase()