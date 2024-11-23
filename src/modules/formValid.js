const formValid = () => {
  const formText = document.querySelectorAll('#form1-name, #form2-name, #form3-name, #form2-message');
  const formEmail = document.querySelectorAll('#form1-email, #form2-email, #form3-email');
  const formPhone = document.querySelectorAll('#form1-phone, #form2-phone, #form3-phone');

  formText.forEach((input) => {
    input.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^А-ЯЁ\s-]/gi, '');
    });
  });

  formEmail.forEach((input) => {
    input.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^A-Z0-9@-_.!~*',]/gi, '');
    })
  });

  formPhone.forEach((input) => {
    input.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^0-9()-]/g, '');
    })
  });
}


export default formValid;