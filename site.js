(function(){
  "use strict";
  const c=window.PRAECHECK_SITE||{};
  const set=(s,v)=>document.querySelectorAll(s).forEach(e=>{if(v)e.textContent=v});
  set("[data-company]",c.companyName);set("[data-price]",c.price);set("[data-licence]",c.licenceLabel);set("[data-office]",c.registeredOffice);set("[data-company-number]",c.companyNumber);
  document.querySelectorAll("[data-email]").forEach(e=>{const v=c.contactEmail||"";e.textContent=v;if(e.tagName==="A"&&v&&!v.includes("REPLACE-"))e.href="mailto:"+v});
  document.querySelectorAll("[data-checkout]").forEach(e=>{const u=c.checkoutUrl||"";if(/^https?:\/\//i.test(u)){e.href=u;e.removeAttribute("aria-disabled");e.textContent="Buy Praecheck"}else{e.href="#pricing";e.setAttribute("aria-disabled","true");e.textContent="Checkout coming soon"}});
  set("[data-year]",String(new Date().getFullYear()));

  const toggle=document.querySelector(".menu-toggle");
  const menu=document.getElementById("mobile-nav");
  if(toggle&&menu){
    const closeMenu=()=>{toggle.setAttribute("aria-expanded","false");toggle.setAttribute("aria-label","Open menu");menu.classList.remove("open");document.body.classList.remove("menu-open")};
    const openMenu=()=>{toggle.setAttribute("aria-expanded","true");toggle.setAttribute("aria-label","Close menu");menu.classList.add("open");document.body.classList.add("menu-open")};
    toggle.addEventListener("click",()=>toggle.getAttribute("aria-expanded")==="true"?closeMenu():openMenu());
    menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeMenu));
    document.addEventListener("keydown",e=>{if(e.key==="Escape")closeMenu()});
    window.addEventListener("resize",()=>{if(window.innerWidth>900)closeMenu()});
  }
})();
