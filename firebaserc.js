// Initialize Firebase
var firebase = require('firebase')
var config = {
  apiKey: 'AIzaSyAVywDkWdQKAhLANwRdP6cGGBox381Hn3E',
  authDomain: 'dice-race.firebaseapp.com',
  databaseURL: 'https://dice-race.firebaseio.com',
  projectId: 'dice-race',
  storageBucket: '',
  messagingSenderId: '868787174013'
}
firebase.initializeApp(config)
var db = firebase.database()

export default db
