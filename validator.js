export function setupFormValidation(formElement, onValidSubmit){
  const fields = Array.from(formElement.elements).filter(el => el.name);

  function validateField(field){
    const name = field.name;
    const value = (field.value || '').trim();
    let error = '';

    if(field.required && !value){
      error = 'Campo obrigatório.';
    }
    if(!error && name === 'email'){
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!re.test(value)) error = 'E-mail inválido.';
    }
    return error;
  }

  function showError(field, message){
    const errEl = formElement.querySelector(`[data-error-for="${field.name}"]`);
    if(errEl) errEl.textContent = message;
    field.classList.toggle('input-invalid', !!message);
    field.classList.toggle('input-valid', !message && field.value);
  }

  fields.forEach(f => {
    f.addEventListener('input', () => {
      const msg = validateField(f);
      showError(f, msg);
    });
    f.addEventListener('blur', () => {
      const msg = validateField(f);
      showError(f, msg);
    });
  });

  formElement.addEventListener('submit', (ev) =>{
    ev.preventDefault();
    let hasError = false;
    fields.forEach(f => {
      const msg = validateField(f);
      showError(f, msg);
      if(msg) hasError = true;
    });
    if(hasError){
      const firstError = formElement.querySelector('.input-invalid');
      if(firstError) firstError.focus();
      return;
    }
    const data = fields.reduce((acc, f) => (acc[f.name] = f.value.trim(), acc), {});
    onValidSubmit(data, formElement);
  });
}