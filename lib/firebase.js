const firebase = require('firebase');
const config = require('../env.js');

/*

../env.js is not included in this git repository. It is in the .gitignore file.

Ideally, you should set up your own with your Firebase keys.

module.exports = {
  apiKey: 'YOUR_KEY_HERE',
  authDomain: 'YOUR_DOMAIN_HERE',
  databaseURL: 'YOUR_DATABASE_HERE',
  storageBucket: 'YOUR_BUCKET_HERE (Optional)',
};

*/

firebase.initializeApp(config);

export default firebase;
export const provider = new firebase.auth.GoogleAuthProvider();
