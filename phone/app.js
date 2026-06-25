// =========================
// phone/app.js
// =========================

import { submitRequest } from "./firebase.js";

// =========================
// Elements
// =========================

const nameInput = document.getElementById("name");
const artistInput = document.getElementById("artist");
const songInput = document.getElementById("song");

const submitBtn = document.querySelector(".submitBtn");

const tipModal = document.getElementById("tipModal");

// =========================
// Tip Data
// =========================

let tipAmount = 0;
let paymentType = "";
let receipt = "";

// =========================
// Modal
// =========================

window.openTip = function(){

    tipModal.style.display = "flex";

}

window.closeTip = function(){

    tipModal.style.display = "none";

}

// =========================
// Submit
// =========================

window.submit = async function(){

    const name = nameInput.value.trim();
    const artist = artistInput.value.trim();
    const song = songInput.value.trim();

    if(!name || !artist || !song){

        alert("Please fill all fields.");

        return;

    }

    submitBtn.disabled = true;

    try{

        await submitRequest({

            name,
            artist,
            song,

            tipAmount,

            paymentType,

            receipt

        });

        alert("Request submitted!");

        nameInput.disabled = true;

        artistInput.value = "";

        songInput.value = "";

    }

    catch(error){

        console.error(error);

        alert("Failed to submit request.");

    }

    submitBtn.disabled = false;

}
