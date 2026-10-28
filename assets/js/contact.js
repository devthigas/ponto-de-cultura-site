// Contact Form Handler

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const alertBox = document.getElementById('contact-alert');
  const subjectSelect = document.getElementById('subject');

  // Preselect subject from URL query string if present (e.g. ?subject=espetaculo)
  const urlParams = new URLSearchParams(window.location.search);
  const subjectParam = urlParams.get('subject');
  if (subjectParam && subjectSelect) {
    const matchingOption = subjectSelect.querySelector(`option[value="${subjectParam}"]`);
    if (matchingOption) {
      subjectSelect.value = subjectParam;
    }
  }

  if (!form) return;

  function showAlert(message, type) {
    if (!alertBox) return;
    alertBox.classList.remove('hidden', 'bg-[#def7ec]', 'text-[#03543f]', 'border-[#bcf0da]', 'bg-[#fde8e8]', 'text-[#9b1c1c]', 'border-[#f8b4b4]');
    if (type === 'success') {
      alertBox.classList.add('bg-[#def7ec]', 'text-[#03543f]', 'border', 'border-[#bcf0da]');
    } else {
      alertBox.classList.add('bg-[#fde8e8]', 'text-[#9b1c1c]', 'border', 'border-[#f8b4b4]');
    }
    alertBox.textContent = message;
    alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (alertBox) alertBox.classList.add('hidden');

    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const subject = form.elements['subject'].value;
    const message = form.elements['message'].value.trim();

    if (!name || !email || !subject || !message) {
      showAlert('Por favor, preencha todos os campos obrigatórios.', 'error');
      return;
    }

    if (!validateEmail(email)) {
      showAlert('Por favor, insira um e-mail válido.', 'error');
      return;
    }

    const whatsappNumber = form.dataset.whatsappNumber;
    const subjectLabel = subjectSelect.selectedOptions[0].text;
    const whatsappMessage = [
      'Olá! Gostaria de falar com o Ponto de Cultura Kombinação.',
      `Nome: ${name}`,
      `E-mail: ${email}`,
      `Assunto: ${subjectLabel}`,
      'Mensagem:',
      message,
    ].join('\n');

    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  });
});
