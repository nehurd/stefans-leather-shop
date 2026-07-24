import './theme.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

document.getElementById('copyright-year').textContent = new Date().getFullYear();

// TODO: replace mock submit handler with real backend integration
const inquiryForm = document.getElementById('inquiry-form');
const inquirySuccess = document.getElementById('inquiry-success');

inquiryForm.addEventListener('submit', (event) => {
  event.preventDefault();
  event.stopPropagation();

  if (!inquiryForm.checkValidity()) {
    inquiryForm.classList.add('was-validated');
    inquirySuccess.classList.add('d-none');
    return;
  }

  inquirySuccess.classList.remove('d-none');
  inquiryForm.reset();
  inquiryForm.classList.remove('was-validated');
});
