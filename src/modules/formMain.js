const formMain = () => {
  const formText = document.getElementById('form1-name');
  formText.addEventListener('input', (event) => {
    event.target.value = event.target.value.match(/^[А-ЯЁ\s-]+$/i);
  });
  const formEmail = document.getElementById('form1-email');
  formEmail.addEventListener('input', (event) => {
    event.target.value = event.target.value.match(/^[A-Z\d\@\-\_\.\!\~\*\']+$/i);
  });
  const formPhone = document.getElementById('form1-phone');
  formPhone.addEventListener('input', (event) => {
    event.target.value = event.target.value.match(/^[0-9\(\)\-]+$/);
  });
}


export default formMain;