const formFooter = () => {
  const formText = document.getElementById('form2-name');
  formText.addEventListener('input', (event) => {
    event.target.value = event.target.value.match(/^[А-ЯЁ\s-]+$/i);
  });
  const formTextMessage = document.getElementById('form2-message');
  formTextMessage.addEventListener('input', (event) => {
    event.target.value = event.target.value.match(/^[А-ЯЁ\s-]+$/i);
  });
  const formEmail = document.getElementById('form2-email');
  formEmail.addEventListener('input', (event) => {
    event.target.value = event.target.value.match(/^[A-Z\d\@\-\_\.\!\~\*\']+$/i);
  });
  const formPhone = document.getElementById('form2-phone');
  formPhone.addEventListener('input', (event) => {
    event.target.value = event.target.value.match(/^[0-9\(\)\-]+$/);
  });
}

export default formFooter;