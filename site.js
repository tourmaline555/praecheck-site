(function(){
 const c=window.PRAECHECK_SITE||{};
 const set=(s,v)=>document.querySelectorAll(s).forEach(e=>{if(v)e.textContent=v});
 set("[data-company]",c.companyName);set("[data-price]",c.price);set("[data-licence]",c.licenceLabel);set("[data-office]",c.registeredOffice);set("[data-company-number]",c.companyNumber);
 document.querySelectorAll("[data-email]").forEach(e=>{const v=c.contactEmail||"";e.textContent=v;if(e.tagName==="A"&&v&&!v.includes("REPLACE-"))e.href="mailto:"+v});
 document.querySelectorAll("[data-checkout]").forEach(e=>{const u=c.checkoutUrl||"";if(/^https?:\/\//i.test(u)){e.href=u;e.removeAttribute("aria-disabled");e.textContent="Buy Praecheck"}else{e.href="#pricing";e.setAttribute("aria-disabled","true");e.textContent="Checkout coming soon"}});
 set("[data-year]",String(new Date().getFullYear()));
})();
