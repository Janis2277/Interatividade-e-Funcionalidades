import { initRouter } from './router.js';
import { mountHome, mountAbout, mountForm } from './pages.js';

const app = document.getElementById('app');

const routes = {
  '/home': () => mountHome(app),
  '/about': () => mountAbout(app),
  '/form': () => mountForm(app),
  '/404': () => {
    app.innerHTML = '<h2 class="page-title">404 — Página não encontrada</h2><p class="small">Use o menu para voltar.</p>';
  }
};

initRouter(routes);

window.addEventListener('hashchange', () => {
  const h = app.querySelector('.page-title');
  if(h) h.setAttribute('tabindex', '-1'), h.focus();
});