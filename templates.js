export function renderTemplate(container, templateFn, data = {}){
  const html = templateFn(data);
  container.innerHTML = html;
}

export function homeTemplate(){
  return `
    <section>
      <h2 class="page-title">Bem-vindo</h2>
      <div class="card">
        <p>Esta é uma SPA de exemplo construída para a Entrega III. Use o menu para navegar.</p>
      </div>
    </section>
  `;
}

export function aboutTemplate(){
  return `
    <section>
      <h2 class="page-title">Sobre</h2>
      <div class="card">
        <p class="small">Projeto demonstrando manipulação do DOM, templates, validação e localStorage.</p>
      </div>
    </section>
  `;
}

export function formTemplate(savedData = {}){
  const name = savedData.name ? savedData.name : '';
  const email = savedData.email ? savedData.email : '';
  const message = savedData.message ? savedData.message : '';
  return `
    <section>
      <h2 class="page-title">Formulário</h2>
      <div class="card">
        <form id="contactForm" novalidate>
          <div class="form-group">
            <label for="name">Nome</label>
            <input id="name" name="name" value="${escapeHtml(name)}" required />
            <div class="form-error" data-error-for="name"></div>
          </div>
          <div class="form-group">
            <label for="email">E-mail</label>
            <input id="email" name="email" value="${escapeHtml(email)}" required />
            <div class="form-error" data-error-for="email"></div>
          </div>
          <div class="form-group">
            <label for="message">Mensagem</label>
            <textarea id="message" name="message">${escapeHtml(message)}</textarea>
            <div class="form-error" data-error-for="message"></div>
          </div>
          <div class="footer-row">
            <button class="btn" type="submit">Enviar</button>
            <div class="small">Os dados serão salvos no localStorage ao enviar.</div>
          </div>
        </form>
      </div>
    </section>
  `;
}

function escapeHtml(str){
  if(!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}