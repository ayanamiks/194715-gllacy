var show=document.querySelector(".address-link"),popup=document.querySelector(".modal-feedback"),close=popup.querySelector(".modal-close"),login=popup.querySelector("[name=login]");show.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),login.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show")});