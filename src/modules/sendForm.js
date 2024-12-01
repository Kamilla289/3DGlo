const sendForm = ({ formId, someElem = [] }) => {
 const form = document.getElementById(formId);
 const formElements = form.querySelectorAll('input');
 const formEmail = document.querySelectorAll('.form-email');
 const statusBlock = document.createElement('div');
 const loadText = 'Загрузка...';
 const successText = 'Спасибо! Наш менеджер с вами свяжется';
 const errorText = 'Ошибка...';

 const validate = (list) => {
  let success = true;
  return success;
 };

 const sendData = (data) => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json());
 };

 const submitForm = () => {
  const formData = new FormData(form);
  const formBody = {};

  statusBlock.textContent = loadText;
  form.appendChild(statusBlock);

  formData.forEach((value, key) => {
    formBody[key] = value;
  });

  someElem.forEach(elem => {
    const element = document.getElementById(elem.id);
    if (elem.type === 'block') {
      formBody[elem.id] = element.textContent;
    } else if (elem.type === 'input') {
      formBody[elem.id] = element.value;
    }
  });

  if (validate(Array.from(formElements))) {
    sendData(formBody)
      .then(data => {
        statusBlock.textContent = successText;
        formElements.forEach(input => {
          input.value = ''
        });
        // setTimeout(() => {
        //   statusBlock.textContent = '';
        // }, 3000);
      })
      .catch(error => {
        statusBlock.textContent = errorText;
        // setTimeout(() => {
        //   statusBlock.textContent = '';
        // }, 5000);
      });
  } else {
    alert('Данные неправильные!');
  }
 }

 statusBlock.style.color = 'white';
 
 formEmail.forEach(input => {
  input.setAttribute('required', 'true');
 });

  try {
    if (!form) {
      throw new Error('Форма не найдена!');
    }
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  };
}

export default sendForm;