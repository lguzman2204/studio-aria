// Simple mobile nav highlight
const path = location.pathname.replace(/\/$/, "");
document.querySelectorAll('[data-nav]').forEach(a=>{
  const href = a.getAttribute('href').replace(/\/$/, "");
  if(href === path || (href === '/' && (path===''||path==='/'))) a.classList.add('active');
});

// Fake price calc on pricing page
const calc = document.querySelector('#calc');
if(calc){
  const sitePages = calc.querySelector('#pages');
  const aiMinutes = calc.querySelector('#minutes');
  const out = calc.querySelector('#est');
  const calcPrice = () => {
    const base = 399;
    const perPage = 60 * Math.max(0, +sitePages.value - 3);
    const ai = Math.ceil(+aiMinutes.value/500)*49;
    out.textContent = `$${(base + perPage + ai).toLocaleString()}`;
  };
  sitePages.addEventListener('input', calcPrice);
  aiMinutes.addEventListener('input', calcPrice);
  calcPrice();
}
