
const admin = require('firebase-admin');
const serviceAccount = require('./key_service_account.json.json');
const data = require('./productos.json');
const collectionKey = "productos";
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const firestore = admin.firestore();
const settings ={timestampsInSnapshots:true}
firestore.settings(settings);
if (data && (typeof data === 'object')) {
    Object.keys(data).forEach(docKey => {
        firestore.collection(collectionKey).doc(docKey).set(data[docKey]).then((res) => {
            console.log("Document" + docKey + " succcessfully written!");
            }).catch((error)=>{
                console.error("Error writing document: ", error);
            })
    })
}