// =========================
// actions.js
// =========================

import {

    approveRequest,
    rejectRequest,
    removeRequest,
    hideFromScreen,
    showOnScreen

} from "./firebase.js";

import { showConfirm } from "./confirmModal.js";

// =========================
// Bind
// =========================

export function bindActions(){

    document.addEventListener("click",(e)=>{

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

            return;

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

            return;

        }

        // -----------------
        // Hide
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

            return;

        }

        // -----------------
        // Show
        // -----------------

        if(button.classList.contains("show")){

            showConfirm({

                titleText:"Show On Screen",

                messageText:"Show this request on the LED screen again?",

                confirmText:"Show",

                type:"approve",

                onConfirm:async()=>{

                    await showOnScreen(id);

                }

            });

            return;

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
