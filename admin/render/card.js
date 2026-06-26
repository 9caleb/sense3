// =========================
// admin/render/card.js
// =========================

import { formatTime } from "./cardUI.js";

export function createCard(request){

    const row=document.createElement("div");

    row.className="requestRow";

    row.innerHTML=`

        <div class="col">

            <div class="time">

                ${formatTime(request.createdAt)}

            </div>

        </div>

        <div class="col">

            <div
                class="name"
                style="color:${getNameColor(request.name)}">

                ${request.name || "-"}

            </div>

        </div>

        <div class="col">

            <div class="artist">

                ${request.artist || "-"}

            </div>

            <div class="song">

                ${request.song || "-"}

            </div>

        </div>

        <div class="col">

            <span class="statusBadge ${request.status}">

                ${(request.status || "pending").toUpperCase()}

            </span>

        </div>

        <div class="action">

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

            <button
                class="delete"
                data-id="${request.id}">

                🗑

            </button>

        </div>

    `;

    return row;

}

// =========================
// Name Color
// =========================

function getNameColor(name){

    const colors=[

        "#4FC3F7",

        "#F06292",

        "#81C784",

        "#FFD54F",

        "#BA68C8",

        "#FF8A65",

        "#4DD0E1",

        "#AED581"

    ];

    if(!name){

        return "#ffffff";

    }

    let hash=0;

    for(let i=0;i<name.length;i++){

        hash=name.charCodeAt(i)+((hash<<5)-hash);

    }

    hash=Math.abs(hash);

    return colors[hash%colors.length];

}
