// =========================
// phone/app.js
// =========================

import {
    submitRequest,
} from "./firebase.js";

// =========================
// Elements
// =========================

const nameInput = document.getElementById("name");
const artistInput = document.getElementById("artist");
const songInput = document.getElementById("song");

const submitBtn = document.querySelector(".submitBtn");

// =========================
// Submit
// =========================

window.submit = async function () {

    const name = nameInput.value.trim();
    const artist = artistInput.value.trim();
    const song = songInput.value.trim();

    if (!name || !artist || !song) {

        alert("Please fill all fields.");

        return;

    }

    submitBtn.disabled = true;

    try {

        await submitRequest({

            name,
            artist,
            song,

        });

        alert("Request submitted!");

        nameInput.disabled = true;

        artistInput.value = "";
        songInput.value = "";

    }

    catch (error) {

        console.error(error);

        alert("Submit failed.");

    }

    submitBtn.disabled = false;

};
