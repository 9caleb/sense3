// =========================
// cardUI.js
// =========================

// =========================
// Tip
// =========================

export function renderTip(request){

    if((request.tipAmount||0)<=0){

        return "";

    }

    return `

        <div class="tip">

            🔥 RM${request.tipAmount}

        </div>

    `;

}

// =========================
// Payment
// =========================

export function renderPayment(request){

    if((request.tipAmount||0)<=0){

        return "";

    }

    if(request.paymentType==="cash"){

        return `

            <div class="payment">

                <span class="badge cash">

                    CASH

                </span>

            </div>

            <div class="verify">

                Please verify with Customer Manager.

            </div>

        `;

    }

    return `

        <div class="payment">

            <span class="badge qr">

                QR

            </span>

        </div>

    `;

}

// =========================
// Receipt
// =========================

export function renderReceipt(request){

    if(request.paymentType!=="qr"){

        return "";

    }

    if(!request.receipt){

        return "";

    }

    return `

        <button

            class="view"

            data-action="receipt"

            data-url="${request.receipt}"

        >

            👁 Receipt

        </button>

    `;

}

// =========================
// Status
// =========================

export function renderStatus(request){

    const status=request.status||"pending";

    return `

        <div class="badge ${status}">

            ${status.toUpperCase()}

        </div>

    `;

}

// =========================
// Time
// =========================

export function formatTime(timestamp){

    if(!timestamp){

        return "--";

    }

    if(timestamp.toDate){

        return timestamp
        .toDate()
        .toLocaleTimeString([],{

            hour:"2-digit",

            minute:"2-digit"

        });

    }

    return "--";

}

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

export function getNameColor(name){

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
