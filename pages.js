import { formTemplate, homeTemplate, aboutTemplate } from './templates.js';
import { setupFormValidation } from './validator.js';

const STORAGE_KEY = 'entregaIII_formdata_v1';

export function mountHome(container){
  container.innerHTML = homeTemplate();
}

export function mountAbout(container){
  container.innerHTML = aboutTemplate();
}

export function mountForm(container){
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  container.innerHTML = formTemplate(saved);
  const form = container.querySelector('#contactForm');
  setupFormValidation(form, (data) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    alert('Dados salvos com sucesso no localStorage.');
    location.hash = '#/home';
  });
}