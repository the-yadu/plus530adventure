function f(e){switch(e){case"car":return"/car-tours";case"motorcycle":return"/motorcycle-tours";case"hiking":return"/hiking";default:return"/car-tours"}}const i=document.getElementById("search-data-json");let p=[];if(i&&i.textContent)try{p=JSON.parse(i.textContent)}catch(e){console.error("Failed to parse search data",e)}const L=document.getElementById("mobile-menu-button"),x=document.getElementById("mobile-menu"),v=document.getElementById("menu-icon-open"),y=document.getElementById("menu-icon-close");L?.addEventListener("click",()=>{x?.classList.toggle("hidden"),v?.classList.toggle("hidden"),y?.classList.toggle("hidden")});const E=document.getElementById("mobile-search-toggle"),u=document.getElementById("mobile-search-bar"),c=document.getElementById("mobile-search-input");E?.addEventListener("click",()=>{u?.classList.toggle("hidden"),u?.classList.contains("hidden")||c?.focus()});function h(e,n,r){const a=e.trim().toLowerCase();if(!a){r.classList.add("hidden"),n.innerHTML="";return}const l=p.filter(t=>t.title.toLowerCase().includes(a)||t.description.toLowerCase().includes(a)||t.highlights.toLowerCase().includes(a)||t.duration.toLowerCase().includes(a)||t.price.toLowerCase().includes(a));l.length===0?n.innerHTML=`
        <div class="p-4 text-center text-sm text-gray-500">
          No adventures found matching "<span class="font-semibold text-gray-700">${e}</span>"
        </div>
      `:n.innerHTML=l.map(t=>`
          <a
            href="${f(t.type)}/${t.slug}"
            class="flex items-center space-x-3 p-3 hover:bg-orange-50 transition-colors duration-150 group"
          >

            <img
              src="${t.image}"
              alt="${t.title}"
              class="w-14 h-14 object-cover rounded-xl flex-shrink-0 group-hover:scale-105 transition-transform"
            />
            <div class="flex-1 min-w-0">
              <h4 class="text-sm font-bold text-gray-900 group-hover:text-orange-600 truncate">${t.title}</h4>
              <p class="text-xs text-gray-500 truncate mt-0.5">${t.description}</p>
              <div class="flex items-center space-x-3 mt-1 text-xs">
                <span class="text-orange-600 font-semibold">${t.duration}</span>
                <span class="text-gray-300">•</span>
                <span class="text-gray-900 font-bold">${t.price} <span class="text-[10px] font-normal text-gray-500">(Double Sharing)</span></span>
              </div>
            </div>
          </a>
        `).join(""),r.classList.remove("hidden")}const d=document.getElementById("desktop-search-input"),m=document.getElementById("desktop-search-results"),s=document.getElementById("desktop-search-dropdown");d&&m&&s&&(d.addEventListener("input",e=>{h(e.target.value,m,s)}),d.addEventListener("focus",e=>{e.target.value.trim()&&s.classList.remove("hidden")}));const g=document.getElementById("mobile-search-results"),o=document.getElementById("mobile-search-dropdown");c&&g&&o&&(c.addEventListener("input",e=>{h(e.target.value,g,o)}),c.addEventListener("focus",e=>{e.target.value.trim()&&o.classList.remove("hidden")}));document.addEventListener("click",e=>{const n=e.target;s&&!d?.contains(n)&&!s.contains(n)&&s.classList.add("hidden"),o&&!c?.contains(n)&&!o.contains(n)&&o.classList.add("hidden")});document.addEventListener("keydown",e=>{e.key==="Escape"&&(s?.classList.add("hidden"),o?.classList.add("hidden"))});
