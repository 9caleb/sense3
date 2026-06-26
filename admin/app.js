// =========================
// app.js
// =========================

import { listenRequests } from "./firebase.js";

import { renderRequests } from "./render/render.js";

import { bindActions } from "./actions.js";

import {

    sortRequests,

    filterRequests

} from "./render/utils.js";

// =========================
// State
// =========================

let requests=[];

let currentTab="all";

// =========================
// Init
// =========================

init();

function init(){

    bindActions();

    bindTabs();

    listenRequests((data)=>{

        requests=data;

        refresh();

    });

}

// =========================
// Refresh
// =========================

function refresh(){

    let result=sortRequests(requests);

    result=filterRequests(result,currentTab);

    renderRequests(result);

    updateStats(result);

}

// =========================
// Tabs
// =========================

function bindTabs(){

    document.querySelectorAll(".tab").forEach(tab=>{

        tab.addEventListener("click",()=>{

            document
            .querySelectorAll(".tab")
            .forEach(t=>t.classList.remove("active"));

            tab.classList.add("active");

            currentTab=tab.dataset.tab;

            refresh();

        });

    });

}

// =========================
// Header Stats
// =========================

function updateStats(list){

    const pending=list.filter(r=>r.status==="pending").length;

    const approved=list.filter(r=>r.status==="approved").length;

    const rejected=list.filter(r=>r.status==="rejected").length;

    const total=list.length;

    setText("totalRequests",total);

    setText("pendingRequests",pending);

    setText("approvedRequests",approved);

    setText("rejectedRequests",rejected);

}

// =========================
// Helper
// =========================

function setText(id,value){

    const el=document.getElementById(id);

    if(el){

        el.textContent=value;

    }

}
