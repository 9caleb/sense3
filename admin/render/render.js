// =========================
// render.js
// =========================

import { createCard } from "./card.js";

const list = document.getElementById("list");

// =========================
// Render Requests
// =========================

export function renderRequests(requests) {

    if (!list) return;

    list.innerHTML = "";

    requests.forEach(request => {

        const card = createCard(request);

        list.appendChild(card);

    });

}

// =========================
// Clear List
// =========================

export function clearRequests() {

    if (!list) return;

    list.innerHTML = "";

}
