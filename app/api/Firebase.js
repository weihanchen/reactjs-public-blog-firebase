import * as Firebase from 'firebase';

const firebaseConfig = {
	databaseURL: 'https://willapp.firebaseio.com'
}
Firebase.initializeApp(firebaseConfig);
export default Firebase.database().ref();