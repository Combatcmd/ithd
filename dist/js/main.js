document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".input-file"),t=document.querySelector(".input-file__selected"),n=document.querySelector(".input-file__remove"),c="";null==e||e.addEventListener("change",(function(o){var i=o.target.value;(c=i.split("\\").pop())&&(t.innerHTML=c,n.classList.remove("hidden"),n.addEventListener("click",(function(){n.classList.add("hidden"),e.value="",t.innerHTML=""})))}));var o=document.querySelector(".modal__container"),i=document.querySelector(".modal"),r=document.querySelectorAll(".project__container"),d=document.querySelector(".modal .close");r.forEach((function(e){e.addEventListener("click",(function(){o.classList.add("show")}))})),d.addEventListener("click",(function(){o.classList.remove("show")})),o.addEventListener("click",(function(){o.classList.remove("show")})),i.addEventListener("click",(function(e){return e.stopPropagation()}));var l=document.querySelectorAll(".animate");setTimeout((function(){l[0].classList.add("reveal")}),500),setTimeout((function(){l[1].classList.add("reveal")}),800);var u=document.querySelector(".bg");document.addEventListener("scroll",(function(){window.scrollY>250&&u.setAttribute("style","opacity: 1"),window.scrollY<250&&u.setAttribute("style","opacity: 0")}));var a=document.querySelector(".nav__mobile"),s=document.querySelector("#toggle");a.addEventListener("click",(function(){s.checked=!s.checked}))}));