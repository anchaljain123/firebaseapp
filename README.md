## Firebase

* Authentication
* Database - CRUD
* Storage
* Hosting
------------
## Steps for Installation :
* npm install -g create-react-app firebase firebase-tools
* npm install
* npm start

For Hosting
firebase init
add scripts to firebase.json
{
  "hosting": {
    "public": "build",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  }
}
npm run build
firbase deploy
