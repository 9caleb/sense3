// =========================
// screen/feed.js
// =========================

import { listenApproved } from "./firebase.js";

const feed = document.getElementById("feed");

const MAX_REQUESTS = 5;

// =========================
// Name Color
// =========================

const colors = [

    "#4FC3F7",
    "#F06292",
    "#81C784",
    "#FFD54F",
    "#BA68C8",
    "#FF8A65",
    "#4DD0E1",
    "#AED581"

];

const colorMap = {};

let colorIndex = 0;

function getColor(name){

    if(!colorMap[name]){

        colorMap[name]=colors[colorIndex % colors.length];

        colorIndex++;

    }

    return colorMap[name];

}

// =========================
// Render
// =========================

listenApproved((requests)=>{

    feed.innerHTML="";

    requests
        .slice(0, MAX_REQUESTS)
        .forEach((request)=>{

            const card=document.createElement("div");

            card.className="request";

            card.innerHTML=`

                <div
                    class="name"
                    style="color:${getColor(request.name)}">

                    ${(request.name || "").toUpperCase()}

                </div>

                <div class="artist">

                    ${(request.artist || "").toUpperCase()}

                </div>

                <div class="song">

                    ${request.song || ""}

                </div>

            `;

            feed.appendChild(card);

        });

});
