// =========================
// admin/render/card.js
// =========================

import {

    formatTime,
    getNameColor,
    renderPayment,
    renderReceipt

} from "./cardUI.js";

export function createCard(request){

    const row=document.createElement("div");

    row.className="requestRow";

    row.dataset.id=request.id;

    const status=request.status || "pending";

    const tip=request.tipAmount || 0;

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

                ${(request.name||"-").toUpperCase()}

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

            ${

                tip>0

                ?

                `

                <div class="tip">

                    🔥 RM${tip}

                </div>

                `

                : ""

            }

            ${renderPayment(request)}

            ${renderReceipt(request)}

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

                ?

                `

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

                : ""

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
