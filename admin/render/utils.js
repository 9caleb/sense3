// =========================
// utils.js
// =========================

// =========================
// Sort Requests
// Order:
//
// 1. Pending
// 2. Approved
// 3. Rejected
//
// Same status:
// Newest first
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

        const timeA=getTimestamp(a.createdAt);

        const timeB=getTimestamp(b.createdAt);

        return timeB-timeA;

    });

}

// =========================
// Filter
// =========================

export function filterRequests(requests,tab){

    switch(tab){

        case "pending":

            return requests.filter(
                r=>r.status==="pending"
            );

        case "approved":

            return requests.filter(
                r=>r.status==="approved"
            );

        case "rejected":

            return requests.filter(
                r=>r.status==="rejected"
            );

        default:

            return requests;

    }

}

// =========================
// Timestamp
// =========================

export function getTimestamp(timestamp){

    if(!timestamp){

        return 0;

    }

    if(timestamp.toDate){

        return timestamp
            .toDate()
            .getTime();

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
