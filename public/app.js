document.addEventListener("DOMContentLoaded", event => {

    const app = firebase.app();
    console.log(app)
    })
    
    function googleLogin() {
    
        const provider = new firebase.auth.GoogleAuthProvider();
     //defines the provider we want to use

    firebase.auth().signInWithPopup(provider)
    .then(res => {
        const user = res.user;
        document.write(`hello ${user.displayName}`);
        console.log(user)
    })
    .catch(console.log)
    }
    