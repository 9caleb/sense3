// =========================
// card.js
// =========================

import {
    renderTip,
    renderPayment,
    renderReceipt,
    renderStatus,
    getNameColor,
    formatTime
} from "./cardUI.js";

export function createCard(request){

    const card=document.createElement("div");

    // =========================
    // Card Class
    // =========================

    let className="card";

    if(request.status){

        className+=" "+request.status;

    }else{

        className+=" pending";

    }

    if((request.tipAmount||0)>0){

        className+=" tip";

    }

    card.className=className;

    card.dataset.id=request.id;

    // =========================
    // Name Color
    // =========================

    const nameColor=getNameColor(request.name);

    // =========================
    // HTML
    // =========================

    card.innerHTML=`

        <div class="cardTop">

            <div class="topLeft">

                ${renderTip(request)}

            </div>

            <div class="topRight">

                ${formatTime(request.createdAt)}

            </div>

        </div>

        <div
            class="name"
            style="color:${nameColor};">

            ${request.name||"-"}

        </div>

        <div class="artist">

            ${request.artist||"-"}

        </div>

        <div class="song">

            ${request.song||"-"}

        </div>

        ${renderPayment(request)}

        ${renderReceipt(request)}

        ${renderStatus(request)}

        <div class="actions">

            <button
                class="approve"
                data-action="approve"
                data-id="${request.id}">

                APPROVE

            </button>

            <button
                class="reject"
                data-action="reject"
                data-id="${request.id}">

                REJECT

            </button>

            <button
                class="delete"
                data-action="delete"
                data-id="${request.id}">

                DELETE

            </button>

        </div>

    `;

    return card;

}
