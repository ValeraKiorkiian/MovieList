import{S as d,a as n,i as k}from"./assets/vendor-BLg9eZON.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();const E=new d(".upcomingMoviesSwiper",{direction:"vertical",autoplay:{delay:5e3},loop:!0,pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,t){return`<span class="${t}">${e+1}</span>`}}});new d(".featuredMoviesSwiper",{slidesPerView:4,spaceBetween:80,loop:!0,navigation:{nextEl:".featured-swiper-next",prevEl:".featured-swiper-prev"}});new d(".newArrivalMoviesSwiper",{slidesPerView:4,spaceBetween:80,loop:!0,navigation:{nextEl:".new-arrival-swiper-next",prevEl:".new-arrival-swiper-prev"}});new d(".videosSwiper",{slidesPerView:2.6,spaceBetween:48,loop:!0,navigation:{nextEl:".videos-swiper-next",prevEl:".videos-swiper-prev"}});new d(".actorsSwiper",{slidesPerView:4,spaceBetween:80,loop:!0,navigation:{nextEl:".actors-swiper-next",prevEl:".actors-swiper-prev"}});const g="/movie-list/assets/vite-logo-9o_aqrTe.png",a={upcomingList:document.querySelector(".upcomingmovies-list"),userList:document.querySelector(".user-movies-list"),newArrivalList:document.querySelector(".new-arrival-movies-list"),featuredList:document.querySelector(".featuredmovies-list"),videoList:document.querySelector(".video-list"),actorsList:document.querySelector(".actors-list")};function A(e){const t=e.map(({backdrop_path:o,original_title:r,overview:s,vote_average:i})=>`
      
 <li class="swiper-slide hero-swiper-slide">
<div class="container">
  <div class="text-container">
        <h1 class="hero-movie-title">${r}</h1>
        <span class="hero-movie-average">${i.toFixed(1)}/10</span>
        <p class="hero-movie-text">${s.slice(0,450)}</p>
        <a href="" class="hero-movie-link">Watch trailer</a>
        </div>
      </div>
        <img
          class="hero-img"
          src="https://image.tmdb.org/t/p/original/${o}"
        />
      </li>   `).join("");a.upcomingList.innerHTML=t,E.update()}function T(e){const t=e.map(({title:o,vote_average:r,poster_path:s,release_date:i})=>`
    <li class="swiper-slide featured-swiper-slide">
    ${s?`<img class="featuredList-img"
        src="https://image.tmdb.org/t/p/w500/${s}" 
        width="250" 
        height="370"
        alt="${o}"
        />`:`<img
          class="featuredList-img"
          src="${g}"
          width="250"
          height="370"
          alt="Default Image"
        />`}

        <div class="featured-text-container">
        <h3 class="featured-movie-title">${o}</h3>
        <p class="featured-movie-average">Average: ${r.toFixed(1)}/10</p>
        <p class="featured-movie-text">Release: ${i}</p>
 </li>`).join("");a.featuredList.innerHTML=t}function f(e){const t=e.map(({title:o,vote_average:r,poster_path:s,release_date:i})=>`
    <li class="user-movies-item">
<img class="user-movies-img"src="https://image.tmdb.org/t/p/w500/${s}" width="250" height="370"
        />
        <div class="user-movies-text-container">
        <h3 class="user-movies-title">${o}</h3>
        <p class="user-movies-average">Average: ${r.toFixed(1)}/10</p>
        <p class="user-movies-text">Release: ${i}</p>
 </li>`).join("");a.userList.insertAdjacentHTML("beforeend",t)}function B(e){const t=e.map(({title:o,vote_average:r,poster_path:s,release_date:i})=>`
    <li class="swiper-slide featured-swiper-slide">
    ${s?`<img class="featuredList-img"
        src="https://image.tmdb.org/t/p/w500/${s}" 
        width="250" 
        height="370"
        alt="${o}"
        />`:`<img
          class="featuredList-img"
          src="${g}"
          width="250"
          height="370"
          alt="Default Image"
        />`}

        <div class="featured-text-container">
        <h3 class="featured-movie-title">${o}</h3>
        <p class="featured-movie-average">Average: ${r.toFixed(1)}/10</p>
        <p class="featured-movie-text">Release: ${i}</p>
 </li>`).join("");a.newArrivalList.innerHTML=t}function P(){a.userList.innerHTML=""}function _(e){const t=e.map(({key:o,name:r})=>`
        <li class="swiper-slide video-item">
          <iframe
            src="https://www.youtube-nocookie.com/embed/${o}"
            frameborder="0"
            width="450"
            height="253">
            allow="picture-in-picture"
            allowfullscreen
          </iframe>
          <p class="video-text">${r}</p>
        </li>
       
        `).join("");a.videoList.innerHTML=t}function I(e){const t=e.map(({original_name:o,profile_path:r})=>`
  <li class="swiper-slide actors-item">
  <img class="actors-img"
  src="https://image.tmdb.org/t/p/w500/${r}"
  <p>${o}</p>
  </li>
  `).join("");a.actorsList.innerHTML=t}const c="5492cdd75627c83efb1990fb79e6e1c0";async function F(){const{data:e}=await n(`https://api.themoviedb.org/3/movie/upcoming?api_key=${c}`);return e}async function h(){const{data:e}=await n(`https://api.themoviedb.org/3/movie/popular?api_key=${c}`);return e}async function w(e,t=1){const{data:o}=await n(`https://api.themoviedb.org/3/search/movie?api_key=${c}`,{params:{query:e,page:t}});return console.log(o),o}async function O(){const{data:e}=await n(`https://api.themoviedb.org/3/movie/now_playing?api_key=${c}`);return e}async function j(){const{results:e}=await h(),o=e.map(i=>i.id).map(i=>n.get(`https://api.themoviedb.org/3/movie/${i}/videos?api_key=${c}&language=en-US`));return(await Promise.all(o)).reduce((i,l)=>{const m=l.data.results.find(q=>q.type==="Trailer");return m&&i.push(m),i},[]).slice(0,8)}async function H(){const{data:e}=await n.get(`https://api.themoviedb.org/3/person/popular?api_key=${c}&language=ru-RU&page=1`);return e}const R={message:"Sorry, there are no movies matching your search query. Please try again",position:"topRight",messageColor:"#fff",backgroundColor:"#ef4040",theme:"dark",maxWidth:"432px"},y=document.querySelector(".header-form"),U=document.querySelector(".user-movies-btn"),L=document.querySelector(".featured"),S=document.querySelector(".user-movies"),$=document.querySelector(".new-arrival-movies"),M=document.querySelector(".videos"),C=document.querySelector(".show-more-btn"),N=document.querySelector(".header-sign-btn"),V=document.querySelector(".modal-close-btn"),v=document.querySelector(".modal-overlay");let p="",u=1;async function D(){try{const{results:e}=await F(),t=e.slice(0,5);A(t)}catch(e){console.log(e)}try{const{results:e}=await h();T(e)}catch(e){console.log(e)}try{const{results:e}=await O();B(e)}catch(e){console.log(e)}try{const e=await j();console.log(e),_(e)}catch(e){console.log(e)}try{const{results:e}=await H();console.log(e),I(e.slice(0,15))}catch(e){console.log(e)}}async function z(e){e.preventDefault(),u=1,P();try{p=e.currentTarget.elements.headerSearch.value.trim();const{results:t,total_results:o}=await w(p,u);if(!t||t.length===0){k.show(R),b();return}L.style.display="none",$.style.display="none",S.classList.remove("hiden"),M.style.display="none",f(t)}catch(t){console.log(t)}finally{y.reset()}}function b(){S.classList.add("hiden"),L.style.display="flex",$.style.display="flex",M.style.display="flex"}async function K(){u++;try{const{results:e,total_results:t,total_page:o}=await w(p,u);f(e),document.querySelectorAll(".user-movies-item").length>=t}catch(e){console.log(e)}}function x(){v.classList.toggle("is-open"),v.classList.contains("is-open")?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll")}document.addEventListener("DOMContentLoaded",D);y.addEventListener("submit",z);U.addEventListener("click",b);C.addEventListener("click",K);N.addEventListener("click",x);V.addEventListener("click",x);
//# sourceMappingURL=index.js.map
