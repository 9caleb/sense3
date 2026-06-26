// =========================
// screen/firebase.js
// =========================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {

    getFirestore,

    collection,

    query,

    where,

    orderBy,

    onSnapshot

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// =========================
// Firebase Config
// =========================

const firebaseConfig = {

    apiKey: "AIzaSyBMoeGpRpLb8Ooh47WIlKCrCPC7ocZ2ZUo",

    authDomain: "play-chatbox.firebaseapp.com",

    databaseURL: "https://play-chatbox-default-rtdb.asia-southeast1.firebasedatabase.app",

    projectId: "play-chatbox",

    storageBucket: "play-chatbox.firebasestorage.app",

    messagingSenderId: "822745508232",

    appId: "1:822745508232:web:20b6baa7e4929668db723d",

    measurementId: "G-4X6CD680J3"

};

// =========================

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// =========================
// Approved Requests
// =========================

export function listenApproved(callback){

    const q=query(

        collection(db,"sense3_requests"),

        where("status","==","approved"),

        orderBy("createdAt","desc")

    );

    onSnapshot(q,(snapshot)=>{

        const requests=[];

        snapshot.forEach((doc)=>{

            const data={

                id:doc.id,

                ...doc.data()

            };

            if(data.screenVisible){

                requests.push(data);

            }

        });

        callback(requests);

    });

}
