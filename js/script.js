
/* --- Menu responsivo --- */
const btnToggle = document.getElementById('btn-toggle');
const navLinks = document.getElementById('nav-links');
btnToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

/* --- Tema claro/escuro --- */
const themeToggle = document.getElementById('theme-toggle');
const rootHtml = document.documentElement;

// carrega preferência do localStorage 
if (localStorage.getItem('theme') === 'dark') rootHtml.classList.add('dark');

themeToggle.addEventListener('click', () => {
  rootHtml.classList.toggle('dark');
  const isDark = rootHtml.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
});

/* --- Atualiza ano no footer --- */
document.getElementById('year').textContent = new Date().getFullYear();

/* --- Validação do formulário e simulação de envio --- */
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

function isValidEmail(email){
  // validação simples e robusta: verifica padrão básico de email
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // impede envio real

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  // validação
  if (!name || !email || !message) {
    showMessage('Por favor, preencha todos os campos.', true);
    return;
  }
  if (!isValidEmail(email)) {
    showMessage('E-mail inválido. Use o formato usuario@dominio.com', true);
    return;
  }

  // Simulação de envio: limpar campos e mostrar confirmação
  contactForm.reset();
  showMessage('Mensagem enviada com sucesso!', false);
});

/* Função para mostrar mensagens de erro/sucesso */
function showMessage(text, isError){
  formMessage.classList.remove('hidden');
  formMessage.textContent = text;
  formMessage.style.padding = '.6rem';
  formMessage.style.borderRadius = '6px';
  formMessage.style.marginTop = '.6rem';
  formMessage.style.background = isError ? 'rgba(255,100,100,0.12)' : 'rgba(0,200,100,0.08)';
  // opcional: remover a mensagem após 5s
  setTimeout(()=> formMessage.classList.add('hidden'), 5000);
}
