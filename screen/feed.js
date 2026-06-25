// =========================
// screen/feed.js
// =========================

import { listenApproved } from "./firebase.js";

const feed = document.getElementById("feed");

// =========================
// Name Color
// =========================

const colors = [

    "#ff4d6d",

    "#4da6ff",

    "#b84dff",

    "#ff944d",

    "#4dff88",

    "#ffd24d"

];

const colorMap = {};

let colorIndex = 0;

function getColor(name){

    if(!colorMap[name]){

        colorMap[name]=colors[colorIndex%colors.length];

        colorIndex++;

    }

    return colorMap[name];

}

// =========================
// Render
// =========================

listenApproved((requests)=>{

    feed.innerHTML="";

    requests.sort(

        (a,b)=>

        (Number(b.tipAmount)||0)-

        (Number(a.tipAmount)||0)

    );

    requests.forEach(request=>{

        const div=document.createElement("div");

        div.className="request";

        div.innerHTML=`

            <div class="name">

                <span style="color:${getColor(request.name)}">

                    ${request.name}

                </span>

            </div>

            <div class="song">

                ${request.artist} - ${request.song}

            </div>

            ${

                Number(request.tipAmount)>0

                ?

                `<div class="tip">

                    🔥 RM${request.tipAmount} TIP

                </div>`

                :

                ""

            }

        `;

        feed.appendChild(div);

    });

});
