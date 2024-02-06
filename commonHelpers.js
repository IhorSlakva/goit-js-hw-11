import{i as u,S as d}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const h=document.querySelector(".form"),a=document.querySelector(".gallery"),l=document.querySelector(".loader");l.style.display="none";const c={key:"42200022-9c7e7676f0f903944c054771a",image_type:"photo",orientation:"horizontal",safesearch:!0,q:""};h.addEventListener("submit",s=>{s.preventDefault(),l.style.display="block";const o=s.target.elements.input.value;c.q=o,f().then(n=>p(n)).catch(n=>console.log(n)),s.target.reset()});function f(){const s=new URLSearchParams(c);return fetch(`https://pixabay.com/api/?${s}`).then(o=>{if(o.ok)return o.json();throw new Error(o.status)})}function p(s){if(s.hits.length===0)u.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#EF4040",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"}),a.innerHTML="";else{const n=s.hits.map(r=>`<a class="gallery-link" href="${r.largeImageURL}">
        <img class="gallery-image"
        src="${r.webformatURL}"
        alt="${r.tags}"
         </a>
        <div class="img-content">
        <div>
        <h3>Likes</h3>
        <p>${r.likes}</p>
        </div>

        <div>
        <h3>Views</h3>
        <p>${r.views}</p>
        </div>

        <div>
        <h3>Comments</h3>
        <p>${r.comments}</p>
        </div>

        <div>
        <h3>Downloads</h3>
        <p>${r.downloads}</p>
        </div>
        </div>
        `).join("");a.innerHTML=n}new d(".gallery-link").refresh(),l.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
