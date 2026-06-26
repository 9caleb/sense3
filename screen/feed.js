// =========================
// screen/feed.js
// =========================

import { listenApproved } from "./firebase.js";

const feed = document.getElementById("feed");

const MAX_REQUESTS = 5;

// =========================
// Name Color
// =========================

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

const colorMap={};

let colorIndex=0;

function getColor(name){

    if(!colorMap[name]){

        colorMap[name]=colors[colorIndex%colors.length];

        colorIndex++;

    }

    return colorMap[name];

}

// =========================
// Smooth Marquee
// =========================

function startMarquee(song,songText){

    const distance=songText.scrollWidth-song.clientWidth;

    if(distance<=0) return;

    let direction=1;

    let position=0;

    let pauseUntil=performance.now()+2000;

    const speed=30;

    let last=performance.now();

    function animate(now){

        const dt=(now-last)/1000;

        last=now;

        if(now>=pauseUntil){

            position+=direction*speed*dt;

            if(position>=distance){

                position=distance;

                direction=-1;

                pauseUntil=now+2000;

            }

            if(position<=0){

                position=0;

                direction=1;

                pauseUntil=now+2000;

            }

            songText.style.transform=`translateX(${-position}px)`;

        }

        requestAnimationFrame(animate);

    }

    requestAnimationFrame(animate);

}

// =========================
// Render
// =========================

listenApproved((requests)=>{

    feed.innerHTML="";

    requests
        .slice(0,MAX_REQUESTS)
        .forEach((request)=>{

            const card=document.createElement("div");

            card.className="request";

            card.innerHTML=`

                <div
                    class="name"
                    style="color:${getColor(request.name)}">

                    ${(request.name||"").toUpperCase()}

                </div>

                <div class="artist">

                    ${(request.artist||"").toUpperCase()}

                </div>

                <div class="song">

                    <span class="songText">

                        ${request.song||""}

                    </span>

                </div>

            `;

            feed.appendChild(card);

            const song=card.querySelector(".song");

            const songText=card.querySelector(".songText");

            requestAnimationFrame(()=>{

                startMarquee(song,songText);

            });

        });

});
