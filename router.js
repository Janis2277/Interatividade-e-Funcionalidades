export function initRouter(routes){
  function onHashChange(){
    const hash = location.hash.replace(/^#/, '') || '/home';
    const route = routes[hash] || routes['/404'];
    route();
  }
  window.addEventListener('hashchange', onHashChange);
  window.addEventListener('load', onHashChange);
}