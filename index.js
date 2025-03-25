import{S as u,a,i as b}from"./assets/vendor-DTcMfPqp.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();function x(){new u(".upcomingMoviesSwiper",{direction:"vertical",autoplay:{delay:5e3},loop:!0,pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,t){return`<span class="${t}">${e+1}</span>`}}})}function q(){new u(".featuredMoviesSwiper",{slidesPerView:4,spaceBetween:80,loop:!0,navigation:{nextEl:".featured-swiper-next",prevEl:".featured-swiper-prev"}})}function E(){new u(".newArrivalMoviesSwiper",{slidesPerView:4,spaceBetween:80,loop:!0,navigation:{nextEl:".new-arrival-swiper-next",prevEl:".new-arrival-swiper-prev"}})}const p="/movie-list/assets/vite-logo-9o_aqrTe.png",A=document.querySelector(".upcomingmovies-list"),v=document.querySelector(".user-movies-list"),k=document.querySelector(".new-arrival-movies-list"),T=document.querySelector(".featuredmovies-list");function B(e){const t=e.map(({backdrop_path:i,original_title:r,overview:s,vote_average:o})=>`
 <li class="swiper-slide hero-swiper-slide">
<div class="container">
  <div class="text-container">
        <h1 class="hero-movie-title">${r}</h1>
        <span class="hero-movie-average">${o.toFixed(1)}/10</span>
        <p class="hero-movie-text">${s.slice(0,450)}</p>
        <a href="" class="hero-movie-link">Watch trailer</a>
        </div>
      </div>
        <img
          class="hero-img"
          src="https://image.tmdb.org/t/p/original/${i}"
        />
      </li>   `).join("");A.innerHTML=t,x()}function F(e){const t=e.map(({title:i,vote_average:r,poster_path:s,release_date:o})=>`
    <li class="swiper-slide featured-swiper-slide">
    ${s?`<img class="featuredList-img"
        src="https://image.tmdb.org/t/p/w500/${s}" 
        width="250" 
        height="370"
        alt="${i}"
        />`:`<img
          class="featuredList-img"
          src="${p}"
          width="250"
          height="370"
          alt="Default Image"
        />`}

        <div class="featured-text-container">
        <h3 class="featured-movie-title">${i}</h3>
        <p class="featured-movie-average">Average: ${r.toFixed(1)}/10</p>
        <p class="featured-movie-text">Release: ${o}</p>
 </li>`).join("");T.innerHTML=t,q()}function g(e){const t=e.map(({title:i,vote_average:r,poster_path:s,release_date:o})=>`
    <li class="user-movies-item">
<img class="user-movies-img"src="https://image.tmdb.org/t/p/w500/${s}" width="250" height="370"
        />
        <div class="user-movies-text-container">
        <h3 class="user-movies-title">${i}</h3>
        <p class="user-movies-average">Average: ${r.toFixed(1)}/10</p>
        <p class="user-movies-text">Release: ${o}</p>
 </li>`).join("");v.insertAdjacentHTML("beforeend",t)}function O(e){const t=e.map(({title:i,vote_average:r,poster_path:s,release_date:o})=>`
    <li class="swiper-slide featured-swiper-slide">
    ${s?`<img class="featuredList-img"
        src="https://image.tmdb.org/t/p/w500/${s}" 
        width="250" 
        height="370"
        alt="${i}"
        />`:`<img
          class="featuredList-img"
          src="${p}"
          width="250"
          height="370"
          alt="Default Image"
        />`}

        <div class="featured-text-container">
        <h3 class="featured-movie-title">${i}</h3>
        <p class="featured-movie-average">Average: ${r.toFixed(1)}/10</p>
        <p class="featured-movie-text">Release: ${o}</p>
 </li>`).join("");k.innerHTML=t,E()}function P(){v.innerHTML=""}const c="5492cdd75627c83efb1990fb79e6e1c0";async function _(){const{data:e}=await a(`https://api.themoviedb.org/3/movie/upcoming?api_key=${c}`);return e}async function f(){const{data:e}=await a(`https://api.themoviedb.org/3/movie/popular?api_key=${c}`);return e}async function h(e,t=1){const{data:i}=await a(`https://api.themoviedb.org/3/search/movie?api_key=${c}`,{params:{query:e,page:t}});return console.log(i),i}async function I(){const{data:e}=await a(`https://api.themoviedb.org/3/movie/now_playing?api_key=${c}`);return e}async function N(){const{results:e}=await f();e.forEach(t=>{console.log(t.id)})}N();const j={message:"Sorry, there are no movies matching your search query. Please try again",position:"topRight",messageColor:"#fff",backgroundColor:"#ef4040",theme:"dark",maxWidth:"432px"},y=document.querySelector(".header-form"),C=document.querySelector(".user-movies-btn"),w=document.querySelector(".featured"),M=document.querySelector(".user-movies"),L=document.querySelector(".new-arrival-movies"),D=document.querySelector(".show-more-btn"),H=document.querySelector(".header-sign-btn"),R=document.querySelector(".modal-close-btn"),m=document.querySelector(".modal-overlay");let d="",n=1;async function U(){try{const{results:e}=await _(),t=e.slice(0,5);B(t)}catch(e){console.log(e)}try{const{results:e}=await f();F(e)}catch(e){console.log(e)}try{const{results:e}=await I();O(e)}catch(e){console.log(e)}}async function z(e){e.preventDefault(),n=1,P();try{d=e.currentTarget.elements.headerSearch.value.trim();const{results:t,total_results:i}=await h(d,n);if(!t||t.length===0){b.show(j),S();return}w.style.display="none",L.style.display="none",M.classList.remove("hiden"),g(t)}catch(t){console.log(t)}finally{y.reset()}}function S(){M.classList.add("hiden"),w.style.display="flex",L.style.display="flex"}async function K(){n++;try{const{results:e,total_results:t,total_page:i}=await h(d,n);g(e)}catch(e){console.log(e)}}function $(){m.classList.toggle("is-open"),m.classList.contains("is-open")?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll")}document.addEventListener("DOMContentLoaded",U);y.addEventListener("submit",z);C.addEventListener("click",S);D.addEventListener("click",K);H.addEventListener("click",$);R.addEventListener("click",$);
//# sourceMappingURL=index.js.map
