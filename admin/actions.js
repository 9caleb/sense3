// =========================
// actions.js
// =========================

import {

    approveRequest,

    rejectRequest,

    removeRequest,

    hideFromScreen

} from "./firebase.js";

import { showConfirm } from "./confirmModal.js";

// =========================
// Bind
// =========================

export function bindActions(){

    document.addEventListener("click",async(e)=>{

        const button=e.target;

        const id=button.dataset.id;

        if(!id) return;

        // -----------------
        // Approve
        // -----------------

        if(button.classList.contains("approve")){

            showConfirm({

                titleText:"Approve Request",

                messageText:"This request will appear on the screen.",

                confirmText:"Approve",

                type:"approve",

                onConfirm:async()=>{

                    await approveRequest(id);

                }

            });

        }

        // -----------------
        // Hide From Screen
        // -----------------

        if(button.classList.contains("hide")){

            showConfirm({

                titleText:"Remove From Screen",

                messageText:"Hide this request from the LED screen?",

                confirmText:"Hide",

                type:"delete",

                onConfirm:async()=>{

                    await hideFromScreen(id);

                }

            });

        }

        // -----------------
        // Reject
        // -----------------

        if(button.classList.contains("reject")){

            showConfirm({

                titleText:"Reject Request",

                messageText:"Reject this request?",

                confirmText:"Reject",

                type:"reject",

                onConfirm:async()=>{

                    await rejectRequest(id);

                }

            });

        }

        // -----------------
        // Delete
        // -----------------

        if(button.classList.contains("delete")){

            showConfirm({

                titleText:"Delete Request",

                messageText:"Delete permanently?",

                confirmText:"Delete",

                type:"delete",

                onConfirm:async()=>{

                    await removeRequest(id);

                }

            });

        }

    });

}
