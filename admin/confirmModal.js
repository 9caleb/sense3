// =========================
// confirmModal.js
// =========================

let confirmCallback = null;

// =========================
// Elements
// =========================

const modal = document.getElementById("confirmModal");

const title = document.getElementById("confirmTitle");

const message = document.getElementById("confirmMessage");

const confirmBtn = document.getElementById("confirmButton");

const cancelBtn = document.getElementById("cancelButton");

// =========================
// Open
// =========================

export function showConfirm({

    titleText = "Confirm",

    messageText = "",

    confirmText = "Confirm",

    type = "approve",

    onConfirm = null

}){

    title.textContent = titleText;

    message.textContent = messageText;

    confirmBtn.textContent = confirmText;

    confirmBtn.classList.remove(
        "approve",
        "reject",
        "delete"
    );

    confirmBtn.classList.add(type);

    confirmCallback = onConfirm;

    modal.style.display = "flex";

}

// =========================
// Close
// =========================

export function closeConfirm(){

    modal.style.display = "none";

    confirmCallback = null;

}

// =========================
// Confirm
// =========================

confirmBtn.addEventListener("click", async ()=>{

    if(confirmCallback){

        await confirmCallback();

    }

    closeConfirm();

});

// =========================
// Cancel
// =========================

cancelBtn.addEventListener("click",()=>{

    closeConfirm();

});

// =========================
// Click Outside
// =========================

modal.addEventListener("click",(e)=>{

    if(e.target===modal){

        closeConfirm();

    }

});

// =========================
// ESC
// =========================

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeConfirm();

    }

});
