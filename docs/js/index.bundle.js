!function(){"use strict";window.addEventListener("DOMContentLoaded",(()=>{!function(){const t=document.querySelector("#taskInput"),e=document.querySelector("#form"),n=document.querySelector("#tasksList");document.querySelector("#emptyList");let i=[];function s(){if(0==i.length){const t='\n\t\t\t<li id="emptyList" class="list-group-item empty-list">\n\t\t\t\t<img src="./img/icons/leaf.svg" alt="Empty" width="48" class="mt-3">\n\t\t\t\t<div class="empty-list__title">Список дел пуст</div>\n\t\t\t</li>\n\t\t\t';n.insertAdjacentHTML("afterbegin",t)}else{const t=document.querySelector("#emptyList");t&&t.remove()}}function o(){localStorage.setItem("tasks",JSON.stringify(i))}function a(t){const e=t.done?"task-title task-title--done":"task-title",i=`\n\t\t\t\t<li id = '${t.id}' class="list-group-item d-flex justify-content-between task-item">\n\t\t\t\t\t\t<span class="${e}"> ${t.text}</span>\n\t\t\t\t\t\t<div class="task-item__buttons">\n\t\t\t\t\t\t\t<button type="button" data-action="done" class="btn-action">\n\t\t\t\t\t\t\t\t<img src="./img/icons/tick.svg" alt="Done" width="18" height="18">\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button type="button" data-action="delete" class="btn-action">\n\t\t\t\t\t\t\t\t<img src="./img/icons/cross.svg" alt="Done" width="18" height="18">\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t`;n.insertAdjacentHTML("beforeend",i)}localStorage.getItem("tasks")&&(i=JSON.parse(localStorage.getItem("tasks")),i.forEach((t=>a(t)))),s(),e.addEventListener("submit",(function(e){e.preventDefault();const n=t.value,c={id:Date.now(),text:n,done:!1};i.push(c),o(),a(c),t.value="",t.focus(),s()})),n.addEventListener("click",(function(t){if("delete"!==t.target.dataset.action)return;const e=t.target.closest(".list-group-item"),n=Number(e.id);i=i.filter((t=>t.id!=n)),o(),e.remove(),s()})),n.addEventListener("click",(function(t){if("done"!==t.target.dataset.action)return;const e=t.target.closest(".list-group-item"),n=Number(e.id),s=i.find((t=>{if(t.id==n)return!0}));s.done=!s.done,o(),e.querySelector(".task-title").classList.toggle("task-title--done")}))}()}))}();