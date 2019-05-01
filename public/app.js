// document.addEventListener("DOMContentLoaded", event => {

//     const app = firebase.app();
//     console.log(app)
//     })
    
//     function googleLogin() {
    
//         const provider = new firebase.auth.GoogleAuthProvider();
//      //defines the provider we want to use

//     firebase.auth().signInWithPopup(provider)
//     .then(res => {
//         const user = res.user;
//         document.write(`hello ${user.displayName}`);
//         console.log(user)
//     })
//     .catch(console.log)

//     //also in index.html change database to firestore in scrpit tag
//     }
    


document.addEventListener("DOMContentLoaded", event => {

    const app = firebase.app();
    const db = firebase.firestore(); 
    const myPost = db.collection("posts").doc("firstpost");
    //at this point we’ve created a reference to the document where we could read it, delete it, or //update it, etc…
    


    // // --- vvv --------------- getting posts on firebase DB ----------------------- 

    // myPost.get()
    // .then(doc => {

    //     const data = doc.data();
    //     document.write(data.title + "<br>")
    //     document.write(data.createdAt)
    // })



        // --- vvv ---------- getting posts on firebase DB and making them update when it updates ---------------- 

    myPost.onSnapshot(doc => {

        const data = doc.data();
        document.write(data.title + "<br>")
        document.write(data.createdAt + "<br>")

    })
        


    });
    