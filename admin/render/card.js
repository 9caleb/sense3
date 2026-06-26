// =========================
// admin/render/card.js
// =========================

import {
    formatTime,
    getNameColor
} from "./cardUI.js";

export function createCard(request){

    const row=document.createElement("div");

    row.className="requestRow";

    row.dataset.id=request.id;

    row.innerHTML=`

        <div class="col time">

            ${formatTime(request.createdAt)}

        </div>

        <div
            class="col name"
            style="color:${getNameColor(request.name)}">

            ${(request.name||"-").toUpperCase()}

        </div>

        <div class="col request">

            <div class="artist">

                ${request.artist||"-"}

            </div>

            <div class="song">

                ${request.song||"-"}

            </div>

        </div>

        <div class="col status">

            <span class="statusBadge ${request.status||"pending"}">

                ${(request.status||"pending").toUpperCase()}

            </span>

        </div>

        <div class="col action">

            ${
                request.status==="pending"
                ?`
                    <button
                        class="approve"
                        data-id="${request.id}">
                        ✓
                    </button>

                    <button
                        class="reject"
                        data-id="${request.id}">
                        ✕
                    </button>
                `
                :""
            }

            <button
                class="delete"
                data-id="${request.id}">
                🗑
            </button>

        </div>

    `;

    return row;

}
