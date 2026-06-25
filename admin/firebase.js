// =========================
// Firebase SDK
// =========================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getFirestore,
    collection,
    onSnapshot,
    updateDoc,
    deleteDoc,
    doc,
    query,
    orderBy
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

export const db = getFirestore(app);


// =========================
// Collection
// =========================

export const requestCollection = collection(
    db,
    "sense3_requests"
);


// =========================
// Realtime Listener
// =========================

export function listenRequests(callback){

    onSnapshot(requestCollection,(snapshot)=>{

        const requests=[];

        snapshot.forEach((docItem)=>{

            requests.push({

                id:docItem.id,

                ...docItem.data()

            });

        });

        callback(requests);

    });

}


// =========================
// Approve
// =========================

export async function approveRequest(id){

    await updateDoc(

        doc(db,"sense3_requests",id),

        {

            status:"approved"

        }

    );

}


// =========================
// Reject
// =========================

export async function rejectRequest(id){

    await updateDoc(

        doc(db,"sense3_requests",id),

        {

            status:"rejected"

        }

    );

}


// =========================
// Delete
// =========================

export async function removeRequest(id){

    await deleteDoc(

        doc(db,"sense3_requests",id)

    );

}


// =========================
// Cloudinary
// =========================

export const CLOUD_NAME="dbdiasouj";

export const UPLOAD_PRESET="ml_default";


// =========================
// Upload Receipt
// =========================

export async function uploadReceipt(file){

    const formData=new FormData();

    formData.append(
        "file",
        file
    );

    formData.append(
        "upload_preset",
        UPLOAD_PRESET
    );

    const response=await fetch(

        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,

        {

            method:"POST",

            body:formData

        }

    );

    const result=await response.json();

    return result.secure_url;

}
