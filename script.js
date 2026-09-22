const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu(){toggle.setAttribute('aria-expanded','false');nav.classList.remove('open');}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){closeMenu();toggle.focus();}});
const tabs=[...document.querySelectorAll('[data-tab]')];
function selectTab(name,focus=false){if(!tabs.some(t=>t.dataset.tab===name))return;tabs.forEach(tab=>{const active=tab.dataset.tab===name;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;document.getElementById('panel-'+tab.dataset.tab).hidden=!active;if(active&&focus)tab.focus();});}
tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>selectTab(tab.dataset.tab));tab.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight')next=(index+1)%tabs.length;if(e.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;if(e.key==='Home')next=0;if(e.key==='End')next=tabs.length-1;if(next!==undefined){e.preventDefault();selectTab(tabs[next].dataset.tab,true);}});});
document.querySelectorAll('[data-product-link]').forEach(a=>a.addEventListener('click',()=>selectTab(a.dataset.productLink)));
function syncHash(){const name=location.hash.slice(1);if(['website','crm','reporting'].includes(name)){selectTab(name);document.getElementById(name)?.scrollIntoView({block:'start'});}}
window.addEventListener('hashchange',syncHash);syncHash();
document.getElementById('year').textContent=new Date().getFullYear();
