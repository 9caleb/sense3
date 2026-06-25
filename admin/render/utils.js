// =========================
// utils.js
// =========================

// =========================
// Sort Requests
// Priority:
//
// 1. Pending
// 2. Highest Tip
// 3. Newest
// 4. Approved
// 5. Rejected
// =========================

export function sortRequests(requests){

    return [...requests].sort((a,b)=>{

        const statusOrder={

            pending:0,

            approved:1,

            rejected:2

        };

        const sa=statusOrder[a.status] ?? 9;

        const sb=statusOrder[b.status] ?? 9;

        if(sa!==sb){

            return sa-sb;

        }

        const tipA=Number(a.tipAmount)||0;

        const tipB=Number(b.tipAmount)||0;

        if(tipA!==tipB){

            return tipB-tipA;

        }

        const timeA=getTimestamp(a.createdAt);

        const timeB=getTimestamp(b.createdAt);

        return timeB-timeA;

    });

}

// =========================
// Filter Tab
// =========================

export function filterRequests(requests,tab){

    switch(tab){

        case "pending":

            return requests.filter(r=>r.status==="pending");

        case "approved":

            return requests.filter(r=>r.status==="approved");

        case "rejected":

            return requests.filter(r=>r.status==="rejected");

        case "tips":

            return requests.filter(r=>(Number(r.tipAmount)||0)>0);

        default:

            return requests;

    }

}

// =========================
// Timestamp
// =========================

export function getTimestamp(timestamp){

    if(!timestamp) return 0;

    if(timestamp.toDate){

        return timestamp.toDate().getTime();

    }

    return Number(timestamp)||0;

}

// =========================
// Status Text
// =========================

export function getStatusText(status){

    switch(status){

        case "approved":

            return "Approved";

        case "rejected":

            return "Rejected";

        default:

            return "Pending";

    }

}

// =========================
// Format Currency
// =========================

export function formatRM(amount){

    const value=Number(amount)||0;

    return `RM${value}`;

}

// =========================
// Payment Text
// =========================

export function paymentLabel(type){

    return type==="cash"

        ? "Cash"

        : "QR";

}
