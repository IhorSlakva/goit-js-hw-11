import{i as u,S as d}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const h=document.querySelector(".form"),a=document.querySelector(".gallery"),l=document.querySelector(".loader");l.style.display="none";const c={key:"42200022-9c7e7676f0f903944c054771a",image_type:"photo",orientation:"horizontal",safesearch:"true",q:""};h.addEventListener("submit",r=>{r.preventDefault(),l.style.display="block",a.innerHTML="";const t=r.target.elements.input.value;c.q=t,f().then(s=>p(s)).catch(s=>console.log(s)),r.target.reset()});function f(){const r=new URLSearchParams(c);return fetch(`https://pixabay.com/api/?${r}`).then(t=>{if(t.ok)return t.json();throw new Error(t.status)})}function p(r){if(r.hits.length===0)u.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#EF4040",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"});else{const t=r.hits.map(n=>`<a class="gallery-link" href="${r.largeImageURL}">
        <img class="gallery-image"
        src="${n.webformatURL}"
        alt="${n.tags}"
         </a>
        <div class="img-content">
        <div>
        <h3>Likes</h3>
        <p>${n.likes}</p>
        </div>

        <div>
        <h3>Views</h3>
        <p>${n.views}</p>
        </div>

        <div>
        <h3>Comments</h3>
        <p>${n.comments}</p>
        </div>

        <div>
        <h3>Downloads</h3>
        <p>${n.downloads}</p>
        </div>
        </div>
        `).join("");a.innerHTML=t,new d(".gallery-link").refresh()}l.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map