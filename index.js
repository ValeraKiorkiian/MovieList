import{S as d,a as n,i as M}from"./assets/vendor-B_8cOpVV.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function $(){new d(".upcomingMoviesSwiper",{direction:"vertical",autoplay:{delay:5e3},loop:!0,pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,i){return`<span class="${i}">${e+1}</span>`}}})}function L(){new d(".featuredMoviesSwiper",{slidesPerView:4,spaceBetween:80,loop:!0,navigation:{nextEl:".featured-swiper-next",prevEl:".featured-swiper-prev"}})}function S(){new d(".newArrivalMoviesSwiper",{slidesPerView:4,spaceBetween:80,loop:!0,navigation:{nextEl:".new-arrival-swiper-next",prevEl:".new-arrival-swiper-prev"}})}const m="/movie-list/assets/vite-logo-9o_aqrTe.png",x=document.querySelector(".upcomingmovies-list"),p=document.querySelector(".user-movies-list"),b=document.querySelector(".new-arrival-movies-list"),q=document.querySelector(".featuredmovies-list");function A(e){const i=e.map(({backdrop_path:s,original_title:o,overview:t,vote_average:r})=>`
 <li class="swiper-slide hero-swiper-slide">
<div class="container">
  <div class="text-container">
        <h1 class="hero-movie-title">${o}</h1>
        <span class="hero-movie-average">${r.toFixed(1)}/10</span>
        <p class="hero-movie-text">${t.slice(0,450)}</p>
        <a href="" class="hero-movie-link">Watch trailer</a>
        </div>
      </div>
        <img
          class="hero-img"
          src="https://image.tmdb.org/t/p/original/${s}"
        />
      </li>   `).join("");x.innerHTML=i,$()}function T(e){const i=e.map(({title:s,vote_average:o,poster_path:t,release_date:r})=>`
    <li class="swiper-slide featured-swiper-slide">
    ${t?`<img class="featuredList-img"
        src="https://image.tmdb.org/t/p/w500/${t}" 
        width="250" 
        height="370"
        alt="${s}"
        />`:`<img
          class="featuredList-img"
          src="${m}"
          width="250"
          height="370"
          alt="Default Image"
        />`}

        <div class="featured-text-container">
        <h3 class="featured-movie-title">${s}</h3>
        <p class="featured-movie-average">Average: ${o.toFixed(1)}/10</p>
        <p class="featured-movie-text">Release: ${r}</p>
 </li>`).join("");q.innerHTML=i,L()}function v(e){const i=e.map(({title:s,vote_average:o,poster_path:t,release_date:r})=>`
    <li class="user-movies-item">
<img class="user-movies-img"src="https://image.tmdb.org/t/p/w500/${t}" width="250" height="370"
        />
        <div class="user-movies-text-container">
        <h3 class="user-movies-title">${s}</h3>
        <p class="user-movies-average">Average: ${o.toFixed(1)}/10</p>
        <p class="user-movies-text">Release: ${r}</p>
 </li>`).join("");p.insertAdjacentHTML("beforeend",i)}function E(e){const i=e.map(({title:s,vote_average:o,poster_path:t,release_date:r})=>`
    <li class="swiper-slide featured-swiper-slide">
    ${t?`<img class="featuredList-img"
        src="https://image.tmdb.org/t/p/w500/${t}" 
        width="250" 
        height="370"
        alt="${s}"
        />`:`<img
          class="featuredList-img"
          src="${m}"
          width="250"
          height="370"
          alt="Default Image"
        />`}

        <div class="featured-text-container">
        <h3 class="featured-movie-title">${s}</h3>
        <p class="featured-movie-average">Average: ${o.toFixed(1)}/10</p>
        <p class="featured-movie-text">Release: ${r}</p>
 </li>`).join("");b.innerHTML=i,S()}function k(){p.innerHTML=""}const c="5492cdd75627c83efb1990fb79e6e1c0";async function F(){const{data:e}=await n(`https://api.themoviedb.org/3/movie/upcoming?api_key=${c}`);return e}async function O(){const{data:e}=await n(`https://api.themoviedb.org/3/movie/popular?api_key=${c}`);return e}async function f(e,i=1){const{data:s}=await n(`https://api.themoviedb.org/3/search/movie?api_key=${c}`,{params:{query:e,page:i}});return console.log(s),s}async function P(){const{data:e}=await n(`https://api.themoviedb.org/3/movie/now_playing?api_key=${c}`);return e}const _={message:"Sorry, there are no movies matching your search query. Please try again",position:"topRight",messageColor:"#fff",backgroundColor:"#ef4040",theme:"dark",maxWidth:"432px"},g=document.querySelector(".header-form"),B=document.querySelector(".user-movies-btn"),h=document.querySelector(".featured"),w=document.querySelector(".user-movies"),y=document.querySelector(".new-arrival-movies"),N=document.querySelector(".show-more-btn");let u="",a=1;async function j(){try{const{results:e}=await F(),i=e.slice(0,5);A(i)}catch(e){console.log(e)}try{const{results:e}=await O();T(e)}catch(e){console.log(e)}try{const{results:e}=await P();E(e)}catch(e){console.log(e)}}async function C(e){e.preventDefault(),a=1,k();try{u=e.currentTarget.elements.headerSearch.value.trim();const{results:i,total_results:s}=await f(u,a);if(!i||i.length===0){M.show(_);return}h.style.display="none",y.style.display="none",w.classList.remove("hiden"),v(i)}catch(i){console.log(i)}finally{g.reset()}}function D(){w.classList.add("hiden"),h.style.display="flex",y.style.display="flex"}async function H(){a++;try{const{results:e,total_results:i,total_page:s}=await f(u,a);v(e)}catch(e){console.log(e)}}document.addEventListener("DOMContentLoaded",j);g.addEventListener("submit",C);B.addEventListener("click",D);N.addEventListener("click",H);
//# sourceMappingURL=index.js.map
