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

    const status=request.status || "pending";

    const visible=request.screenVisible===true;

    row.innerHTML=`

        <!-- TIME -->

        <div class="col">

            <div class="time">

                ${formatTime(request.createdAt)}

            </div>

        </div>

        <!-- NAME -->

        <div class="col">

            <div
                class="name"
                style="color:${getNameColor(request.name)}">

                ${(request.name || "-").toUpperCase()}

            </div>

        </div>

        <!-- REQUEST -->

        <div class="col">

            <div class="artist">

                ${request.artist || "-"}

            </div>

            <div class="song">

                ${request.song || "-"}

            </div>

        </div>

        <!-- STATUS -->

        <div class="col">

            <span class="statusBadge ${status}">

                ${status.toUpperCase()}

            </span>

        </div>

        <!-- ACTION -->

        <div class="action">

            ${
                status==="pending"
                ?`

                    <button
                        class="approve"
                        data-id="${request.id}"
                        title="Approve">

                        ✓

                    </button>

                    <button
                        class="reject"
                        data-id="${request.id}"
                        title="Reject">

                        ✕

                    </button>

                `
                :""
            }

            ${
                status==="approved"
                ?`

                    <button
                        class="${visible ? "hide" : "show"}"
                        data-id="${request.id}"
                        title="${visible ? "Hide from Screen" : "Show on Screen"}">

                        ${visible ? "👁" : "📺"}

                    </button>

                `
                :""
            }

            <button
                class="delete"
                data-id="${request.id}"
                title="Delete">

                🗑

            </button>

        </div>

    `;

    return row;

}
